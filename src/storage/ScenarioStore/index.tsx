import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { ScenariosData, Event, CountriesData, Country, Track } from "../types";
import { countriesLists } from "../../utils/countriesLists";

export class ScenarioStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    scenariosData: ScenariosData = {};
    countriesData: CountriesData = {};

    currentPeriodIndex = 0;
    currentStoryline = "";
    currentCountryData: Country = {};
    currentEventData: Event = {};

    get currentScenarioName() {
        return document.URL.slice(document.URL.indexOf("?") + 1);
    }
    get currentScenario() {
        return this.scenariosData[this.currentScenarioName];
    }
    get currentPeriod() {
        return this.currentScenario[this.currentPeriodIndex];
    }
    get currentCountryListName() {
        return this.currentPeriod.countries;
    }
    get currentCountryList() {
        return countriesLists[this.currentCountryListName].map((countryTag) => this.countriesData[countryTag]);
    }
    get currentEvents() {
        return this.currentPeriod.events;
    }

    setScenariosData = (newScenariosData: ScenariosData) => {
        this.scenariosData = newScenariosData;
    };
    setCountriesData = (newCountriesData: CountriesData) => {
        this.countriesData = newCountriesData;
    };

    setInitialData = (currentPeriodIndex: number, currentMusicList: Array<Track>, currentTrack: Track, currentStoryline: string) => {
        this.currentPeriodIndex = currentPeriodIndex;
        this.rootStore.musicPlayerStore.currentMusicList = currentMusicList;
        this.rootStore.musicPlayerStore.currentTrack = currentTrack;
        this.currentStoryline = currentStoryline;
    };

    checkEvent = (eventId: number) => {
        this.currentEvents[eventId].checked = true;
    };
    setEventData = (eventId: number) => {
        this.currentEventData = this.currentEvents[eventId];
    };

    endTurn = () => {
        // TODO: сделать начальный и конечный экран
        for (let i = this.currentPeriodIndex + 1; i < this.currentScenario.length; i += 1) {
            if (this.currentScenario[i].storyLine.some((storyline) => storyline === this.currentStoryline)) {
                localStorage.setItem(`${this.currentScenarioName}CurrentPeriodIndex`, i.toString());
                this.currentPeriodIndex = i;
                break;
            }
        }
    };
}
