'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
	},
	plugins: [
		// Run BrowserSync.
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: 'https://vauto-v2.pantheonlocal.com/',
				open: false,
				files: [
					'**/*.php',
					'dist/js/**/*.js',
					'dist/css/**/*.css',
					'dist/svg/**/*.svg',
					'dist/images/**/*.{jpg,jpeg,png,gif}',
					'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}',
				],
			},
			{
				injectCss: true,
				reload: false,
			},
		),
	],
});
