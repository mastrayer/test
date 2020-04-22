import fs from 'fs';
import path from 'path';
import child_process from 'child_process';

import {getLatestLabeledVersion} from './utils/figma';
import config from './utils/config';

const {FIGMA_TOKEN, FIGMA_FILE, SVGS_PATH} = config;

async function main() {
  const latestVersion = await getLatestLabeledVersion(FIGMA_TOKEN, FIGMA_FILE);
  let hasNewVersion = true;

  try {
    // 기존에 다운받아둔 svgs 버전과 비교해서 이미 최신버전이면 다시 다운받지 않음
    const infoJson = fs.readFileSync(path.resolve(SVGS_PATH, 'info.json'), {encoding: 'utf8'});
    const info = JSON.parse(infoJson);
    hasNewVersion = info.version.id === latestVersion.id;
  } catch {
    null;
  }

  console.log(hasNewVersion);

  // child_process.exec(`echo -n "##[set-output name=hasNewVersion]${hasNewVersion}"`);
}

main();
