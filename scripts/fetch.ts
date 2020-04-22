import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import intersection from 'lodash.intersection';

import {getLatestLabeledVersion, getFile, getImages, downloadAndOptimizeSvgs, RemoteFile} from './utils/figma';
import config from './utils/config';
import {unique} from './utils';

const {FIGMA_TOKEN, FIGMA_FILE, SVGS_PATH} = config;

async function main() {
  const latestVersion = await getLatestLabeledVersion(FIGMA_TOKEN, FIGMA_FILE);
  const previousSvgs = [];

  try {
    const infoJson = fs.readFileSync(path.resolve(SVGS_PATH, 'info.json'), {encoding: 'utf8'});
    const info = JSON.parse(infoJson);

    previousSvgs.push(...info.svgs);
  } catch {
    null;
  }

  const figmaFile = await getFile(FIGMA_TOKEN, FIGMA_FILE, latestVersion.id);
  child_process.execSync('rm -rf', {
    input: 'svgs/!(info.json)',
  });

  const images = await getImages(FIGMA_FILE, FIGMA_TOKEN, Object.keys(figmaFile.components), 'svg', latestVersion.id);

  const files: RemoteFile[] = Object.keys(images.images).map((id) => ({
    name: `${figmaFile.components[id].name}.svg`,
    url: images.images[id],
  }));

  const currentSvgs = unique(files.map((f) => f.name));
  {
    // 중복된 컴포넌트 이름이 존재
    if (currentSvgs.length !== files.length) {
      currentSvgs.forEach((name) =>
        files.splice(
          files.findIndex((f) => f.name === name),
          1
        )
      );
      throw new Error(
        ['Not allowed duplicated component name', ...files.map((f, i) => `\t${i + 1}) ${f.name}`)].join('\n')
      );
    }
  }

  {
    const intersected = intersection(previousSvgs, currentSvgs);

    // 기존 아이콘이 삭제되었으면 major version up, 그 외의 변경사항이 있다면 minor version up
    if (previousSvgs.length === intersected.length) {
      child_process.execSync('yarn version --minor --no-git-tag-version');
    } else {
      child_process.execSync('yarn version --major --no-git-tag-version');
    }
  }

  await downloadAndOptimizeSvgs(files, SVGS_PATH);
  fs.writeFileSync(
    path.resolve(SVGS_PATH, 'info.json'),
    JSON.stringify({
      version: latestVersion,
      svgs: currentSvgs,
    })
  );
}

main();
