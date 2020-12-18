import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';
import playTrackFromBegining from '../../utils/playTrackFromBegining';
import trackAllowed from '../../assets/music_player/track_status/allowed.png';
import trackForbidden from '../../assets/music_player/track_status/forbidden.png';

const MusicList = observer(() => {
	const state = useContext(State);

	interface EventOnClick extends React.MouseEvent<HTMLLIElement> {
		target: HTMLLIElement;
	}

	const chooseTrack = (trackId : number) => (e : EventOnClick) => { // TODO: Разобраться в этой строчке
		if (!state.currentMusicList[trackId].allowed || e.target.tagName === "IMG") {
			return null;
		}
		state.setNewTrack(trackId);
		playTrackFromBegining();
		state.changeMusicStatus(true);
	}

	const forbidMusic = (trackId : number) => (e : React.MouseEvent<HTMLImageElement>) => {
		const newMusicList = state.currentMusicList;
		newMusicList[trackId].allowed = !newMusicList[trackId].allowed;
		state.updateMusicList(newMusicList, state.currentScenarioName);
	}

	const musicList = state.currentMusicList.map((track, index) => 
		<li key={track.name} className={styles.option} onClick={chooseTrack(index)}>
			<span className={styles.name} style={track.allowed ? {opacity: '1'} : {opacity: '0.2'}}>{track.name}</span>
			<img src={track.allowed ? trackAllowed : trackForbidden} className={styles.forbidImage} onClick={forbidMusic(index)} title={track.allowed ? "Запретить воспроизведение" : "Разрешить воспроизведение"} alt={track.allowed ? "Запретить воспроизведение" : "Разрешить воспроизведение"} />
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
