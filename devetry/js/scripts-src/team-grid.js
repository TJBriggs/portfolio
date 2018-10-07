/*------------------------------------*\
    :: Forms - Adaptive Placeholders
\*------------------------------------*/
var teamGrid = function () {
    // Hover on touch
    $( '.team-grid__grid-item' ).hover(
        function() {
            $(this).addClass( 'hover' );
        }, function() {
            $(this).removeClass( 'hover' );
        }
    ); 
    // Show hidden members
    $teamToggle = $( '#js-team-toggle' );
    $members = $( '.team-grid__team-wrap' );
    $teamToggle.click( function(e) {
        e.preventDefault();
        $members.slideToggle( 500, function() {
            if( $teamToggle.hasClass('open') ) {
                $teamToggle.html('See The Entire Team');
                $teamToggle.toggleClass('open');
            } else {
                $teamToggle.html('Hide The Entire Team');
                $teamToggle.toggleClass('open');
            }
        });
    });
};
$(document).ready(function() {
    teamGrid();
});