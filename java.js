const video = document.getElementById('myVideo');
const button = document.querySelector('button');

function togglePlay() {
	if (video.paused) {
		video.play();
		button.style.display = 'none'; // hide button when playing
	} else {
		video.pause();
		button.style.display = 'flex'; // show button again when paused
	}
}
