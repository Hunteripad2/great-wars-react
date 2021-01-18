import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import State from "../../storage";
import { getCurrentPeriodIndex } from "../../utils/localStorageService";

interface ScenarioTileProps {
    scenarioName: string;
    image: string;
    title: string;
    date: string;
}

const scenarioImageTitle = "Изображение сценария";

export const ScenarioTile = observer(({ scenarioName, image, title, date }: ScenarioTileProps) => {
    const { scenariosData } = useContext(State);

    const amountOfPeriods = scenariosData[scenarioName].length;
    const onePeriodInPercent = 100 / amountOfPeriods;
    const currentPeriod = Number(getCurrentPeriodIndex(scenarioName));
    const currentProgress = onePeriodInPercent * currentPeriod;
    const currentProgressString = Math.round(currentProgress * 10) / 10 + "%";

    const mapPageLink = "/map?" + scenarioName;

    return (
        <li className={styles.scenario}>
            <Link to={mapPageLink} className={styles.link} />
            <img src={image} className={styles.image} alt={scenarioImageTitle} />
            <div className={styles.blackoutBlock}>
                <h3 className={styles.progress}>{currentProgressString}</h3>
                <h2 className={styles.name}>{title}</h2>
                <h3 className={styles.date}>{date}</h3>
            </div>
        </li>
    );
});
