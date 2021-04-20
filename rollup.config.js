import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      exports: 'default',
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['curry'],
  plugins: [babel({ babelHelpers: 'bundled' })],
};
