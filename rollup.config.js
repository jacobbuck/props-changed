import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'default' },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  external: ['curry'],
  plugins: [babel({ babelHelpers: 'bundled' })],
};
