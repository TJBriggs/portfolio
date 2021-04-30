const attributes = {
	linkOption: {
		type: 'boolean',
		default: false,
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
	imageType: {
		type: 'boolean',
		default: false,
	},
	linkToggle: {
		type: 'boolean',
		default: false,
	},
	linkURL: {
		type: 'string',
		default: '',
		selector: '.card-image',
	},
};

export default attributes;
