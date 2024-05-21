/*------------------------------------*\
    :: Open Team Member Info On Click
\*------------------------------------*/
jQuery(function($){ 
    var team = function () {
    	/*--------------------------------------------*\
	    	:: Open Team Member Details on Click of image
	    \*--------------------------------------------*/
	    $(".member").on('click',function() {
	        var $this = $(this);
	        $this.parent().nextAll(".team-grid__row-wrap").each(function() {
	            if ($(this).is(".team-grid__row-wrap")) {
	                $(this).prevAll(".team-grid__row-wrap").empty();
	                $(this).nextAll(".team-grid__row-wrap").empty();
	                var $html = $this.closest('.team-grid__wrap').find(".member-info__details").clone(true, true);
	                $(this).html($html);    
	                return false;
	            }
	        });
	    });
	    $(".closer").on('click',function() {
	        $(this).parent().parent().empty();
	        return false;
	    });
	    /*------------------------------------*\
        	:: Scroll to Team Member Info
    	\*------------------------------------*/
	    var scrollElement = 'html, body',
	    $window = $(window);
	    $("a[href^='#team']").click(function(e) {
	        e.preventDefault();
	        var target = this.hash,
	            $target = $(target),
	            scroll = $target.offset().top - 200;
	        $(scrollElement).stop().animate({
	            'scrollTop': scroll
	        }, 500, 'swing', function() {
	            window.location.hash = target;
	            $window.scrollTop(scroll);
	        });
	    });
    };
    team();    
});