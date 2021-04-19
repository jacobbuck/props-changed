import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    exports: 'default',
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ['curry'],
  plugins: [babel({ babelHelpers: 'bundled' })],
};
