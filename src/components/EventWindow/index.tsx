import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";
import { Event } from "../../storage/types";

const currentEventImageTitle = "Изображение события";
const trackAlreadyAddedAlert = "Эта композиция уже находится в списке";

export const EventWindow = observer(() => {
    const {
        scenarioStore: { currentEventData },
        interfaceStore: { eventWindowDisplay, eventFirstOptionStyle, closeTabs },
        musicPlayerStore: { currentMusicList, addNewTrack },
    } = useContext(storeContext);

    const currentEventName = currentEventData.name;
    const currentEventDesc = currentEventData.desc;
    const currentEventImageSrc = "./images/event_images/" + currentEventData.image + ".jpg";
    const currentEventOption1 = currentEventData.option1;
    const currentEventOption2 = currentEventData.option2;

    function chooseFirstEventOption(eventData: Event) {
        //if (eventData.type === "choice") { 	//TODO: доделать виды событий
        //}
        closeTabs();
    }

    function chooseSecondEventOption(eventData: Event) {
        const eventType = eventData.type;

        if (eventType === "music") {
            const newMusicName = eventData.newMusicName;
            const newMusicSrc = eventData.newMusicSrc;

            if (!currentMusicList.some((track) => track.name === newMusicName)) {
                addNewTrack(newMusicName, newMusicSrc);
                closeTabs();
            } else {
                alert(trackAlreadyAddedAlert);
            }
        }
    }

    return (
        <div className={styles.eventWindow} style={eventWindowDisplay}>
            <h1 className={styles.name}>{currentEventName}</h1>
            <img className={styles.image} src={currentEventImageSrc} alt={currentEventImageTitle} />
            <p className={styles.desc}>{currentEventDesc}</p>
            <button className={styles.optionFirst} onClick={() => chooseFirstEventOption(currentEventData)} style={eventFirstOptionStyle}>
                {currentEventOption1}
            </button>
            {currentEventOption2 ? (
                <button className={styles.optionSecond} onClick={() => chooseSecondEventOption(currentEventData)}>
                    {currentEventOption2}
                </button>
            ) : null}
        </div>
    );
});
