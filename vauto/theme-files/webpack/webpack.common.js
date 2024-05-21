const path = require('path');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');
const webpack = require('webpack'); // to access built-in plugins
module.exports = {
	entry: {
		'js/scripts': './assets/js/scripts.js',
		'js/editor-scripts': './assets/js/editor-scripts.js',
		'js/frontend-scripts': './assets/js/frontend-scripts.js',
		'js/admin-scripts': './assets/js/admin-scripts.js',
		'css/style': './assets/css/style.css',
		'css/style-editor': './assets/css/style-editor.css',
		'css/frontend-styles': './assets/css/frontend-styles.css',
		'css/admin-styles': './assets/css/admin-styles.css',
		'css/login-styles': './assets/css/login-styles.css',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), 'dist'),
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
