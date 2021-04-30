// Webpack settings exports.
module.exports = {
	entries: {
		// JS files.
		scripts: './assets/js/scripts.js',
		blocks: './assets/js/blocks.js',
		'admin-scripts': './assets/js/admin-scripts.js',
		'customizer-preview': './assets/js/4_admin/customizer/customizer-preview.js',
		'customizer-controls': './assets/js/4_admin/customizer/customizer-controls.js',

		// CSS files.
		styles: './assets/css/styles.css',
		'admin-styles': './assets/css/admin-styles.css',
		'block-admin-styles': './assets/css/block-admin-styles.css',
		'login-styles': './assets/css/login-styles.css',
	},
	filename: {
		js: 'js/[name].min.js',
		css: 'css/[name].min.css',
	},
	paths: {
		src: {
			base: './assets/',
			css: './assets/css/',
			js: './assets/js/',
		},
		dist: {
			base: './dist/',
			clean: ['./images', './css', './js'],
		},
	},
	stats: {
		// Copied from `'minimal'`.
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		// Our additional options.
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true,
	},
	copyWebpackConfig: {
		from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]',
	},
	ImageminPlugin: {
		test: /\.(jpe?g|png|gif|svg)$/i,
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://tenup-scaffold.test',
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
	performance: {
		maxAssetSize: 200000,
	},
	manifestConfig: {
		basePath: '',
	},
};
