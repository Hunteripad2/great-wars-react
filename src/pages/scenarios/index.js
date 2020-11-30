import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import scenarioFirstImage from '../../assets/scenarios/scenario_first.jpg'
import scenarioSecondImage from '../../assets/scenarios/scenario_second.jpg'
import scenarioThirdImage from '../../assets/scenarios/scenario_third.jpg'
import ScenarioTile from '../../components/ScenarioTile.js';

class ScenariosPage extends React.Component {
	render() {
		return (
			<main>
        <h1 className="chooseScenario">Выберите сценарий</h1>
        <ul className="scenarios">
          <ScenarioTile scenario="scenarioFirst" image={scenarioFirstImage} progress="scenarioFirstProgress" title="Первая Мировая Война" date="1910 - 1921" />
          <ScenarioTile scenario="scenarioSecond" image={scenarioSecondImage} progress="scenarioSecondProgress" title="Межвоенный Период" date="1922 - 1933" />
          <ScenarioTile scenario="scenarioThird" image={scenarioThirdImage} progress="scenarioThirdProgress" title="Вторая Мировая Война" date="1934 - 1945" />
        </ul>
        <div className="returnToMainPage">
          <Link to="/" className="returnToMainPage__link">Главное меню</Link>
        </div>
      </main>
		);
	}
}


export default ScenariosPage;
