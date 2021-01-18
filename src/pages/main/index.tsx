import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import State from "../../storage";
import { Blackening } from "../../components/Blackening";
import { SettingsMenu } from "../../components/SettingsMenu";
import { ResourceMenu } from "../../components/ResourceMenu";

const logoImage = "./images/logo.png";
const logoTitle = "Лого";

export const MainPage = observer(() => {
    const state = useContext(State);

    useEffect(() => {
        if (!state.userHasSavesFirst) {
            state.createNewSaves("scenarioFirst");
        }
        if (!state.userHasSavesSecond) {
            state.createNewSaves("scenarioSecond");
        }
        if (!state.userHasSavesThird) {
            state.createNewSaves("scenarioThird");
        }
    });

    return (
        <div className={styles.mainPage}>
            <main>
                <img src={logoImage} className={styles.logo} alt={logoTitle} />
                <ul className={styles.menu}>
                    <li className={styles.option}>
                        <Link to="/scenarios" className={styles.text}>
                            Начать
                        </Link>
                    </li>
                    <li className={styles.option}>
                        <button className={styles.text} onClick={state.showResourceMenu}>
                            Ресурсы
                        </button>
                    </li>
                    <li className={styles.option}>
                        <button className={styles.text} onClick={state.showSettingsMenu}>
                            Настройки
                        </button>
                    </li>
                </ul>
            </main>
            <Blackening />
            <ResourceMenu />
            <SettingsMenu />
        </div>
    );
});
