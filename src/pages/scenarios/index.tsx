import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import scenarioFirstImage from '../../assets/scenarios/scenario_first.jpg'
import scenarioSecondImage from '../../assets/scenarios/scenario_second.jpg'
import scenarioThirdImage from '../../assets/scenarios/scenario_third.jpg'
import ScenarioTile from '../../components/ScenarioTile';

function ScenariosPage() {
	return (
		<div className={styles.scenariosPage}>
			<main>
				<h1 className={styles.chooseScenarioHeader}>Выберите сценарий</h1>
				<ul className={styles.scenarioList}>
					<ScenarioTile scenarioName="scenarioFirst" image={scenarioFirstImage} title="Первая Мировая Война" date="1910 - 1921" />
					<ScenarioTile scenarioName="scenarioSecond" image={scenarioSecondImage} title="Межвоенный Период" date="1922 - 1933" />
					<ScenarioTile scenarioName="scenarioThird" image={scenarioThirdImage} title="Вторая Мировая Война" date="1934 - 1945" />
				</ul>
				<div className={styles.mainPageLink}>
					<Link to="/" className={styles.text}>Главное меню</Link>
				</div>
			</main>
		</div>
	);
}


export default ScenariosPage;
