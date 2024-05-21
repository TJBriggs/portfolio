/*------------------------------------*\
    :: Lightbox 
\*------------------------------------*/
var lightbox = function () {
    $html = $('html');
    $body = $('body');
    // Open Lightbox
    $html.on( 'click', '.team-grid__member', function(event) {
        event.preventDefault();
        $body.prepend('<div class="lightbox__overlay" style="display: none;"></div>');
        $this = $(this);
        modalHref = $this.attr('href');
        $('.lightbox__overlay').fadeIn(500, 'linear');
        $(modalHref).fadeIn(500, 'linear');
        $html.addClass('lightbox-open');
    });
    // Close Lightbox
    $html.on('click', '.lightbox__overlay, .lightbox__close',function(event) {
        event.preventDefault();
        $('.lightbox__overlay, .lightbox').fadeOut(500, 'linear');
        $html.removeClass('lightbox-open');
        $('.lightbox__overlay').remove();
        $('html, body').animate({
            scrollTop: $('#scroll-back').offset().top - 150
        }, 'slow');
    }); 
};
$(document).ready(function() {
    lightbox();
});