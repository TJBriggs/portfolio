const attributes = {
	bgColor: {
		type: 'string',
		default: 'FFF',
	},
	headline: {
		type: 'string',
		default: '',
		selector: '.card-text__headline',
	},
	linkText: {
		type: 'string',
		default: '',
		selector: '.link-fields__link',
	},
	linkToggle: {
		type: 'boolean',
		default: false,
		selector: '.link-fields__link',
	},
	linkURL: {
		type: 'string',
		default: '',
		selector: '.link-fields__link',
	},
	text: {
		type: 'string',
		source: 'html',
		selector: '.card-text__text',
	},
};

export default attributes;
