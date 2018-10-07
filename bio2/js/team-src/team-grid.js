/*------------------------------------*\
    :: Open Team Member Info On Click
\*------------------------------------*/
var team = function () {
	/*--------------------------------------------*\
    	:: Open Team Member Details on Click of image
    \*--------------------------------------------*/
    $(".member").on('click',function() {
        var $this = $(this);
        $this.parent().nextAll(".team-grid__row-wrap").each(function() {
            var $row_wrap = $(this);
            if ($row_wrap.is(".team-grid__row-wrap")) {
                $row_wrap.prevAll(".team-grid__row-wrap").empty();
                $row_wrap.nextAll(".team-grid__row-wrap").empty();
                var $html = $this.closest('.team-grid__wrap').find(".member-info__details").clone(true, true);
                $(this).html($html);    
                return false;
            }
        });
        $('.member-info__bio-wrap').hide();
        $('.member-info__read-more').removeClass('open').text('Read More');
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
    $("a[href^='#team'], a[href^='#executive'], a[href^='#board'], a[href^='#clinical'] ").click(function(e) {
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
/*------------------------------------*\
    ::  Expand Bio Content on Click
\*------------------------------------*/	
var readMore = function () {
    $('.member-info__details').each(function() {
        var $details = $(this);
        var $readMore = $details.find('.member-info__read-more');
        $readMore.on('click',function() {
            var $thisLink = $(this);
            var $bioWrap = $('.member-info__bio-wrap');
            $thisLink.toggleClass('open');
            // Toggle text
            if($thisLink.hasClass('open')) {
                $thisLink.text('Read Less');
            } else {
                $thisLink.text('Read More');
            }
            // Slide bio down
            $bioWrap.slideToggle(400);          
        });
    });
};
$(document).ready(function() {
	team(); 
    readMore(); 
});
