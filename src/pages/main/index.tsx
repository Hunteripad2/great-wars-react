import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";
import { createNewSaves, getCurrentPeriodIndex } from "../../utils/localStorageService";
import { Blackening } from "../../components/Blackening";
import { SettingsMenu } from "../../components/SettingsMenu";
import { ResourceMenu } from "../../components/ResourceMenu";

const logoImage = "./images/logo.png";
const logoTitle = "Лого";

export const MainPage = observer(() => {
    const {
        interfaceStore: { showResourceMenu, showSettingsMenu },
        scenarioStore: { scenariosData },
    } = useContext(storeContext);

    useEffect(() => {
        const userHasSavesFirst = !!getCurrentPeriodIndex("scenarioFirst");
        const userHasSavesSecond = !!getCurrentPeriodIndex("scenarioSecond");
        const userHasSavesThird = !!getCurrentPeriodIndex("scenarioThird");
        const startingMusicFirst = JSON.stringify(scenariosData["scenarioFirst"][0].startingMusic);
        const startingMusicSecond = JSON.stringify(scenariosData["scenarioSecond"][0].startingMusic);
        const startingMusicThird = JSON.stringify(scenariosData["scenarioThird"][0].startingMusic);

        if (!userHasSavesFirst) {
            createNewSaves("scenarioFirst", startingMusicFirst);
        }
        if (!userHasSavesSecond) {
            createNewSaves("scenarioSecond", startingMusicSecond);
        }
        if (!userHasSavesThird) {
            createNewSaves("scenarioThird", startingMusicThird);
        }
    }, [scenariosData]);

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
                        <button className={styles.text} onClick={showResourceMenu}>
                            Ресурсы
                        </button>
                    </li>
                    <li className={styles.option}>
                        <button className={styles.text} onClick={showSettingsMenu}>
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
