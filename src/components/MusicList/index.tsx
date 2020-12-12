import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';
import trackAllowed from '../../assets/music_player/track_status/allowed.png';
import trackForbidden from '../../assets/music_player/track_status/forbidden.png';

const MusicList = observer(() => {
	const [state] = useState(() => new State());

	interface EventOnClick extends React.MouseEvent<HTMLLIElement> {
		target: HTMLLIElement;
	}

	const chooseTrack = (trackId : number) => (e : EventOnClick) => { // TODO: Разобраться в этой строчке
		if (!state.currentMusicList[trackId].allowed || e.target.tagName === "IMG") {
			return null;
		}
		state.setChoosenTrack(trackId);

		const trackElement = document.querySelector("audio");
		if (trackElement) {
			trackElement.currentTime = 0;
			trackElement.play();
		}
	}

	const forbidMusic = (trackId : number) => (e : React.MouseEvent<HTMLImageElement>) => {
		const currentMusicList = state.currentMusicList;
		currentMusicList[trackId].allowed = !currentMusicList[trackId].allowed;
		state.updateMusicList(currentMusicList);
		localStorage.setItem(`${state.currentScenarioName}CurrentMusicList`, JSON.stringify(currentMusicList));
	}

	const musicList = state.currentMusicList.map((track, index) => 
		<li key={track.name} className={styles.option} onClick={chooseTrack(index)}>
			<span className={styles.name} style={track.allowed ? {opacity: '1'} : {opacity: '0.2'}}>{track.name}</span>
			<img src={track.allowed ? trackAllowed : trackForbidden} className={styles.forbidImage} onClick={forbidMusic(index)} title={track.allowed ? "Запретить воспроизведение" : "Разрешить воспроизведение"} />
		</li>
	);

	return (
		<div className={styles.musicList} style={state.musicListStyle}>
			<ul className={styles.list}>
				{musicList}
			</ul>
		</div>
	);
});
  
export default MusicList;
