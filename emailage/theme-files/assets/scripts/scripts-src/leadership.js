/*------------------------------------*\
    :: Leadership Grid 
\*------------------------------------*/   
var leaders = function(){
    $( '.leadership-grid__image' ).hover(
        function() {
            $( this ).addClass( 'hover' );
        }, function() {
            $( this ).removeClass( 'hover' );
        }
    ); 
}
$(document).ready(function() {
    leaders();
});