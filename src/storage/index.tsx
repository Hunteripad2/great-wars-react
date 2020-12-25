import { createContext } from 'react';
import { makeAutoObservable, computed} from "mobx";
import scenariosData, { Track, Event } from '../utils/scenariosData';
import resourcesData from '../utils/resourcesData';

const activeCategoryStyle = {backgroundColor: '#484848', borderTopLeftRadius: '25px', borderTopRightRadius: '25px'};

class State {
	constructor() {
        makeAutoObservable(this, {musicListStyle: computed({ keepAlive: true })})
	}

	scenariosData = scenariosData;
	resourcesData = resourcesData;

	settingsMenuIsShown = false;
	resourceMenuIsShown = false;
	musicListIsShown = false;
	eventWindowIsShown = false;

	booksCategoryIsShown = false;
	articlesCategoryIsShown = false;
	filmsCategoryIsShown = false;

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
	get resourceMenuStyle() {
		return this.resourceMenuIsShown ? {transform: 'translateY(0%)'} : {transform: 'translateY(100%)'};
	}
	get headerStyle() {
		return this.booksCategoryIsShown || this.articlesCategoryIsShown || this.filmsCategoryIsShown ? 
		{transform: 'scale(0, 0)'} : {transform: 'scale(1, 1)'};
	}
	get resourcesStyle() {
		return this.booksCategoryIsShown || this.articlesCategoryIsShown || this.filmsCategoryIsShown ? 
		{opacity: "1"} : {opacity: "0"};
	}
	get booksCategoryStyle() {
		return this.booksCategoryIsShown ? activeCategoryStyle : {};
	}
	get articlesCategoryStyle() {
		return this.articlesCategoryIsShown ? activeCategoryStyle : {};
	}
	get filmsCategoryStyle() {
		return this.filmsCategoryIsShown ? activeCategoryStyle : {};
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
		return this.settingsMenuIsShown || this.resourceMenuIsShown || this.musicListIsShown || this.eventWindowIsShown ? 
		{opacity: '0.8', transform: 'translate(0%)'} : {opacity: '0', transform: 'translate(100%)'};
	}
	get playButtonImage() {
		return this.musicIsPlaying ? './music_buttons/pause.png' : './music_buttons/play.png';
	}
	get playButtonTitle() {
		return this.musicIsPlaying ? 'Поставить на паузу' : 'Снять с паузы';
	}
	get eventIconStyle() {
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

	get currentResourceCategory() {
		return this.booksCategoryIsShown ? "books" : 
		this.articlesCategoryIsShown ? "articles" : "films";
	}
	get currentResourceList() {
		return this.resourcesData[this.currentResourceCategory];
	}

	showSettingsMenu = () => {
		this.settingsMenuIsShown = true;
	}
	showResourceMenu = () => {
		this.resourceMenuIsShown = true;
	}
	showMusicList = () => {
		this.musicListIsShown = true;
	}
	showEventWindow = () => {
		this.eventWindowIsShown = true;
	}
	closeTabs = () => {
		this.settingsMenuIsShown = false;
		this.resourceMenuIsShown = false;
		this.musicListIsShown = false;
		this.eventWindowIsShown = false;
	}

	chooseBooksCategory = () => {
		this.booksCategoryIsShown = true;
		this.articlesCategoryIsShown = false;
		this.filmsCategoryIsShown = false;
	}
	chooseArticlesCategory = () => {
		this.booksCategoryIsShown = false;
		this.articlesCategoryIsShown = true;
		this.filmsCategoryIsShown = false;
	}
	chooseFilmsCategory = () => {
		this.booksCategoryIsShown = false;
		this.articlesCategoryIsShown = false;
		this.filmsCategoryIsShown = true;
	}

	blinkEventIcons = () => {
		this.eventsAreBlinking = !this.eventsAreBlinking;
	}

	changeMusicStatus = (newStatus: boolean) => {
		this.musicIsPlaying = newStatus;
	}
	setNewTrack = (trackId: number) => {
		this.currentTrack = this.currentMusicList[trackId];
	}
	updateMusicList = (newMusicList: Array<Track>, scenarioName: string) => {
		this.currentMusicList = newMusicList;
		localStorage.setItem(`${scenarioName}CurrentMusicList`, JSON.stringify(newMusicList));
	}

	checkEvent = (eventId: number) => {
		this.currentEvents[eventId].checked = true;
	}
	setEventData = (eventId: number) => {
		this.currentEventData = this.currentEvents[eventId];
	}

	loadSaves = () => {
		this.currentPeriodIndex = Number(localStorage.getItem(`${this.currentScenarioName}CurrentPeriodIndex`));
		this.currentMusicList = JSON.parse(String(localStorage.getItem(`${this.currentScenarioName}CurrentMusicList`)));
		this.currentTrack = this.currentMusicList[0];
		this.currentStoryline = String(localStorage.getItem(`${this.currentScenarioName}CurrentStoryline`));
	}

	endTurn = () => { // TODO: endscreen
		for (let i = this.currentPeriodIndex + 1; i < this.currentScenario.length; i += 1) {
			if (this.currentScenario[i].storyLine.some(storyline => storyline === this.currentStoryline)) {
				localStorage.setItem(`${this.currentScenarioName}CurrentPeriodIndex`, i.toString());
				this.currentPeriodIndex = i;
				break;
			}
		}
	}
}

const StateContext = createContext<State>(new State());

export default StateContext;
