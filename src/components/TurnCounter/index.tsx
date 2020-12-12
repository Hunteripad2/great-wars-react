import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';
import turnButton from '../../assets/turn_button.png'

const TurnCounter = observer(() => {
	const [state] = useState(() => new State());

	return (
		<div className={styles.turnCounter}>
			<span className={styles.turnCounterDate}>{state.currentPeriod.date}</span>
			<button className={styles.button} onClick={state.endTurn}>
				<img className={styles.image} src={turnButton} alt="Пропуск периода" />
			</button>
		</div>
	);
});

export default TurnCounter;
