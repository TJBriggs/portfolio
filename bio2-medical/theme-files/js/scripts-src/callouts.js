/*------------------------------------*\
    ::  Card Callout Functionality
\*------------------------------------*/	
var callouts = function() {
	// Find middle card and make active
    $('.card-callouts__wrap').each(function() {
    	var $card = $(this).find('.card-callouts__card');
       	var $midCard = $card.eq(1);
       	$midCard.addClass('active');
       	// Make card active on hover, remove active from all other cards
       	$card.hover(function() {
      		$card.removeClass('active');
      		$(this).addClass('active');
    	});
    });
};
$(document).ready(function() {
    callouts();
});