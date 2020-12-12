import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';

const Blackening = observer(() => {
	const [state] = useState(() => new State());

	return (
		<div className={styles.blackening} onClick={state.closeTabs} style={state.blackeningStyle} />
	);
});

export default Blackening;
