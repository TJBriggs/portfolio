module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-for': {},
		'postcss-simple-vars': {},
		'postcss-nested': {},
		'postcss-mixins': {},
		'postcss-pxtorem': {
			"propList": [
				'font',
				'font-size',
				'left',
				'top',
				'right',
				'bottom',
				'letter-spacing',
				'margin',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'padding',
				'padding-top',
				'padding-right',
				'padding-bottom',
				'padding-left',
				'border',
				'border-top',
				'border-right',
				'border-bottom',
				'border-left',
				'width',
				'max-width'
			],
		},
		'postcss-extend-rule': {},
		'postcss-object-fit-images': {},
		'postcss-preset-env': {
			browsers: 'last 2 versions',
			stage: 0,
			autoprefixer: {
				grid: true,
			}
		},
		'cssnano': {},
	},
};
