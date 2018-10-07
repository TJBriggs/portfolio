/*------------------------------------*\
    ::Percentage Stats
\*------------------------------------*/
(function(){
    jQuery(function($){
        //for each group of stats
        $(".stat__frame").each(function(){
            //cache some stuff
            var that = $(this);
            var statObj = that.find(".stat__number");
            var statAmount = statObj.text();

            //empty the statistic
            statObj.text('').removeClass('stat__number--hide');
            // call the animation if this statistic is in view
            that.bind('inview', function (event, visible) {
                if(!that.hasClass('animation-complete')) {
                    if (visible === true) {
                        num(statObj, statAmount);
                        that.addClass('animation-complete');
                    } else {
                        return false;
                    }
                }
            });
        });
        //number animation function
        function num(statObj, statAmount){
            //adapted from http://codepen.io/hmcnellis/pen/emBOeq
            $({counter: 0})
                .animate({ counter: statAmount }, {
                    duration: 2500,
                    easing: 'swing',
                    step: function () {
                        var curCount = Math.ceil(this.counter);
                        var curCountComma = curCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                        statObj.text(curCountComma);
                        var opacity = (statAmount !== 0 ? this.counter/statAmount : 1);
                    }
                });
        }
    });
})();
