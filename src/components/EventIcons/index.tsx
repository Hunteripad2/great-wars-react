import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';

const EventIcons = observer(() => {
	const [state] = useState(() => new State());

	const showEvent = (eventId : number) => (e : React.MouseEvent<HTMLButtonElement>) => {
		state.setEventData(eventId);
		state.showEventWindow();

	  //      event.currentTarget.setAttribute("checked", "");
	  //      event.currentTarget.style.opacity = "0.2";
	}

	const eventIcons = state.currentEvents.map((event, index) => 
		<button key={event.name} className={styles.button} style={{left: `${event.positionX}`, top: `${event.positionY}`}} onClick={showEvent(index)}>
			<img src={'./event_icons/' + event.icon + ".png"} className={styles.image} style={state.eventIconsStyle} />
		</button>
	);

	return (
		<div className={styles.eventIcons}>
			{eventIcons}
		</div>
	);
});

export default EventIcons;
