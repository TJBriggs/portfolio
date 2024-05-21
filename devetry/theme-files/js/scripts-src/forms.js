/*------------------------------------*\
	:: Forms - Adaptive Placeholders
\*------------------------------------*/
var forms = function () {
	// Clear validation message on click
	$( '.gform_wrapper' ).on( 'click', '.validation_message' , function() {
		$(this).hide();
	});
};
$(document).ready(function() {
	forms();
});