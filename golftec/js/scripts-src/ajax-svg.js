/*------------------------------------*\
    ::Ajax In Images
    ----------------------------------*
    https://snippetlib.com/jquery/replace_all_svg_images_with_inline_svg
\*------------------------------------*/
// Using this script to convert icons from an image to an svg on load 
// this just allows me to load the SVG's via an image tag rather than 
// Large blocks of SVG code.
var ajaxReplace = function() {
    // find all img tags in need of changing to svg
    $('.js-ajax-replace').each(function(){
        // cache this image
        var $img = $(this);
        // capture it's classes
        var classes = $img.attr('class');
        // grab the svg via ajax
        $.get($img.attr('src'), function(data) {
            // find just the svg from what's retrieved
            var svg = $(data).find('svg');
            svg
                // reapply the classes
                .attr('class', classes)
                // remove inline style tags from svg's
                .find('style')
                    .remove()
                    .end()
                // remove fill on this and all children
                .attr('fill','')
                .find('*')
                    .attr('fill','');
            // replace the img with the svg
            $img.replaceWith(svg);
        });
    });
};
$(document).ready(function() {
    ajaxReplace();
});
