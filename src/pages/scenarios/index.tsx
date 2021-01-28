import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";
import { ScenarioTile } from "../../components/ScenarioTile";

const scenarioFirstName = "scenarioFirst";
const scenarioSecondName = "scenarioSecond";
const scenarioThirdName = "scenarioThird";
const scenarioFirstImage = "./images/scenarios/first.jpg";
const scenarioSecondImage = "./images/scenarios/second.jpg";
const scenarioThirdImage = "./images/scenarios/third.jpg";
const scenarioFirstTitle = "Первая Мировая Война";
const scenarioSecondTitle = "Межвоенный Период";
const scenarioThirdTitle = "Вторая Мировая Война";
const scenarioFirstDate = "1910 - 1921";
const scenarioSecondDate = "1922 - 1933";
const scenarioThirdDate = "1934 - 1945";

export const ScenariosPage = observer(() => {
    const {
        serverStore: { scenariosDataIsLoaded },
    } = useContext(storeContext);

    return (
        <div className={styles.scenariosPage}>
            <main>
                <h1 className={styles.chooseScenarioHeader}>Выберите сценарий</h1>
                {scenariosDataIsLoaded ? (
                    <ul className={styles.scenarioList}>
                        <ScenarioTile scenarioName={scenarioFirstName} image={scenarioFirstImage} title={scenarioFirstTitle} date={scenarioFirstDate} />
                        <ScenarioTile scenarioName={scenarioSecondName} image={scenarioSecondImage} title={scenarioSecondTitle} date={scenarioSecondDate} />
                        <ScenarioTile scenarioName={scenarioThirdName} image={scenarioThirdImage} title={scenarioThirdTitle} date={scenarioThirdDate} />
                    </ul>
                ) : null}
                <div className={styles.mainPageLink}>
                    <Link to="/" className={styles.text}>
                        Главное меню
                    </Link>
                </div>
            </main>
        </div>
    );
});
