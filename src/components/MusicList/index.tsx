import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

interface EventOnClick extends React.MouseEvent<HTMLLIElement> {
    target: HTMLLIElement;
}

const trackAllowed = "./images/track_status/allowed.png";
const trackForbidden = "./images/track_status/forbidden.png";
const trackAllowedTitle = "Запретить воспроизведение";
const trackForbiddenTitle = "Разрешить воспроизведение";

export const MusicList = observer(() => {
    const { currentMusicList, musicListStyle, currentScenarioName, setNewTrack, changeMusicPlayingStatus, updateMusicList } = useContext(State);

    const chooseTrack = (trackId: number) => (e: EventOnClick) => {
        if (!currentMusicList[trackId].allowed || e.target.tagName === "IMG") {
            return null;
        }
        setNewTrack(trackId);
        changeMusicPlayingStatus(true);
    };

    function forbidMusic(trackId: number) {
        const newMusicList = currentMusicList;
        newMusicList[trackId].allowed = !newMusicList[trackId].allowed;
        updateMusicList(newMusicList, currentScenarioName);
    }
    // TODO: uuid для key
    const musicList = currentMusicList.map((track, index) => (
        <li key={track.name} className={styles.option} onClick={chooseTrack(index)}>
            <span className={styles.name} style={track.allowed ? { opacity: "1" } : { opacity: "0.2" }}>
                {track.name}
            </span>
            {track.allowed ? (
                <img src={trackAllowed} className={styles.forbidImage} onClick={() => forbidMusic(index)} title={trackAllowedTitle} alt={trackAllowedTitle} />
            ) : (
                <img src={trackForbidden} className={styles.forbidImage} onClick={() => forbidMusic(index)} title={trackForbiddenTitle} alt={trackForbiddenTitle} />
            )}
        </li>
    ));

    return (
        <div className={styles.musicList} style={musicListStyle}>
            <ul className={styles.list}>{musicList}</ul>
        </div>
    );
});
