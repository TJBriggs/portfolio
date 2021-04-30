const attributes = {
	bgColor: {
		type: 'string',
		default: 'FFF',
	},
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
	linkText: {
		type: 'string',
		default: '',
		selector: '.hero-block__link',
	},
	linkToggle: {
		type: 'boolean',
		default: false,
		selector: '.hero-block__link',
	},
	linkURL: {
		type: 'string',
		default: '',
		selector: '.hero-block__link',
	},
	text: {
		type: 'string',
		source: 'html',
		selector: '.hero-block__text',
	},
};

export default attributes;
