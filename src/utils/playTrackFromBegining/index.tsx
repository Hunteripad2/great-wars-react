function playTrackFromBegining() {
	const trackElement = document.querySelector("audio");
	if (trackElement) {
		trackElement.currentTime = 0;
		trackElement.play();
	}
}

export default playTrackFromBegining;