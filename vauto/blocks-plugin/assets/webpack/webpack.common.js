const path = require('path');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');
const webpack = require('webpack'); // to access built-in plugins
module.exports = {
	entry: {
		//'js/scripts': './js/scripts.js',
		'js/editor-scripts': './js/editor-scripts.js',
		//'js/frontend-scripts': './js/frontend-scripts.js',
		//'js/admin-scripts': './js/admin-scripts.js',
		//'css/style': './css/style.css',
		'css/editor-styles': './css/editor-styles.css',
		//'css/frontend-styles': './css/frontend-styles.css'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), '../dist'),
		clean: true
	},
	stats: {
		all: false,
		errors: true,
		modules: false,
		warnings: true,
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: false,
	},
	externals: {
		jquery: 'jQuery',
		lodash: 'lodash'
	},
	module: {
		rules: [
			loaders.JSLoader,
			loaders.CSSLoader,
			loaders.SVGr
		]
	},
	plugins: [
		plugins.ESLintPlugin,
		plugins.MiniCssExtractPlugin,
		plugins.CopyWebpackPlugin,
		plugins.ImageminPlugin,
		plugins.StyleLintPlugin,
		plugins.WebpackBar,
		plugins.CleanWebpackPlugin,
		plugins.RemoveEmptyScriptsPlugin
	],
};
