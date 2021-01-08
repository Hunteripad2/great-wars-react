import { useContext } from "react";
import { observer } from "mobx-react-lite";
import ReactAudioPlayer from "react-audio-player";
import styles from "./styles.module.scss";
import State from "../../storage";
import { playTrackFromBegining } from "../../utils/playTrackFromBegining";

export const MusicPlayer = observer(() => {
    const state = useContext(State);
    const nextButtonTitle = "Следующая композиция"; // TODO вынести локализацию
    const listButtonTitle = "Список композиций";

    function playCurrentTrack() {
        const audioElement = document.querySelector("audio"); // TODO: использовать ref для плеера

        if (audioElement) {
            if (!audioElement.paused) {
                audioElement.pause();
                state.changeMusicStatus(false);
            } else {
                audioElement.play();
                state.changeMusicStatus(true);
            }
        }
    }

    function playNextTrack() {
        let randomIndex: number;
        const currentMusicList = state.currentMusicList;
        const currentTrack = state.currentTrack;

        for (let track of currentMusicList) {
            if (track.allowed && track !== currentTrack) {
                do randomIndex = Math.floor(Math.random() * currentMusicList.length);
                while (!currentMusicList[randomIndex].allowed || currentMusicList[randomIndex] === currentTrack);
                state.setNewTrack(randomIndex);
                break;
            }
        }

        playTrackFromBegining();
        state.changeMusicStatus(true);
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
            <ReactAudioPlayer onEnded={playNextTrack} src={"./tracks/" + state.currentTrack.src + ".ogg"} />
        </div>
    );
});
