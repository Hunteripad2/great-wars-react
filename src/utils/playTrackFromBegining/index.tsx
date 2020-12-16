function playTrackFromBegining() {
	const audioElement = document.querySelector("audio");
	if (audioElement) {
		setTimeout(() => {
			audioElement.currentTime = 0;
			if (audioElement.paused) audioElement.play();
		})
	}
}

export default playTrackFromBegining;