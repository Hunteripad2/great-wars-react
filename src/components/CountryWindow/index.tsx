import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";
//import { Country } from "../../storage/types";

const currentCountryFlagTitle = "Флаг страны";
const currentCountryLeaderTitle = "Портрет главы государства";
const optionFirstTitle = "Закрыть";

export const CountryWindow = observer(() => {
    const {
        scenarioStore: { currentCountryData },
        interfaceStore: { countryWindowDisplay, closeTabs },
    } = useContext(storeContext);

    const currentCountryName = currentCountryData.name;
    const currentCountryBack = currentCountryData.backstory;
    const currentCountryFlagSrc = "./images/country_flags/" + currentCountryData.flag + ".png";
    const currentCountryLeaderName = currentCountryData.leaderName;
    const currentCountryLeaderSrc = "./images/country_leaders/" + currentCountryData.leaderSrc + ".jpg";

    return (
        <div className={styles.countryWindow} style={countryWindowDisplay}>
            <h1 className={styles.title}>{currentCountryName}</h1>
            <div className={styles.leader}>
                <img className={styles.portrait} src={currentCountryLeaderSrc} alt={currentCountryLeaderTitle} />
                <span className={styles.name}>{currentCountryLeaderName}</span>
            </div>
            <img className={styles.flag} src={currentCountryFlagSrc} alt={currentCountryFlagTitle} />
            <p className={styles.desc}>{currentCountryBack}</p>
            <button className={styles.optionFirst} onClick={closeTabs}>
                {optionFirstTitle}
            </button>
        </div>
    );
});
