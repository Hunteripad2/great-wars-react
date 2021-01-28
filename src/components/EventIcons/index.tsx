import { useContext } from "react";
import { observer } from "mobx-react-lite";
//import { v4 as uuidv4 } from "uuid"; // TODO: с uuid каждый рендер создаётся новый элемент, разобраться
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const eventIconTitle = "Событие";

export const EventIcons = observer(() => {
    const {
        scenarioStore: { checkEvent, setEventData, currentEvents },
        interfaceStore: { showEventWindow, eventsAreBlinking },
    } = useContext(storeContext);

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
