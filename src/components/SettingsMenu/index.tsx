import { useContext } from "react";
import { observer } from "mobx-react-lite";
import State from "../../storage";
import styles from "./styles.module.scss";

const resetProgressFirstText = "Сбросить прогресс первого сценария";
const resetProgressSecondText = "Сбросить прогресс второго сценария";
const resetProgressThirdText = "Сбросить прогресс третьего сценария";
const resetProgressAllText = "Сбросить прогресс всех сценариев";

export const SettingsMenu = observer(() => {
    const state = useContext(State);

    function resetProgressFirst() {
        if (window.confirm("Все связанные с первым сценарием данные будут удалены")) {
            state.createNewSaves("scenarioFirst");
            alert("Прогресс первого сценария был сброшен");
        }
    }
    function resetProgressSecond() {
        if (window.confirm("Все связанные со вторым сценарием данные будут удалены")) {
            state.createNewSaves("scenarioSecond");
            alert("Прогресс второго сценария был сброшен");
        }
    }
    function resetProgressThird() {
        if (window.confirm("Все связанные с третьим сценарием данные будут удалены")) {
            state.createNewSaves("scenarioThird");
            alert("Прогресс третьего сценария был сброшен");
        }
    }
    function resetProgressAll() {
        if (window.confirm("Все данные будут удалены")) {
            state.createNewSaves("scenarioFirst");
            state.createNewSaves("scenarioSecond");
            state.createNewSaves("scenarioThird");
            alert("Прогресс всех сценариев был сброшен");
        }
    } // TODO: настройки громкости

    return (
        <div className={styles.settingsMenu} style={state.settingsMenuStyle}>
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
        </div>
    );
});
