const attributes = {
	bgColor: {
		type: 'string',
		default: 'FFF',
	},
	headline: {
		type: 'string',
		default: '',
		selector: '.centered-cta__headline',
	},
	linkText: {
		type: 'string',
		default: '',
		selector: '.centered-cta__link',
	},
	linkToggle: {
		type: 'boolean',
		default: false,
		selector: '.centered-cta__link',
	},
	linkURL: {
		type: 'string',
		default: '',
		selector: '.centered-cta__link',
	},
	text: {
		type: 'string',
		source: 'html',
		selector: '.centered-cta__text',
	},
};

export default attributes;
