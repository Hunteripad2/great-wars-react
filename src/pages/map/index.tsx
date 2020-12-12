import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import State from '../../storage';
import Blackening from '../../components/Blackening';
import MusicPlayer from '../../components/MusicPlayer';
import TurnCounter from '../../components/TurnCounter';
import MusicList from '../../components/MusicList';
import EventIcons from '../../components/EventIcons';
import EventWindow from '../../components/EventWindow';
import grabMap from '../../utils/grabMap';
import logo from '../../assets/logo.png'

// TODO: i18n

const MapPage = observer(() => {
	const [state] = useState(() => new State());
	
	useEffect(() => {
		const timerID = setInterval(() => {
			state.blinkEventIcons();
		}, 1000);
		return () => {
			clearInterval(timerID)
		}
	});

	return (
		<div className={styles.mapPage}>
			<header>
				<div className={styles.topBar}>
					<div className={styles.bgLeft}></div>
					<div className={styles.bgRight}></div>
					<div className={styles.mainPageLink}>
						<Link to="/" className={styles.text}>Главное меню</Link>
					</div>
					<img src={logo} className={styles.logo} alt="Лого" />
					<MusicPlayer />
				</div>
				<TurnCounter />
			</header>
			<main>
				<div className={styles.mapBackground}></div>
				<div className={styles.map} onMouseDown={grabMap}>
					<img className={styles.image} src={'./maps/' + state.currentPeriod.map + ".png"} alt="Карта" />
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
