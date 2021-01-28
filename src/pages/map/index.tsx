import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";
import { Blackening } from "../../components/Blackening";
import { MusicPlayer } from "../../components/MusicPlayer";
import { TurnCounter } from "../../components/TurnCounter";
import { MusicList } from "../../components/MusicList";
import { CountryFlags } from "../../components/CountryFlags";
import { EventIcons } from "../../components/EventIcons";
import { EventWindow } from "../../components/EventWindow";
import { loadSaves } from "../../utils/localStorageService";
import { grabMap } from "../../utils/grabMap";

// TODO: i18n

const logoImage = "./images/logo.png";
const logoTitle = "Лого";
const mapTitle = "Карта";

export const MapPage = observer(() => {
    const {
        serverStore: { countriesDataIsLoaded },
        interfaceStore: { blinkEventIcons },
        scenarioStore: {
            currentPeriod: { map },
            currentScenarioName,
            setInitialData,
        },
    } = useContext(storeContext);

    useEffect(() => {
        const timerID = setInterval(() => {
            blinkEventIcons();
        }, 1000);
        loadSaves(currentScenarioName, setInitialData);
        return () => {
            clearInterval(timerID);
        };
    }, [blinkEventIcons, currentScenarioName, setInitialData]);

    return (
        <div className={styles.mapPage}>
            <header>
                <div className={styles.topBar}>
                    <div className={styles.bgLeft}></div>
                    <div className={styles.bgRight}></div>
                    <div className={styles.mainPageLink}>
                        <Link to="/" className={styles.text}>
                            Главное меню
                        </Link>
                    </div>
                    <img src={logoImage} className={styles.logo} alt={logoTitle} />
                    <MusicPlayer />
                </div>
                <TurnCounter />
            </header>
            <main>
                <div className={styles.mapBackground}></div>
                <div className={styles.map} onMouseDown={grabMap}>
                    <img className={styles.image} src={"./images/maps/" + map + ".png"} alt={mapTitle} />
                    {countriesDataIsLoaded ? <CountryFlags /> : null}
                    <EventIcons />
                </div>
            </main>
            <Blackening />
            <MusicList />
            <EventWindow />
        </div>
    );
});
