import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import State from "../../storage";
import { ScenarioTile } from "../../components/ScenarioTile";

export const ScenariosPage = observer(() => {
	const state = useContext(State);

    const scenarioFirstImage = "./images/scenarios/first.jpg";
    const scenarioSecondImage = "./images/scenarios/second.jpg";
    const scenarioThirdImage = "./images/scenarios/third.jpg";
    const scenarioFirstTitle = "Первая Мировая Война";
    const scenarioSecondTitle = "Межвоенный Период";
    const scenarioThirdTitle = "Вторая Мировая Война";
    const scenarioFirstDate = "1910 - 1921";
    const scenarioSecondDate = "1922 - 1933";
	const scenarioThirdDate = "1934 - 1945";

    return (
        <div className={styles.scenariosPage}>
            <main>
                <h1 className={styles.chooseScenarioHeader}>Выберите сценарий</h1>
                <ul className={styles.scenarioList}>
                    <ScenarioTile scenarioName="scenarioFirst" image={scenarioFirstImage} title={scenarioFirstTitle} date={scenarioFirstDate} />
                    <ScenarioTile scenarioName="scenarioSecond" image={scenarioSecondImage} title={scenarioSecondTitle} date={scenarioSecondDate} />
                    <ScenarioTile scenarioName="scenarioThird" image={scenarioThirdImage} title={scenarioThirdTitle} date={scenarioThirdDate} />
                </ul>
                <div className={styles.mainPageLink}>
                    <Link to="/" className={styles.text}>
                        Главное меню
                    </Link>
                </div>
            </main>
        </div>
    );
});
