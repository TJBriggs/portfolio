/*------------------------------------*\
    ::  Site Select Pop-up
\*------------------------------------*/    
var setStorage = function(){
    // Selector Vars
    var $html = $('html');
    var $site_select = $('.site-select');
    var $btn = $('.site-select__btn');
    $btn.on("click", function(){
        var now = new Date();
        var expiry = new Date(now.getTime() + 14 * 24 * 3600 * 1000); // plus 14 days
        //var unix = Math.round(new Date().getTime()/1000); // Set Unix timestamp
        var unix_expiry = Math.round(expiry.getTime()/1000);
        if (typeof localStorage === 'object') {
            try {
                localStorage.setItem("site-date", unix_expiry);
            } catch (e) {
                alert('Your web browser does not support local storage for settings. The most common cause is the use of "Private Browsing" mode. To access this site, please turn "Private Browsing" off.');
            }
        }
        // Hide site-select (remove active class)
        $site_select.removeClass('active');
        // Unlock html
        $html.removeClass('locked');
    });
};
var checkStorage = function(){
    var $html = $('html');
    var $site_select = $('.site-select');
    var exp = localStorage.getItem("site-date"); // Local Storage Expiration
    var unix_now = Math.round(new Date().getTime()/1000); // Unix timestamp for now
    if(exp > unix_now) { // If expiration date is larger than current date
        // Do Nothing
        $html.removeClass('locked');
    } else { 
        // Force Pop-up
        $site_select.addClass('active');
        $html.addClass('locked');
    }
};
$(document).ready(function() {
    setStorage();
    checkStorage();
});