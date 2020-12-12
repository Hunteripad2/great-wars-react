import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import State from '../../storage';

interface ScenarioTileProps {
	scenarioName: string;
	image: string;
	title: string;
	date: string;
}

const ScenarioTile = observer(({ scenarioName, image, title, date } : ScenarioTileProps) => {
	const [state] = useState(() => new State());

	const progress : string = Math.round(100 / state.scenariosData[scenarioName].length * Number(localStorage.getItem(`${scenarioName}CurrentPeriodIndex`)) * 10) / 10 + "%";

	return (
		<li className={styles.scenario}>
			<Link to={"/map?" + scenarioName} className={styles.link} />
			<img src={image} className={styles.image} />
			<div className={styles.blackoutBlock}>
				<h3 className={styles.progress}>{progress}</h3>
				<h2 className={styles.name}>{title}</h2>
				<h3 className={styles.date}>{date}</h3>
			</div>
		</li>
	);
});

export default ScenarioTile;