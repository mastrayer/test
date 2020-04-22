import dotenv from 'dotenv';
dotenv.config();

export default {
  ...process.env,
  SRC_PATH: './src',
  SVGS_PATH: './svgs',
  LIB_PATH: './lib',
  FIGMA_FILE: 'BF1bVXxgy4IvO79LWcbeGW'
} as {[key: string]: string};
