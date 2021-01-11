import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

export const EventIcons = observer(() => {
    const state = useContext(State);

    const showEvent = (eventId: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        state.checkEvent(eventId);
        state.setEventData(eventId);
        state.showEventWindow();
    };

    let eventIcons;
    if (state.currentEvents) {
        eventIcons = state.currentEvents.map((event, index) => (
            <button key={event.name} className={styles.button} style={{ left: `${event.positionX}`, top: `${event.positionY}` }} onClick={showEvent(index)}>
                <img src={"./event_icons/" + event.icon + ".png"} className={styles.image} style={!event.checked ? state.eventIconStyle : { opacity: "0.4" }} alt="Событие" />
            </button>
        ));
    }

    return <div className={styles.eventIcons}>{eventIcons}</div>;
});
