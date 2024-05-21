/*------------------------------------*\
	:: Create muted iframe code
\*------------------------------------*/
if($(".hero-block--video").length > 0) { 
	//Loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');
	tag.src = "http://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	// Creates an <iframe> (and YouTube player)
	// after the API code downloads.
	var player;
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('player', {
			height: '100%',
	        width: '100%',
			playerVars: {
				'rel': 0,
				'controls': 0,
				'showinfo': 0,
				'modestbranding': 1,
				'wmode':'opaque',
				'enablejsapi': 1,
				'autoplay': 1,
				'loop': 1,
				'autohide': 1,
				'playlist': localScripts.vidID // causes it to loop, IDK why 'loop' doesn't do it
			},
			videoId: localScripts.vidID, //local scripts from ACF user input
			events: {
				'onReady': onPlayerReady
			}
		});
	}
	//The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		event.target.mute();
	}
	// check to see if autoplay is supported on the device
	// Use fall backimage if autoplay is not supported (ex. all apple devices )
	Modernizr.on('videoautoplay', function(result){
		var sroot = localScripts.theUrl;
		if(!result) {
			if(localScripts.vidID){
				$('#player').remove();
				$('.hero-block').removeClass('hero-block--video').addClass('hero-block--static');
				$('.hero-block--static').append('<style>.hero-block--static{background-image:url("'+sroot+'/wp-content/themes/bio2/images/placeholders/home-hero.jpg");}</style>');
			}
		}
	});
}