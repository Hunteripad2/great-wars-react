import { useContext, useRef, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

const nextButtonTitle = "Следующая композиция"; // TODO вынести локализацию
const listButtonTitle = "Список композиций";
const nextButtonImage = "./images/music_buttons/next.png";
const listButtonImage = "./images/music_buttons/list.png";

export const MusicPlayer = observer(() => {
    const { musicIsPlaying, currentMusicList, currentTrack, playButtonImage, playButtonTitle, changeMusicPlayingStatus, setNewTrack, showMusicList } = useContext(State);
    const currentTrackSrc = "./tracks/" + currentTrack.src + ".ogg";

    const audioPlayer = useRef<HTMLAudioElement>(null);
    const audioElement = audioPlayer.current;

    useEffect(() => {
        if (musicIsPlaying && audioElement?.paused) {
            audioElement?.play();
        } else if (!musicIsPlaying && !audioElement?.paused) {
            audioElement?.pause();
        }
    }, [musicIsPlaying, audioElement]);

    const playCurrentTrack = useCallback(() => {
        changeMusicPlayingStatus(!musicIsPlaying);
    }, [musicIsPlaying, changeMusicPlayingStatus]);

    const playNextTrack = useCallback(() => {
        let randomIndex: number;

        for (let track of currentMusicList) {
            if (track.allowed && track !== currentTrack) {
                do {
                    randomIndex = Math.floor(Math.random() * currentMusicList.length);
                } while (!currentMusicList[randomIndex].allowed || currentMusicList[randomIndex] === currentTrack);
                setNewTrack(randomIndex);
                break;
            }
        }

        changeMusicPlayingStatus(true);
    }, [currentMusicList, currentTrack, setNewTrack, changeMusicPlayingStatus]);

    return (
        <div className={styles.musicPlayer}>
            <button className={styles.button} onClick={playCurrentTrack}>
                <img className={styles.image} src={playButtonImage} title={playButtonTitle} alt={playButtonTitle} />
            </button>
            <button className={styles.button} onClick={playNextTrack}>
                <img className={styles.image} src={nextButtonImage} title={nextButtonTitle} alt={nextButtonTitle} />
            </button>
            <button className={styles.button} onClick={showMusicList}>
                <img className={styles.image} src={listButtonImage} title={listButtonTitle} alt={listButtonTitle} />
            </button>
            <audio ref={audioPlayer} onEnded={playNextTrack} src={currentTrackSrc} />
        </div>
    );
});
