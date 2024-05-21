/*------------------------------------*\
    :: Banner 
\*------------------------------------*/
var banner = function(){
    if($('.main-head__banner').length > 0) {
        $('body').addClass('banner-present');
    }
}
$(document).ready(function() {
    banner();
});