/*------------------------------------*\
    :: Facet Helpers
\*------------------------------------*/
var facets = function(){
    $(document).on('facetwp-loaded', function() {
        // Remove the default label from dropdown and use custom text
        $('.facetwp-facet-categories .fs-option:first-of-type').find('.fs-option-label').text('All Categories');
        $('.facetwp-facet-careers_category .fs-option:first-of-type').find('.fs-option-label').text('All Categories');
        $('.facetwp-facet-careers_location .fs-option:first-of-type').find('.fs-option-label').text('All Locations');   
        // Fade in and out template on refresh and load
        $(document).on('facetwp-refresh', function() {
            $('.facetwp-template').animate({ opacity: 0 }, 300);
        });
        $(document).on('facetwp-loaded', function() {
            $('.facetwp-template').animate({ opacity: 1 }, 300);
        });
    });
}
$(document).ready(function() {
    facets();
});