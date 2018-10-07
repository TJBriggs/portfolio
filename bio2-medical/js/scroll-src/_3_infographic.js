/*------------------------------------*\
    ::Infographic Animation
\*------------------------------------*/
$(document).ready(function() {
    $('.main-torso').css({
        'overflow': 'hidden',
        'display': 'block'
    });
    var infoController = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });
    infoController.addTween(
      '#fade',
      (new TimelineLite())
        .append([
          TweenMax.fromTo($('#js-circle-1'),
            2, //duration
            {css:{
                'margin-top': '-45%',
                'margin-left': '-45%',
                'opacity': '0'
            }, immediateRender:true},
            {css:{
                'margin-top': '-16%',
                'margin-left': '-16%',
                'opacity': '1'
            }, immediateRender:true}),
          TweenMax.fromTo($('#js-circle-2'),
            2, //duration
            {css:{
                'margin-top': '-45%',
                'margin-left': '45%',
                'opacity': '0'
            }, immediateRender:true},
            {css:{
                'margin-top': '-16%',
                'margin-left': '16%',
                'opacity': '1'
            }, immediateRender:true}),
          TweenMax.fromTo($('#js-circle-3'),
            2, //duration
            {css:{
                'margin-top': '55%',
                'opacity': '0'
            }, immediateRender:true},
            {css:{
                'margin-top': '16%',
                'opacity': '1'
            }, immediateRender:true}),
          TweenMax.fromTo($('#js-logo-1'),
            2, //duration
            {css:{
                'opacity': '0'
            }, immediateRender:true},
            {css:{
                'opacity': '1'
            }, immediateRender:true}),
            TweenMax.fromTo($('#js-logo-2'),
            4, //duration
            {css:{
                'margin-left': '150%'
            }, immediateRender:true},
            {css:{
                'margin-left': '0'
            }, immediateRender:true}),
        ]),
      750, // scroll duration of tween
      -500 // offset the start of the tween
    );
});