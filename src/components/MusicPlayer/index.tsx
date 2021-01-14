import { useContext, useRef, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

const nextButtonTitle = "Следующая композиция"; // TODO вынести локализацию
const listButtonTitle = "Список композиций";
const nextButtonImage = "./images/music_buttons/next.png";
const listButtonImage = "./images/music_buttons/list.png";

export const MusicPlayer = observer(() => {
    const state = useContext(State);
    const audioPlayer = useRef<HTMLAudioElement>(null);
    const audioElement = audioPlayer.current;

    useEffect(() => {
        if (state.musicIsPlaying && audioElement?.paused) {
            audioElement.play();
        } else if (!state.musicIsPlaying && !audioElement?.paused) {
            audioElement?.pause();
        }
    }, [state.musicIsPlaying, audioElement?.paused, audioElement?.src]);

    const playCurrentTrack = useCallback(() => {
        state.changeMusicPlayingStatus(!state.musicIsPlaying);
    }, [state.musicIsPlaying]);

    const playNextTrack = useCallback(() => {
        let randomIndex: number;
        const currentMusicList = state.currentMusicList;
        const currentTrack = state.currentTrack;

        for (let track of currentMusicList) {
            if (track.allowed && track !== currentTrack) {
                do {
                    randomIndex = Math.floor(Math.random() * currentMusicList.length);
                } while (!currentMusicList[randomIndex].allowed || currentMusicList[randomIndex] === currentTrack);
                state.setNewTrack(randomIndex);
                break;
            }
        }

        state.changeMusicPlayingStatus(true);
    }, [state.currentMusicList, state.currentTrack]);

    return (
        <div className={styles.musicPlayer}>
            <button className={styles.button} onClick={playCurrentTrack}>
                <img className={styles.image} src={state.playButtonImage} title={state.playButtonTitle} alt={state.playButtonTitle} />
            </button>
            <button className={styles.button} onClick={playNextTrack}>
                <img className={styles.image} src={nextButtonImage} title={nextButtonTitle} alt={nextButtonTitle} />
            </button>
            <button className={styles.button} onClick={state.showMusicList}>
                <img className={styles.image} src={listButtonImage} title={listButtonTitle} alt={listButtonTitle} />
            </button>
            <audio ref={audioPlayer} onEnded={playNextTrack} src={"./tracks/" + state.currentTrack.src + ".ogg"} />
        </div>
    );
});
