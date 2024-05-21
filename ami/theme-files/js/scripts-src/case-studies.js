/*------------------------------------*\
    :: Show Case Study Info
\*------------------------------------*/
jQuery(function($){
    var studies = function () {
        $('.case-study').each(function() {
            var $this = $(this);
            $this.find('.btn--case-study').click(function(e) {
                e.preventDefault();
                $this.toggleClass('active');
            });
            $this.find('.hidden-content__close').click(function(e) {
                e.preventDefault();
                $this.toggleClass('active');
            });
        }); 
    };
    studies(); 
});