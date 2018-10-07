/*------------------------------------*\
    :: Portfolio Sort
\*------------------------------------*/
var portfolioSort = function () {
    $body = $('body');
    $html = $('html');
    // Set first dropdown option text
    $html.on( 'click', '.fs-option:first-of-type', function(event) {
        // Hide Grid
        hideGrid();
        setTimeout( function() {
            $html.addClass('all-projects');
            animateGrid();
        }, 1000);
    });
    var url = siteUrl.ajaxurl; 
    $(document).on('facetwp-loaded', function() {
        // Remove the default label from dropdown
        $('.fs-option:first-of-type').find('.fs-option-label').text('all market sectors');
        newUrl = window.location.href;
        queryString = window.location.search;
        // Hide Grid
        hideGrid();
        // Unlock body
        if(queryString) {
            $html.removeClass('portfolio-hero-html all-projects');
        }
        // Run Animation
        animateGrid();
        $.ajax({
            type: 'post',
            data: { action: 'sort_projects', new_url: newUrl },
            url: url,   
            success: function( result ) {
                $( '#js-ajax-content' ).html(result);
            }
        });
    });
};
var hideGrid = function () {
    // Slide grid items down and hide
    $('.grid__item').animate({ 
        opacity: 0,
        top: 600
    }, 300);
}
var animateGrid = function () {
    // Scroll to
    $('html, body').animate({
        scrollTop: $('.portfolio-grid').offset().top - 150
    }, 'slow');
    // Individual Animations
    $('.grid__item--1').animate({ 
        opacity: 1,
        top: 0
    }, 400);
    $('.grid__item--2').animate({ 
        opacity: 1,
        top: 0
    }, 600);
    $('.grid__item--3').animate({ 
        opacity: 1,
        top: 0
    }, 800);
    $('.grid__item--4').animate({ 
        opacity: 1,
        top: 0
    }, 1000);
    $('.grid__item--5').animate({ 
        opacity: 1,
        top: 0
    }, 1200);
    $('.grid__item--6').animate({ 
        opacity: 1,
        top: 0
    }, 1400);
    $('.grid__item--7').animate({ 
        opacity: 1,
        top: 0
    }, 1600);
    $('.grid__item--8').animate({ 
        opacity: 1,
        top: 0
    }, 1800);
    $('.grid__item--9').animate({ 
        opacity: 1,
        top: 0
    }, 2000);
}
$(document).ready(function() {
    hideGrid();
    portfolioSort();
});