import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

interface EventOnClick extends React.MouseEvent<HTMLLIElement> {
    target: HTMLLIElement;
}

const trackAllowedImage = "./images/track_status/allowed.png";
const trackForbiddenImage = "./images/track_status/forbidden.png";
const trackAllowedTitle = "Запретить воспроизведение";
const trackForbiddenTitle = "Разрешить воспроизведение";

export const MusicList = observer(() => {
    const {
        musicPlayerStore: { currentMusicList, setNewTrack, changeMusicPlayingStatus, forbidChoosenTrack },
        interfaceStore: { musicListDisplay },
    } = useContext(storeContext);

    const chooseTrack = (trackId: number) => (e: EventOnClick) => {
        if (!currentMusicList[trackId].allowed || e.target.tagName === "IMG") {
            return null;
        }
        setNewTrack(trackId);
        changeMusicPlayingStatus(true);
    };

    const musicList = currentMusicList.map((track, index) => {
        const trackName = track.name;
        const trackAllowed = track.allowed;
        const trackNameOpacity = trackAllowed ? { opacity: "1" } : { opacity: "0.2" };
        const forbidImageSrc = trackAllowed ? trackAllowedImage : trackForbiddenImage;
        const forbidImageTitle = trackAllowed ? trackAllowedTitle : trackForbiddenTitle;

        return (
            <li key={uuidv4()} className={styles.option} onClick={chooseTrack(index)}>
                <span className={styles.name} style={trackNameOpacity}>
                    {trackName}
                </span>
                <img src={forbidImageSrc} className={styles.forbidImage} onClick={() => forbidChoosenTrack(trackName)} title={forbidImageTitle} alt={forbidImageTitle} />
            </li>
        );
    });

    return (
        <div className={styles.musicList} style={musicListDisplay}>
            <ul className={styles.list}>{musicList}</ul>
        </div>
    );
});
