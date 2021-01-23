import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const countryIconTitle = "Страна";

export const CountryFlags = observer(() => {
    const {
        scenarioStore: { currentCountryList },
    } = useContext(storeContext);

    const showCountry = (countryId: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        //state.checkEvent(eventId);
        //state.setEventData(eventId);
        //state.showEventWindow();
        console.log("click");
    };

    let countryFlags;
    countryFlags = currentCountryList.map((country, index) => {
        const countryName = country.name;
        const countryIconSrc = "./images/country_icons/" + country.icon + ".png";
        const countryIconPosition = { left: `${country.positionX}`, top: `${country.positionY}` };

        return (
            <button key={countryName} className={styles.button} style={countryIconPosition} onClick={showCountry(index)}>
                <img src={countryIconSrc} className={styles.image} alt={countryIconTitle} />
            </button>
        );
    });

    return <div className={styles.countryFlags}>{countryFlags}</div>;
});
