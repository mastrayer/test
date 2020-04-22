import axios from 'axios';
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { Readable } from 'stream';
import SVGO from 'svgo';
import { mkdirIfNotExists } from './index';

function getClient(token: string) {
  return axios.create({
    baseURL: 'https://api.figma.com/v1',
    headers: {
      'X-FIGMA-TOKEN': token,
    },
  });
}

interface FigmaVersionsPayload {
  versions: {
    id: string;
    created_at: string;
    label: string | null;
  }[];
}
export async function getVersions(token: string, file: string) {
  const client = getClient(token);
  const {data} = await client.get(`/files/${file}/versions`);

  return data as FigmaVersionsPayload;
}

export async function getLabeledVersions(token: string, file: string) {
  const {versions} = await getVersions(token, file);
  return versions.filter((v) => v.label);
}

export async function getLatestLabeledVersion(token: string, file: string) {
  const versions = await getLabeledVersions(token, file);
  return versions[0];
}

interface FigmaFile {
  components: {
    [id: string]: {
      name: string;
    };
  };
}
export async function getFile(token: string, file: string, version: string) {
  const client = getClient(token);
  const {data} = await client.get(`/files/${file}`, {
    params: {
      version,
    },
  });

  return data as FigmaFile;
}

type FigmaImageFormat = 'jpg' | 'png' | 'svg' | 'pdf';
interface FigmaImagesPayload {
  err: null;
  images: {
    [id: string]: string;
  };
}
export async function getImages(file: string, token: string, ids: string[], format: FigmaImageFormat, version: string) {
  const client = getClient(token);
  const {data} = await client.get(`/images/${file}`, {
    params: {
      ids: ids.join(','),
      format,
      version,
    },
  });

  return data as FigmaImagesPayload;
}

export interface RemoteFile {
  url: string;
  name: string;
}
function downloadFile(file: RemoteFile, to: string) {
  return new Promise((resolve, reject) => {
    axios
      .get(file.url, {
        responseType: 'stream',
      })
      .then((res) => {
        const stream = (res.data as Readable).pipe(fs.createWriteStream(path.resolve(to, file.name)));
        stream.on('finish', () => resolve());
        stream.on('error', reject);
      });
  });
}
export function downloadFiles(files: RemoteFile[], to: string) {
  mkdirIfNotExists(to);
  return Promise.all(files.map((file) => downloadFile(file, to)));
}

const svgo = new SVGO({
  plugins: [
    {removeViewBox: false},
    {
      convertColors: {
        currentColor: true,
      },
    },
  ],
});
const writeFileAsync = promisify(fs.writeFile);
async function downloadAndOptimizeSvg(file: RemoteFile, to: string) {
  const {data} = await axios.get(file.url);
  const svg = await svgo.optimize(data);

  await writeFileAsync(path.resolve(to, file.name), svg.data);
}
export function downloadAndOptimizeSvgs(files: RemoteFile[], to: string) {
  mkdirIfNotExists(to);
  return Promise.all(files.map((file) => downloadAndOptimizeSvg(file, to)));
}
