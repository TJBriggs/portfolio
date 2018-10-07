/*------------------------------------*\
    ::  Search
\*------------------------------------*/
var searchEffects = function() {
	var $search = $('.main-head__search-icon');
	$search.on("click", function(){
		$('.main-head__search').toggleClass('active');
		$('#s').focus();
	});
};
$(document).ready(function() {
    searchEffects();
});