import React, { useState } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';

const EventWindow = observer(() => {
	const [state] = useState(() => new State());
	const currentEventData = state.currentEventData;

	function chooseEventOption() {
		console.log("click");
//      //const musicName = event.target.parentNode.getAttribute("musicname");
//      //const musicSrc = event.target.parentNode.getAttribute("musicsrc");
//      //let musicList = JSON.parse(localStorage.getItem(`${currentScenario}MusicList`));
//      //
//      //if (event.target.parentNode.getAttribute("eventtype") === "music" && event.target === document.querySelector('.event__button-second')) {
//      //  document.querySelector('.music-menu').insertAdjacentHTML('beforeend', `<li class="music-menu__item" onclick="chooseThisMusic()"><span class="music-menu__item-name">${musicName}</span><audio class="inactive-music" onended="playNextMusic()"><source src="${musicSrc}" type="audio/ogg"></audio><img src="forbid-music-unckecked.png" class="music-menu__item-forbid" onclick="forbidMusic()" title="Запретить воспроизведение"></li>`);
//      //
//      //  musicList.push({name: musicName, src: musicSrc});
//      //  localStorage.setItem(`${currentScenario}MusicList`, JSON.stringify(musicList));
	}

	return (
		<div className={styles.eventWindow} style={state.eventWindowStyle}>
			<h1 className={styles.name}>{currentEventData.name}</h1>
			<img className={styles.image} src={'./event_images/' + currentEventData.image + '.jpg'} alt="Изображение события" />
			<p className={styles.desc}>{currentEventData.desc}</p>
			<button className={styles.optionFirst} onClick={chooseEventOption} style={state.eventFirstOptionStyle}>{currentEventData.option1}</button>
			{currentEventData.option2 ? <button className={styles.optionSecond} onClick={chooseEventOption}>{currentEventData.option2}</button> : null}
		</div>
	);
});

export default EventWindow;
