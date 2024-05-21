/*------------------------------------*\
	:: Check Browser Version - Hero
\*------------------------------------*/
// Check browser type and add class to hero overlay if IE or Edge
var checkBrowser = function () {
	if (document.documentMode || /Edge/.test(navigator.userAgent)) {
		$('.hero-block__overlay').addClass('ie-edge');
	}
};
$(document).ready(function() {
	checkBrowser();
});