/**
 *
 * Block Editor Scripts
 *
 */

(function ($) {
	const $html = $('html');

	function toggleLinkFields(element) {
		element.parent().toggleClass('active');
		element.closest('.link-wrap').toggleClass('active');
	}

	$html.on('click', '.block-editor-url-input__button button', function () {
		const $this = $(this);
		const $input = $this.parent().find('.block-editor-url-input input');

		if (
			$this.hasClass('components-toolbar__control') ||
			$this.hasClass('block-editor-url-input__back')
		) {
			toggleLinkFields($this);
		} else if ($input.val() !== '') {
			toggleLinkFields($this);
		}
	});
})(jQuery);
