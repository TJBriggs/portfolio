const path = require( 'path' );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

const isProduction = process.env.NODE_ENV === 'production';

const CSSLoader = {
	test: /\.css$/i,
	exclude: /node_modules/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: path.resolve( __dirname, '../dist/css/' )
			}
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				sourceMap: !isProduction,
				url: false
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					config: path.resolve( __dirname, 'postcss.config.js' ),
				},
			},
		},
	],
};

const JSLoader = {
	test: /\.js$/i,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [ '@babel/preset-env' ],
			cacheDirectory: true,
			sourceMap: !isProduction,
		}
	}
};

const SVGr = {
	test: /\.svg$/,
	use: [ '@svgr/webpack', 'url-loader' ]
};

module.exports = {
	JSLoader: JSLoader,
	CSSLoader: CSSLoader,
	SVGr: SVGr,
};
