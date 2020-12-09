import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import scenarioFirstImage from '../../assets/scenarios/scenario_first.jpg'
import scenarioSecondImage from '../../assets/scenarios/scenario_second.jpg'
import scenarioThirdImage from '../../assets/scenarios/scenario_third.jpg'
import ScenarioTile from '../../components/ScenarioTile.js';
import scenariosData from '../../utils/scenariosData';

class ScenariosPage extends React.Component {
	render() {
    const scenarioFirstProgress = Math.round(100 / scenariosData.scenarioFirst.length * localStorage.getItem(`scenarioFirstCurrentPeriodIndex`) * 10) / 10 + "%"; // TODO: Refactoring
    const scenarioSecondProgress = Math.round(100 / scenariosData.scenarioSecond.length * localStorage.getItem(`scenarioSecondCurrentPeriodIndex`) * 10) / 10 + "%";
    const scenarioThirdProgress = Math.round(100 / scenariosData.scenarioThird.length * localStorage.getItem(`scenarioThirdCurrentPeriodIndex`) * 10) / 10 + "%";

		return (
			<main>
        <h1 className="chooseScenario">Выберите сценарий</h1>
        <ul className="scenarios">
          <ScenarioTile scenarioName="scenarioFirst" image={scenarioFirstImage} progress={scenarioFirstProgress} title="Первая Мировая Война" date="1910 - 1921" />
          <ScenarioTile scenarioName="scenarioSecond" image={scenarioSecondImage} progress={scenarioSecondProgress} title="Межвоенный Период" date="1922 - 1933" />
          <ScenarioTile scenarioName="scenarioThird" image={scenarioThirdImage} progress={scenarioThirdProgress} title="Вторая Мировая Война" date="1934 - 1945" />
        </ul>
        <div className="returnToMainPage">
          <Link to="/" className="returnToMainPage__link">Главное меню</Link>
        </div>
      </main>
		);
	}
}


export default ScenariosPage;
