const attributes = {
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
		type: 'string',
		default: '',
		selector: '.icon-callout__text',
	},
};

export default attributes;
