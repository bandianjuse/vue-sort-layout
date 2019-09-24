import resolve from 'rollup-plugin-node-resolve';
import vuePlugin from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'examples/src/main.js',
  output: {
    file: 'examples/bundle.js',
    format: 'iife',
  },
  plugins: [
    commonjs(),
    resolve(),
    vuePlugin(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};