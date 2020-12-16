import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import ReactAudioPlayer from 'react-audio-player';
import styles from './styles.module.scss';
import State from '../../storage';
import playTrackFromBegining from '../../utils/playTrackFromBegining';

const MusicPlayer = observer(() => {
	const state = useContext(State);
	const nextButtonTitle = "Следующая композиция";
	const listButtonTitle = "Список композиций";

	function playCurrentTrack() {
		const audioElement = document.querySelector("audio");
		if (audioElement) {
			if (state.musicIsPlaying) {
				audioElement.pause();
			} else audioElement.play();
		}
		state.changeMusicStatus();
	}

	function playNextTrack() {
		state.setNextTrack();
		playTrackFromBegining();
	}

	return (
		<div className={styles.musicPlayer}>
			<button className={styles.button} onClick={playCurrentTrack}>
				<img className={styles.image} src={state.playButtonImage} title={state.playButtonTitle} alt={state.playButtonTitle} />
			</button>
			<button className={styles.button} onClick={playNextTrack}>
				<img className={styles.image} src="./music_buttons/next.png" title={nextButtonTitle} alt={nextButtonTitle} />
			</button>
			<button className={styles.button} onClick={state.showMusicList}>
				<img className={styles.image} src="./music_buttons/list.png" title={listButtonTitle} alt={listButtonTitle} />
			</button>
			<ReactAudioPlayer onEnded={playNextTrack} src={'./tracks/' + (state.currentTrack.src) + ".ogg"} />
		</div>
	);
});

//<source src={'./tracks/' + (state.currentTrack.src) + ".ogg"} type="audio/ogg" /> </audio>

export default MusicPlayer;
