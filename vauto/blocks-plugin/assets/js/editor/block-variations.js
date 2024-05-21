import domReady from '@wordpress/dom-ready';

domReady(function () {
	/* Register Button Variations */
	wp.blocks.registerBlockVariation('mx/button', [
		{
			name: 'large',
			title: 'Large',
			attributes: { className: 'is-style-large-button' },
		},
		{
			name: 'medium',
			title: 'Medium',
			attributes: { className: 'is-style-medium-button' },
			isDefault: true,
		},
		{
			name: 'small',
			title: 'Small',
			attributes: { className: 'is-style-small-button' },
		},
		{
			name: 'xsmall',
			title: 'xSmall',
			attributes: { className: 'is-style-xsmall-button' },
		},
		{
			name: 'compact',
			title: 'Compact',
			attributes: { className: 'is-style-compact-button' },
		},
	]);
});
