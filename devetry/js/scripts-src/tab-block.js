/*------------------------------------*\
	:: Forms - Adaptive Placeholders
\*------------------------------------*/
var tabBlock = function () {
	$('.tabs-block__nav-item:first-of-type').addClass('active');
	$('.tabs-block__tab-item:first-of-type').addClass('active');

	$('html').on('click', '.tabs-block__nav-item', function() {
		$this = $(this);
		$(".tabs-block__nav li").removeClass("active");
		$(".tabs-block__tab-wrap .tabs-block__tab-item").removeClass("active");
		var navId = $this.attr('id');
		var navId = navId[navId.length -1];
		var tabId = '#tab--' + navId;
		$('.tabs-block__tab-wrap').find(tabId).addClass('active');
		$this.addClass('active');
	});

};
$(document).ready(function() {
	tabBlock();
});