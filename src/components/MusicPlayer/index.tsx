import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';
import playButton from '../../assets/music_player/header_buttons/play.png'
import pauseButton from '../../assets/music_player/header_buttons/pause.png'
import nextButton from '../../assets/music_player/header_buttons/next.png'
import listButton from '../../assets/music_player/header_buttons/list.png'

const MusicPlayer = observer(() => {
	const state = useContext(State);

	function pauseMusic() {
		state.changeMusicStatus();
		const trackElement = document.querySelector("audio");
		if (trackElement) trackElement.pause();
	}
	function playMusic() {
		state.changeMusicStatus();
		const trackElement = document.querySelector("audio");
		if (trackElement) trackElement.play();
	}

	function playNextTrack() {
		state.setNextTrack();
		const trackElement = document.querySelector("audio");
		if (trackElement) {
			trackElement.currentTime = 0;
			trackElement.play();
		}
	}

	let playButtonImage;
	if (state.musicIsPlaying) {
		playButtonImage = <img className={styles.image} src={pauseButton} title="Поставить на паузу" />;
	} else playButtonImage = <img className={styles.image} src={playButton} title="Снять с паузы" />;

	return (
		<div className={styles.musicPlayer}>
			<button className={styles.button} onClick={state.musicIsPlaying ? pauseMusic : playMusic}>
				{playButtonImage}
			</button>
			<button className={styles.button} onClick={playNextTrack}>
				<img className={styles.image} src={nextButton} title="Следующая композиция" />
			</button>
			<button className={styles.button} onClick={state.showMusicList}>
				<img className={styles.image} src={listButton} title="Список композиций" />
			</button>
			<audio onEnded={playNextTrack}>
				<source src={'./tracks/' + (state.currentTrack.src) + ".ogg"} type="audio/ogg" />
			</audio>
		</div>
	);
});

export default MusicPlayer;
