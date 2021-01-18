import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";
import { Event } from "../../storage/types";

const currentEventImageTitle = "Изображение события";
const trackAlreadyAddedAlert = "Эта композиция уже находится в списке";

export const EventWindow = observer(() => {
    const { currentEventData, eventWindowStyle, currentScenarioName, currentMusicList, closeTabs, updateMusicList, eventFirstOptionStyle } = useContext(State);
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
        const eventDataType = eventData.type;

        if (eventDataType === "music") {
            const newMusicName = eventData.newMusicName;
            const newMusicSrc = eventData.newMusicSrc;
            const newMusicList = currentMusicList;

            if (!newMusicList.some((track) => track.name === newMusicName)) {
                newMusicList.push({ name: newMusicName, src: newMusicSrc, allowed: true });
                updateMusicList(newMusicList, currentScenarioName);
                closeTabs();
            } else {
                alert(trackAlreadyAddedAlert);
            }
        }
    }

    return (
        <div className={styles.eventWindow} style={eventWindowStyle}>
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
