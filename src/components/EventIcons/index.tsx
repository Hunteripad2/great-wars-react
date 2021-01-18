import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

const eventIconTitle = "Событие";

export const EventIcons = observer(() => {
    const { checkEvent, setEventData, showEventWindow, currentEvents, eventsAreBlinking } = useContext(State);

    const showEvent = (eventId: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        checkEvent(eventId);
        setEventData(eventId);
        showEventWindow();
    };

    const eventIcons = currentEvents.map((event, index) => {
        const eventName = event.name;
        const eventIconPosition = { left: `${event.positionX}`, top: `${event.positionY}` };
        const eventIconSrc = "./images/event_icons/" + event.icon + ".png";
        const eventIconOpacity = event.checked || eventsAreBlinking ? { opacity: "0.4" } : { opacity: "1" };

        return (
            <button key={eventName} className={styles.button} style={eventIconPosition} onClick={showEvent(index)}>
                <img src={eventIconSrc} className={styles.image} style={eventIconOpacity} alt={eventIconTitle} />
            </button>
        );
    });

    return <div className={styles.eventIcons}>{eventIcons}</div>;
});
