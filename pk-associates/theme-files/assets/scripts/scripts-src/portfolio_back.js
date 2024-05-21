/*------------------------------------*\
    :: Portfolio Sort
\*------------------------------------*/
var portfolioBack = function () {
    // Click of grid item
    $( 'html' ).on( 'click', '.grid__item', function(event) {
        event.preventDefault();
        var $this = $(this);
        // Capture clicked link href
        var link = $this.attr('href');
        // Capture query string on click on grid item
        var sector = getQueryVariable('fwp_market_sectors');
        var search = getQueryVariable('fwp_search_box');
        // Set local storage to be accessed on next page
        localStorage.setItem('sector', sector);
        localStorage.setItem('search', search);
        // Go to proper href
        document.location.href = link;
    });
    // Click of portfolio back link
    $( 'html' ).on( 'click', '.portfolio-intro__breadcrumb', function(event) {
        event.preventDefault();
        // Get Query Strings from local storage
        sectorTerm = localStorage.getItem('sector');
        searchTerm = localStorage.getItem('search');
        // Build new URL
        var backUrl = '/portfolio/';
        if( sectorTerm !== 'false' && searchTerm !== 'false' ) {
            backUrl += '?fwp_market_sectors=' + sectorTerm + '&fwp_search_box=' + searchTerm;
        } else if ( sectorTerm !== 'false' ) {
            backUrl += '?fwp_market_sectors=' + sectorTerm;
        } else if ( searchTerm !== 'false' ) {
            backUrl += '?fwp_search_box=' + searchTerm;
        }
        document.location.href = backUrl;
    });

};
// Helper function to get query variables
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
$(document).ready(function() {
    portfolioBack();
});