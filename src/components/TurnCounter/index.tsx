import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

export const TurnCounter = observer(() => {
    const state = useContext(State);

    const turnButton = "./images/turn_button.png";
    const turnButtonAlt = "Пропуск периода";

    return (
        <div className={styles.turnCounter}>
            <span className={styles.turnCounterDate}>{state.currentPeriod.date}</span>
            <button className={styles.button} onClick={state.endTurn}>
                <img className={styles.image} src={turnButton} alt={turnButtonAlt} />
            </button>
        </div>
    );
});
