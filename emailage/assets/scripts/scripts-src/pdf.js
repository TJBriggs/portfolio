/*------------------------------------*\
    :: Open PDFs in New Tab
\*------------------------------------*/
var pdfTab= function() {
	$('[href$=".pdf"]').attr('target','_blank');
};
$(document).ready(function() {
    pdfTab();
});	