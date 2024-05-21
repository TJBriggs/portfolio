/*------------------------------------*\
    :: Forms - Adaptive Placeholders
\*------------------------------------*/
var forms = function () {
    // move labels below inputs for adaptive text styling (can't target elements above in DOM)
    $('#field_1_3 label').appendTo('#field_1_3 .ginput_container');
    $('#field_1_4 label').appendTo('#field_1_4 .ginput_container');
    $('#field_1_5 label').appendTo('#field_1_5 .ginput_container');
    $('#field_1_6 label').appendTo('#field_1_6 .ginput_container');
    // Adaptive placeholder helpers
    $('#gform_wrapper_1 input, #gform_wrapper_1 textarea').blur(function () {
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