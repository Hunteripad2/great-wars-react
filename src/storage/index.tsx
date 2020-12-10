import { makeAutoObservable} from "mobx";
import scenariosData, { Track, Event } from '../utils/scenariosData';

class State {
	constructor() {
        makeAutoObservable(this)
	}

	scenariosData = scenariosData;

	settingsMenuIsShown = false;
	musicListIsShown = false;
	eventWindowIsShown = false;

	musicIsPlaying = false;
	eventsAreBlinking = false;

	currentPeriodIndex = 0;
	currentMusicList : Array<Track> = [];
	currentTrack : Track = {};
	currentStoryline = "";
	currentEventData : Event = {};

	get settingsMenuStyle() {
		return this.settingsMenuIsShown ? {transform: 'scale(1, 1)'} : {transform: 'scale(0, 0)'};
	}
	get musicListStyle() {
		return this.musicListIsShown ? {transform: 'translate(0%)'} : {transform: 'translate(100%)'};
	}
	get eventWindowStyle() {
		return this.eventWindowIsShown ? {transform: 'scale(1, 1)'} : {transform: 'scale(0, 0)'};
	}
	get eventFirstOptionStyle() {
		return this.currentEventData.option2 ? {} : {borderTopLeftRadius: "15px", borderTopRightRadius: "15px"};
	}
	get blackeningStyle() {
		return this.settingsMenuIsShown ? {opacity: '0.8', transform: 'translate(0%)'} : {opacity: '0', transform: 'translate(100%)'};
	}
	get eventIconsStyle() {
		return this.eventsAreBlinking ? {opacity: "0.4"} : {opacity: "1"};
	}

	get currentScenarioName() {
		return document.URL.slice(document.URL.indexOf("?") + 1);
	}
	get currentScenario() {
		return this.scenariosData[this.currentScenarioName];
	}
	get currentPeriod() {
		return this.currentScenario[this.currentPeriodIndex];
	}
	get currentEvents() {
		return this.currentPeriod.events;
	}

	showSettingsMenu() {
		this.settingsMenuIsShown = true;
	}
	showMusicList() {
		this.musicListIsShown = true;
	}
	showEventWindow() {
		this.eventWindowIsShown = true;
	}
	closeTabs() {
		this.settingsMenuIsShown = false;
		this.musicListIsShown = false;
		this.eventWindowIsShown = false;
	}

	blinkEventIcons() {
		this.eventsAreBlinking = !this.eventsAreBlinking;
	}

	changeMusicStatus() {
		this.musicIsPlaying = !this.musicIsPlaying;
	}
	setNextTrack() {
		let randomIndex;

		for (let track of this.currentMusicList) {
			if (track.allowed && track !== this.currentTrack) {
				do randomIndex = Math.floor(Math.random() * this.currentMusicList.length)
				while (!this.currentMusicList[randomIndex].allowed && this.currentMusicList[randomIndex] !== this.currentTrack);
				this.currentTrack = this.currentMusicList[randomIndex];
				break;
			}
		}

		this.musicIsPlaying = true;
	}
	setChoosenTrack(trackId: number) {
		this.currentTrack = this.currentMusicList[trackId];
		this.musicIsPlaying = true;
	}
	updateMusicList(newMusicList : Array<Track>) {
		this.currentMusicList = newMusicList;
	}

	setEventData(eventId : number) {
		this.currentEventData = this.currentEvents[eventId];
	}

	loadSaves() {
		this.currentPeriodIndex = Number(localStorage.getItem(`${this.currentScenarioName}CurrentPeriodIndex`));
		this.currentMusicList = JSON.parse(String(localStorage.getItem(`${this.currentScenarioName}CurrentMusicList`)));
		this.currentTrack = this.currentMusicList[0];
		this.currentStoryline = String(localStorage.getItem(`${this.currentScenarioName}CurrentStoryline`));
	}

	endTurn() { // TODO: endscreen
		for (let i = this.currentPeriodIndex + 1; i < this.currentScenario.length; i += 1) {
			if (this.currentScenario[i].storyLine.some(storyline => storyline === this.currentStoryline)) {
				localStorage.setItem(`${this.currentScenarioName}CurrentPeriodIndex`, i.toString());
				this.currentPeriodIndex = i;
				break;
			}
		}
	}
}

export default State;