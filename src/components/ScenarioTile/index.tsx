import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import State from "../../storage";

interface ScenarioTileProps {
    scenarioName: string;
    image: string;
    title: string;
    date: string;
}

export const ScenarioTile = observer(({ scenarioName, image, title, date }: ScenarioTileProps) => {
    const state = useContext(State);

    const onePeriodInPercent = 100 / state.scenariosData[scenarioName].length;
    const currentPeriod = Number(localStorage.getItem(`${scenarioName}CurrentPeriodIndex`)); // TODO: перенести в storage
    const currentProgress = onePeriodInPercent * currentPeriod;
    const currentProgressString = Math.round(currentProgress * 10) / 10 + "%";

    return (
        <li className={styles.scenario}>
            <Link to={"/map?" + scenarioName} className={styles.link} />
            <img src={image} className={styles.image} alt="" />
            <div className={styles.blackoutBlock}>
                <h3 className={styles.progress}>{currentProgressString}</h3>
                <h2 className={styles.name}>{title}</h2>
                <h3 className={styles.date}>{date}</h3>
            </div>
        </li>
    );
});
