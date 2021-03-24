import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const countryIconTitle = "Страна";
const eventIconTitle = "Событие";

export const MapIcons = observer(() => {
    const {
        scenarioStore: { currentCountryList, checkEvent, setEventData, currentEvents },
        interfaceStore: { showEventWindow, eventsAreBlinking },
    } = useContext(storeContext);

    const showCountry = (countryId: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        //TODO: сделать окно страны
        console.log("click");
    };

    const countryFlags = currentCountryList.map((country, index) => {
        const countryName = country.name;
        const countryIconSrc = "./images/country_icons/" + country.flag + ".png";
        const countryIconPosition = { left: `${country.positionX}`, top: `${country.positionY}` };

        return (
            <button key={countryName} className={styles.flagButton} style={countryIconPosition} onClick={showCountry(index)}>
                <img src={countryIconSrc} className={styles.flagImage} alt={countryIconTitle} title={countryName} />
            </button>
        );
    });

    function showEvent(eventId: number) {
        checkEvent(eventId);
        setEventData(eventId);
        showEventWindow();
    }

    const eventIcons = currentEvents.map((event, index) => {
        const eventName = event.name;
        const eventIconPosition = { left: `${event.positionX}`, top: `${event.positionY}` };
        const eventIconSrc = "./images/event_icons/" + event.icon + ".png";
        const eventIconOpacity = event.checked || eventsAreBlinking ? { opacity: "0.4" } : { opacity: "1" };

        return (
            <button key={eventName} className={styles.eventButton} style={eventIconPosition} onClick={() => showEvent(index)}>
                <img src={eventIconSrc} className={styles.eventImage} style={eventIconOpacity} alt={eventIconTitle} />
            </button>
        );
    });

    return (
        <div className={styles.mapIcons}>
            {countryFlags}
            {eventIcons}
        </div>
    );
});
