import { useContext, useCallback, useRef } from "react";
import { observer } from "mobx-react-lite";
import { storeContext } from "../../storage/RootStore";
import styles from "./styles.module.scss";
import { createNewSaves } from "../../utils/localStorageService";

const resetProgressFirstText = "Сбросить прогресс первого сценария";
const resetProgressSecondText = "Сбросить прогресс второго сценария";
const resetProgressThirdText = "Сбросить прогресс третьего сценария";
const resetProgressAllText = "Сбросить прогресс всех сценариев";
const volumeSettings = "Громкость музыки";

export const SettingsMenu = observer(() => {
    const {
        interfaceStore: { settingsMenuDisplay },
        scenarioStore: { scenariosData },
        musicPlayerStore: { currentVolume, changeVolume },
    } = useContext(storeContext);
    const startingMusicFirst = JSON.stringify(scenariosData["scenarioFirst"][0].startingMusic);
    const startingMusicSecond = JSON.stringify(scenariosData["scenarioSecond"][0].startingMusic);
    const startingMusicThird = JSON.stringify(scenariosData["scenarioThird"][0].startingMusic);

    const sliderRef = useRef<HTMLInputElement>(null);
    const sliderElement = sliderRef.current;

    const resetProgressFirst = useCallback(() => {
        if (window.confirm("Все связанные с первым сценарием данные будут удалены")) {
            createNewSaves("scenarioFirst", startingMusicFirst);
            alert("Прогресс первого сценария был сброшен");
        }
    }, [startingMusicFirst]);

    const resetProgressSecond = useCallback(() => {
        if (window.confirm("Все связанные со вторым сценарием данные будут удалены")) {
            createNewSaves("scenarioSecond", startingMusicSecond);
            alert("Прогресс второго сценария был сброшен");
        }
    }, [startingMusicSecond]);

    const resetProgressThird = useCallback(() => {
        if (window.confirm("Все связанные с третьим сценарием данные будут удалены")) {
            createNewSaves("scenarioThird", startingMusicThird);
            alert("Прогресс третьего сценария был сброшен");
        }
    }, [startingMusicThird]);

    const resetProgressAll = useCallback(() => {
        if (window.confirm("Все данные будут удалены")) {
            createNewSaves("scenarioFirst", startingMusicFirst);
            createNewSaves("scenarioSecond", startingMusicSecond);
            createNewSaves("scenarioThird", startingMusicThird);
            alert("Прогресс всех сценариев был сброшен");
        }
    }, [startingMusicFirst, startingMusicSecond, startingMusicThird]); // TODO: настройки громкости

    return (
        <div className={styles.settingsMenu} style={settingsMenuDisplay}>
            <ul className={styles.progressList}>
                <li className={styles.option}>
                    <button className={styles.button} onClick={resetProgressFirst}>
                        {resetProgressFirstText}
                    </button>
                </li>
                <li className={styles.option}>
                    <button className={styles.button} onClick={resetProgressSecond}>
                        {resetProgressSecondText}
                    </button>
                </li>
                <li className={styles.option}>
                    <button className={styles.button} onClick={resetProgressThird}>
                        {resetProgressThirdText}
                    </button>
                </li>
                <li className={styles.option}>
                    <button className={styles.button} onClick={resetProgressAll}>
                        {resetProgressAllText}
                    </button>
                </li>
            </ul>
            <h2 className={styles.volumeTitle}>{volumeSettings}</h2>
            <div className={styles.sliderContainer}>
                <input type="range" min="0" max="100" value={currentVolume} ref={sliderRef} className={styles.slider} onInput={() => changeVolume(Number(sliderElement?.value))} id="slider" />
                <span className={styles.sliderValue}>{currentVolume + "%"}</span>
            </div>
        </div>
    );
});
