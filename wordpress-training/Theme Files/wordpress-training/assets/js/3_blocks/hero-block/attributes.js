const attributes = {
	headline: {
		type: 'string',
		default: '',
		selector: '.hero-block__headline',
	},
	imgAlt: {
		type: 'string',
		default: '',
	},
	imgID: {
		type: 'number',
		default: '',
	},
	imgURL: {
		type: 'string',
		default: '',
	},
	text: {
		type: 'array',
		source: 'children',
		selector: '.hero-block__text',
	},
};

export default attributes;
