/*------------------------------------*\
    :: Forms - Adaptive Placeholders
\*------------------------------------*/
var forms = function () {
    // move labels below inputs for adaptive text styling (can't target elements above in DOM)
    $gfield_label = $('.gfield__half .gfield_label, .gfield__third .gfield_label, .gfield__full .gfield_label');
    $gfield_label.each(function() {
        $this = $(this);
        $container = $this.next();
        $this.appendTo($container);
    });
    // Adaptive placeholder helpers
    $('.gform_body input, .gform_body textarea').blur(function () {
        $this = $(this);
        if( $this.val() ) {
            $this.parent().addClass('text-present');
        } else {
            $this.parent().removeClass('text-present');
        }
    });
    // Clear validation message on click
    $( '.gform_wrapper' ).on( 'click', '.validation_message' , function() {
        $(this).hide();
    });
};
$(document).ready(function() {
    forms();
});