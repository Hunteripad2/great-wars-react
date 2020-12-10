import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
import './styles.css';
import State from '../../storage';
import Blackening from '../../components/Blackening';
import MusicPlayer from '../../components/MusicPlayer';
import MusicList from '../../components/MusicList';
import EventIcons from '../../components/EventIcons';
import EventWindow from '../../components/EventWindow';
import setDraggableMap from '../../utils/setDraggableMap';
import logo from '../../assets/logo.png'
import turnButton from '../../assets/turn_button.png'

// TODO: i18n

const MapPage = observer(() => {
	const [state] = useState(() => new State());
	
	useEffect(() => {
		setDraggableMap(document.querySelector(".map"));
		const timerID = setInterval(() => {
			state.blinkEventIcons();
		}, 1000);
		return () => {
			clearInterval(timerID)
		}
	});

	return (
		<div className="mapScreen">
			<header className="header">
				<div className="header__top">
					<div className="header__backgroundLeftImage"></div>
					<div className="header__backgroundRightImage"></div>
					<div className="header__returnToMainPage">
						<Link to="/" className="header__returnToMainPageLink">Главное меню</Link>
					</div>
					<img src={logo} className="header__logo" />
					<MusicPlayer />
				</div>
				<div className="turnCounter">
					<span className="turnCounter__date">{state.currentPeriod.date}</span>
					<button className="turnCounter__button" onClick={state.endTurn}>
						<img className="turnCounter__image" src={turnButton} />
					</button>
				</div>
			</header>
			<main>
				<div className="mapBackground"></div>
				<div className="map">
					<img className="map__map" src={'./maps/' + state.currentPeriod.map + ".png"} />
					<EventIcons />
				</div>
			</main>
			<Blackening />
			<MusicList />
			<EventWindow />
		</div>
	);
});

export default MapPage;
