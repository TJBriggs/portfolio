/*------------------------------------*\
    :: Accordion Effects
\*------------------------------------*/
var accordion = function() {
	var $link = $('.accordions__link');
    $link.click(function(){
    	var $this = $(this);
    	// Remove active class from all
    	if($this.hasClass('active')) {
    		// Remove active class when clicking on open accordion
    		$this.removeClass('active');
    		$this.next().slideUp(400);
    	} else {
        	$link.removeClass('active');
        	// Add active class back to the one clicked
        	$this.addClass('active');
	      	// Expand or collapse this panel
	      	$this.next().slideToggle(400);
	      	// Hide the other panels
	      	$('.accordions__content').not($this.next()).slideUp(400);
    	}
	});
};
$(document).ready(function() {
    accordion();
});