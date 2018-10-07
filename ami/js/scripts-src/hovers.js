/*------------------------------------*\
    :: Hover Effects
\*------------------------------------*/
jQuery(function($){
    /*------------------------------------------*\
    :: Force hover state on ios - icon ctas
    \*------------------------------------------*/
    var icons = function () {
        $( ".cta__icon" ).hover(
            function() {
                $(this).addClass( "hover" );
            }, function() {
                $(this).removeClass( "hover" );
            }
        ); 
    };
    icons(); 
});