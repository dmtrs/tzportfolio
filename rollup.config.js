import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from 'rollup-plugin-json';
import scss from 'rollup-plugin-scss';
import css from 'rollup-plugin-import-css';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/app.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [/**
                scss({
                  processor: () => postcss([autoprefixer()]),
                }),**/
                css(),
                json({
                  include: 'src/**',
                }),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};
