import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import * as fs from 'fs';
import path from 'path';

const PACKAGE_NAME = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf-8'));

const isCommonModule = PACKAGE_NAME.includes('package/common-module');
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
};
const extensions = ['.js', '.ts', '.tsx'];

const babelOptions = {
  exclude: /node_modules/,
  extensions,
  configFile: '../../babel.config.json',
  babelHelpers: 'runtime'
};
const nodeOptions = {
  extensions,
};
const typescriptOptions = {
  tsconfig: `${PACKAGE_NAME}/tsconfig.json`,
  declaration: true,
  declarationDir: 'dist',
  emitDeclarationOnly: true,
  declarationMap: true,
  exclude: ["**/__tests__", "**/*.test.ts", "**/*.test.tsx"],
};

export default {
  input: `${PACKAGE_NAME}/src/index.ts`,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'auto',
      entryFileNames: `index.cjs.js`, 
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames:  `index.esm.js`,
    }
  ],
  plugins: [
    nodeResolve(nodeOptions),
    typescript(typescriptOptions),
    babel(babelOptions),
    commonjs(commonjsOptions),
    terser(),
  ],
  treeshake: !isCommonModule,
};