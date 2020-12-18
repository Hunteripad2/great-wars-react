import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import State from '../../storage';
import styles from './styles.module.scss';
import createNewSaves from '../../utils/createNewSaves';

const SettingsMenu = observer(() => {
	const state = useContext(State);

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
	function resetProgressAll() {
		if (window.confirm("Все данные будут удалены")) {
			createNewSaves("scenarioFirst");
			createNewSaves("scenarioSecond");
			createNewSaves("scenarioThird");
			alert("Прогресс всех сценариев был сброшен");
		}
	}

	return (
		<div className={styles.settingsMenu} style={state.settingsMenuStyle}>
			<ul className={styles.progressList}>
				<li className={styles.option}>
					<button className={styles.button} onClick={resetProgressFirst}>Сбросить прогресс первого сценария</button>
				</li>
				<li className={styles.option}>
					<button className={styles.button} onClick={resetProgressSecond}>Сбросить прогресс второго сценария</button>
				</li>
				<li className={styles.option}>
					<button className={styles.button} onClick={resetProgressThird}>Сбросить прогресс третьего сценария</button>
				</li>
				<li className={styles.option}>
					<button className={styles.button} onClick={resetProgressAll}>Сбросить прогресс всех сценариев</button>
				</li>
			</ul>
		</div>
	);
});

export default SettingsMenu;
