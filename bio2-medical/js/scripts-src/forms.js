/*------------------------------------*\
    :: Clear form validations on click
\*------------------------------------*/
var forms = function () {
    $(".wpcf7-form-control-wrap").on("click", ".wpcf7-not-valid-tip", function() {
        $(this).hide();
        $(".wpcf7-response-output").hide();
    });
};
$(document).ready(function() {
    forms();
});
