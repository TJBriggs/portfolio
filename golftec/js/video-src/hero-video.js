/*------------------------------------*\
	:: Create muted iframe code
\*------------------------------------*/
function buildVideo($el){
	// Get the Video ID from the data attribute on #player
	//var vidPlayer = document.getElementById("player");
	var vidPlayer = $el[0];
	var vidID = vidPlayer.getAttribute("data-video-id");
	// Creates an <iframe> (and YouTube player)
	// after the API code downloads.
	var player;
	window.onYouTubePlayerAPIReady = function() {
		player = new YT.Player('player', {
			height: '',
	        width: '',
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
				'playlist': vidID // causes it to loop, IDK why 'loop' doesn't do it
			},
			videoId: vidID, 
			events: { 
				'onReady': onPlayerReady
			}
		});
	}
	//The API will call this function when the video player is ready.
	window.onPlayerReady = function(event) {
		event.target.mute();
	}
}
