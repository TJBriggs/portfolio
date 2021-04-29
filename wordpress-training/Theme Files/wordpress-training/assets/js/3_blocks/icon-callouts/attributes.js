const attributes = {
	headline: {
		type: 'string',
		default: '',
		selector: '.icon-callouts__headline',
	},
	text: {
		type: 'array',
		source: 'children',
		selector: '.icon-callouts__text',
	},
};

export default attributes;
