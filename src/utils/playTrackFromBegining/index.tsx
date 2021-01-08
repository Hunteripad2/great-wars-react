export function playTrackFromBegining() {
    // TODO: найти место
    const audioElement = document.querySelector("audio");
    if (audioElement) {
        setTimeout(() => {
            audioElement.currentTime = 0;
            if (audioElement.paused) audioElement.play();
        });
    }
}
