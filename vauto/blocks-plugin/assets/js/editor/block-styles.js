import domReady from '@wordpress/dom-ready';

domReady(function () {

	/* Register Custom Block Styles */
	wp.blocks.registerBlockStyle('mx/button', {
		isDefault: true,
		name: 'primary-button',
		label: 'Primary',
	});

	wp.blocks.registerBlockStyle('mx/button', {
		name: 'secondary-button',
		label: 'Secondary',
	});

	wp.blocks.registerBlockStyle('mx/button', {
		name: 'tertiary-button',
		label: 'Tertiary',
	});

	wp.blocks.registerBlockStyle('mx/button', {
		name: 'underline-button',
		label: 'Underline',
	});

	wp.blocks.registerBlockStyle('mx/button', {
		name: 'text-link',
		label: 'Text Link',
	});

	wp.blocks.registerBlockStyle('mx/button', {
		name: 'arrow-link',
		label: 'Arrow Link',
	});

	wp.blocks.registerBlockStyle('mx/button', {
		name: 'modal-link',
		label: 'Modal Link',
	});

	/* Unregister Core Block Styles */
	/* Button */
	wp.blocks.unregisterBlockStyle('core/button', 'fill');
	wp.blocks.unregisterBlockStyle('core/button', 'outline');
	/* Image */
	wp.blocks.unregisterBlockStyle('core/image', 'default');
	wp.blocks.unregisterBlockStyle('core/image', 'rounded');
	/* Quote */
	wp.blocks.unregisterBlockStyle('core/quote', 'default');
	wp.blocks.unregisterBlockStyle('core/quote', 'large');
	/* Separator */
	wp.blocks.unregisterBlockStyle('core/separator', 'default');
	wp.blocks.unregisterBlockStyle('core/separator', 'wide');
	wp.blocks.unregisterBlockStyle('core/separator', 'dots');
	/* Site Logo */
	wp.blocks.unregisterBlockStyle('core/site-logo', 'default');
	wp.blocks.unregisterBlockStyle('core/site-logo', 'rounded');
	/* Social Links */
	wp.blocks.unregisterBlockStyle('core/social-links', 'default');
	wp.blocks.unregisterBlockStyle('core/social-links', 'logos-only');
	wp.blocks.unregisterBlockStyle('core/social-links', 'pill-shape');
});
