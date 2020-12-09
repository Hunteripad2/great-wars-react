import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import State from '../../storage';
import './styles.css';
import createNewSaves from '../../utils/createNewSaves';

const SettingsMenu = observer(() => {
	const [state] = useState(() => new State());

	function resetProgressFirst() {
		if (window.confirm("Все связанные с первым сценарием данные будут удалены")) {
			createNewSaves("scenarioFirst");
			alert("Прогресс первого сценария был сброшен");
		}
	}
	function resetProgressSecond() {
		if (window.confirm("Все связанные со вторым сценарием данные будут удалены")) {
			createNewSaves("scenarioSecond");
			alert("Прогресс второго сценария был сброшен");
		}
	}
	function resetProgressThird() {
		if (window.confirm("Все связанные с третьим сценарием данные будут удалены")) {
			createNewSaves("scenarioThird");
			alert("Прогресс третьего сценария был сброшен");
		}
	}

	return (
		<div className="settingsMenu" style={state.settingsMenuStyle}>
			<ul className="settingsMenu__progressList">
				<li className="settingsMenu__progressItem">
					<button className="settingsMenu__progressButton" onClick={resetProgressFirst}>Сбросить прогресс первого сценария</button>
				</li>
				<li className="settingsMenu__progressItem">
					<button className="settingsMenu__progressButton" onClick={resetProgressSecond}>Сбросить прогресс второго сценария</button>
				</li>
				<li className="settingsMenu__progressItem">
					<button className="settingsMenu__progressButton" onClick={resetProgressThird}>Сбросить прогресс третьего сценария</button>
				</li>
			</ul>
		</div>
	);
});

export default SettingsMenu;
