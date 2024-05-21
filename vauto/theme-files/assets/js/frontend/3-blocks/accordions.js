/**
 *
 * Accordions
 *
 */
(function ($) {
	const $accordionToggle = $('.accordion__toggle');
	if ($accordionToggle.length) {
		$accordionToggle.each(function () {
			const $this = $(this);
			$this.on('click', function () {
				const accordion = $this.parent();
				const accordionContent = $this.next();
				if (accordion.hasClass('expanded')) {
					accordionContent.slideUp(150);
					accordion.removeClass('expanded');
				} else {
					accordionContent.slideDown(150);
					accordion.addClass('expanded');
				}
			});
		});
	}
})(jQuery);
