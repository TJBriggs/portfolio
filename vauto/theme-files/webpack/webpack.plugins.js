const path = require( 'path' );
const _MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const _StyleLintPlugin = require( 'stylelint-webpack-plugin' );
const _ESLintPlugin = require( 'eslint-webpack-plugin' );
const _CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const _ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;
const _WebpackBar = require( 'webpackbar' );
const _RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const isProduction = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = new _MiniCssExtractPlugin( {
	filename: '[name].css',
	chunkFilename: '[id].css'
} );

const CopyWebpackPlugin = new _CopyWebpackPlugin(
	{
		patterns: [
			{
				from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
				to: '[path][name][ext]',
				noErrorOnMissing: true,
				context: path.resolve( process.cwd(), './assets/' ),
			},
		]
	}
);

const ImageminPlugin = new _ImageminPlugin( {
	disable: !isProduction,
	test: /\.(jpe?g|png|gif|svg)$/i,
} );

const WebpackBar = new _WebpackBar();

const ESLintPlugin = new _ESLintPlugin( {
	overrideConfigFile: path.resolve( __dirname, '.eslintrc' ),
	context: path.resolve( __dirname, '../assets/js' ),
	files: '**/*.js',
} );

const StyleLintPlugin = new _StyleLintPlugin( {
	configFile: path.resolve( __dirname, 'stylelint.config.js' ),
	context: path.resolve( __dirname, '../assets/css' ),
	files: '**/*.css',
} );

const RemoveEmptyScriptsPlugin = new _RemoveEmptyScriptsPlugin();

module.exports = {
	ESLintPlugin: ESLintPlugin,
	MiniCssExtractPlugin: MiniCssExtractPlugin,
	CopyWebpackPlugin: CopyWebpackPlugin,
	ImageminPlugin: ImageminPlugin,
	StyleLintPlugin: StyleLintPlugin,
	WebpackBar: WebpackBar,
	CleanWebpackPlugin: new CleanWebpackPlugin(),
	RemoveEmptyScriptsPlugin: RemoveEmptyScriptsPlugin
};
