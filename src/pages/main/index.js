import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite"
import './index.css';
import { Link } from "react-router-dom";
import State from '../../storage';
import Blackening from '../../components/Blackening.js';
import SettingsMenu from '../../components/SettingsMenu.js';
import createNewSaves from '../../utils/createNewSaves.js';
import logo from '../../assets/logo.png'

const MainPage = observer(() => {
	const [state] = useState(() => new State());
	const userHasSavesFirst = localStorage.getItem(`scenarioFirstCurrentPeriodIndex`) ? true : false;
	const userHasSavesSecond = localStorage.getItem(`scenarioSecondCurrentPeriodIndex`) ? true : false;
	const userHasSavesThird = localStorage.getItem(`scenarioThirdCurrentPeriodIndex`) ? true : false;

	useEffect(() => {
		if (!userHasSavesFirst) {
			createNewSaves("scenarioFirst");
		}
		if (!userHasSavesSecond) {
			createNewSaves("scenarioSecond");
		}
		if (!userHasSavesThird) {
			createNewSaves("scenarioThird");
		}
	});

	return (
		<div className="mainMenu">
			<main>
				<img src={logo} className="logo" />
				<ul className="menu">
					<li className="menu__item">
						<Link to="/scenarios" className="menu__option">Начать</Link>
					</li>
					<li className="menu__item">
						<button className="menu__option" /*@click="showResourceMenu"*/>Ресурсы</button>
					</li>
					<li className="menu__item">
						<button className="menu__option" onClick={() => state.showSettingsMenu()}>Настройки</button>
					</li>
				</ul>
			</main>
			<Blackening />
			<ResourceMenu />
			<SettingsMenu />
		</div>
	);
});

function ResourceMenu() {
	return null;
}


export default MainPage;
