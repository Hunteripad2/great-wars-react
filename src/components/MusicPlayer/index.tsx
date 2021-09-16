import { useContext, useRef, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const nextButtonTitle = "Следующая композиция";
const listButtonTitle = "Список композиций";
const nextButtonImage = "./images/music_buttons/next.png";
const listButtonImage = "./images/music_buttons/list.png";

export const MusicPlayer = observer(() => {
    const {
        musicPlayerStore: { musicIsPlaying, currentMusicList, currentTrack, currentVolume, changeMusicPlayingStatus, setCurrentTrack },
        interfaceStore: { showMusicList, playButtonImage, playButtonTitle },
    } = useContext(storeContext);
    const currentTrackSrc = "./tracks/" + currentTrack.src + ".ogg";

    const audioPlayer = useRef<HTMLAudioElement>(null);
    const audioElement = audioPlayer.current;

    const setVolume = useCallback(
        (volume) => {
            if (audioElement) audioElement.volume = volume;
        },
        [audioElement]
    );

    useEffect(() => {
        if (musicIsPlaying && audioElement?.paused && currentTrack) {
            audioElement?.play();
        } else if (!musicIsPlaying && !audioElement?.paused && currentTrack) {
            audioElement?.pause();
        }
        setVolume(currentVolume / 100);
    }, [musicIsPlaying, audioElement, currentTrack, currentVolume, setVolume]);

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
                setCurrentTrack(randomIndex);
                break;
            }
        }

        changeMusicPlayingStatus(true);
    }, [currentMusicList, currentTrack, setCurrentTrack, changeMusicPlayingStatus]);

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
