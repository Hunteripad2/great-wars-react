import { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import State from '../../storage';
import Blackening from '../../components/Blackening';
import SettingsMenu from '../../components/SettingsMenu';
import createNewSaves from '../../utils/createNewSaves';
import logo from '../../assets/logo.png'

const MainPage = observer(() => {
	const state = useContext(State);
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
		<div className={styles.mainPage}>
			<main>
				<img src={logo} className={styles.logo} alt="Лого" />
				<ul className={styles.menu}>
					<li className={styles.option}>
						<Link to="/scenarios" className={styles.text}>Начать</Link>
					</li>
					<li className={styles.option}>
						<button className={styles.text} onClick={state.showResourceMenu}>Ресурсы</button>
					</li>
					<li className={styles.option}>
						<button className={styles.text} onClick={state.showSettingsMenu}>Настройки</button>
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
