import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const turnButton = "./images/turn_button.png";
const turnButtonAlt = "Пропуск периода";

export const TurnCounter = observer(() => {
    const {
        scenarioStore: {
            endTurn,
            currentPeriod: { date },
        },
    } = useContext(storeContext);

    return (
        <div className={styles.turnCounter}>
            <span className={styles.turnCounterDate}>{date}</span>
            <button className={styles.button} onClick={endTurn}>
                <img className={styles.image} src={turnButton} alt={turnButtonAlt} />
            </button>
        </div>
    );
});
