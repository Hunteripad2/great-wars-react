import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import State from "../../storage";
import { Blackening } from "../../components/Blackening";
import { MusicPlayer } from "../../components/MusicPlayer";
import { TurnCounter } from "../../components/TurnCounter";
import { MusicList } from "../../components/MusicList";
import { CountryFlags } from "../../components/CountryFlags";
import { EventIcons } from "../../components/EventIcons";
import { EventWindow } from "../../components/EventWindow";
import { grabMap } from "../../utils/grabMap";

// TODO: i18n

export const MapPage = observer(() => {
    const state = useContext(State);

    const logoImage = "./images/logo.png";
    const logoTitle = "Лого";
    const mapTitle = "Карта";

    useEffect(() => {
        const timerID = setInterval(() => {
            state.blinkEventIcons();
        }, 1000);
        state.loadSaves();
        return () => {
            clearInterval(timerID);
        };
    });

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
                    <img className={styles.image} src={"./images/maps/" + state.currentPeriod.map + ".png"} alt={mapTitle} />
                    <CountryFlags />
                    <EventIcons />
                </div>
            </main>
            <Blackening />
            <MusicList />
            <EventWindow />
        </div>
    );
});
