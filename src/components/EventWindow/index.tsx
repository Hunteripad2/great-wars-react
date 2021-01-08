import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";
import { Event } from "../../utils/scenariosData";

export const EventWindow = observer(() => {
    const state = useContext(State);
    const currentEventData = state.currentEventData;

    function chooseFirstEventOption(eventData: Event) {
        //if (eventData.type === "choice") { 	//TODO: events with plot choices
        //}
        state.closeTabs();
    }

    function chooseSecondEventOption(eventData: Event) {
        if (eventData.type === "music") {
            const newMusicList = state.currentMusicList;
            if (!newMusicList.some((track) => track.name === eventData.newMusicName)) {
                newMusicList.push({ name: eventData.newMusicName, src: eventData.newMusicSrc, allowed: true });
                state.updateMusicList(newMusicList, state.currentScenarioName);
                state.closeTabs();
            } else {
                alert("Эта композиция уже находится в списке");
            }
        }
    }

    return (
        <div className={styles.eventWindow} style={state.eventWindowStyle}>
            <h1 className={styles.name}>{currentEventData.name}</h1>
            <img className={styles.image} src={"./event_images/" + currentEventData.image + ".jpg"} alt="Изображение события" />
            <p className={styles.desc}>{currentEventData.desc}</p>
            <button className={styles.optionFirst} onClick={() => chooseFirstEventOption(currentEventData)} style={state.eventFirstOptionStyle}>
                {currentEventData.option1}
            </button>
            {currentEventData.option2 ? (
                <button className={styles.optionSecond} onClick={() => chooseSecondEventOption(currentEventData)}>
                    {currentEventData.option2}
                </button>
            ) : null}
        </div>
    );
});
