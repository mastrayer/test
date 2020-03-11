import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescriptPlugin from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

process.env.BABEL_ENV = 'production';

const extensions = ['.ts', '.tsx'];

export default {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({extensions}),
    commonjs({include: 'node_modules/**'}),
    typescriptPlugin({
      useTsconfigDeclarationDir: true,
      typescript: require('ttypescript')
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      runtimeHelpers: true,
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {version: require('@babel/runtime/package.json').version, useESModules: true},
        ],
      ]}
    ),
    terser()
  ],
  output: [
    {
      file: pkg.module,
      format: 'esm',
      indent: false
    }
  ]
};