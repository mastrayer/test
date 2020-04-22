import fs from 'fs';

export function mkdirIfNotExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
  }
}

export function unique(arr: string[]) {
  return [...new Set(arr)];
}
