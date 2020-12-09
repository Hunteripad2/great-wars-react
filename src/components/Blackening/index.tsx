import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import State from '../../storage';
import './styles.css';

const Blackening = observer(() => {
	const [state] = useState(() => new State());

	return (
		<div className="blackening" onClick={() => state.closeTabs()} style={state.blackeningStyle} />
	);
});

export default Blackening;
