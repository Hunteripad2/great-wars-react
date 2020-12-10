import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
import './styles.css';
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
		<li className="scenarios__item">
			<Link to={"/map?" + scenarioName} className="scenarios__link">
				<img src={image} className="scenarios__image" />
				<div className="scenarios__blackout">
					<h3 className="scenarios__progress">{progress}</h3>
					<h2 className="scenarios__name">{title}</h2>
					<h3 className="scenarios__date">{date}</h3>
				</div>
			</Link>
		</li>
	);
});

export default ScenarioTile;