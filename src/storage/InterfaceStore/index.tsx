import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";

export class InterfaceStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    settingsMenuIsShown = false;
    resourceMenuIsShown = false;
    resourceWindowIsShown = false;
    startScreenIsShown = false;
    musicListIsShown = false;
    countryWindowIsShown = false;
    eventWindowIsShown = false;

    eventsAreBlinking = false;

    get settingsMenuDisplay() {
        return this.settingsMenuIsShown ? { transform: "scale(1, 1)" } : { transform: "scale(0, 0)" };
    }
    get resourceMenuDisplay() {
        return this.resourceMenuIsShown ? { transform: "translateY(0%)" } : { transform: "translateY(100%)" };
    }
    get resourceWindowDisplay() {
        return this.resourceWindowIsShown ? { transform: "scale(1, 1)" } : { transform: "scale(0, 0)" };
    }
    get startScreenDisplay() {
        return this.startScreenIsShown ? { opacity: "0.9", transform: "translate(0%)" } : { opacity: "0", transform: "translate(100%)" };
    }
    get musicListDisplay() {
        return this.musicListIsShown ? { transform: "translate(0%)" } : { transform: "translate(100%)" };
    }
    get eventWindowDisplay() {
        return this.eventWindowIsShown ? { transform: "scale(1, 1)" } : { transform: "scale(0, 0)" };
    }
    get eventFirstOptionStyle() {
        return this.rootStore.scenarioStore.currentEventData.option2 ? {} : { borderTopLeftRadius: "15px", borderTopRightRadius: "15px" };
    }
    get anyMenuIsShown() {
        return this.settingsMenuIsShown || this.resourceMenuIsShown || this.resourceWindowIsShown || this.musicListIsShown || this.eventWindowIsShown;
    }
    get blackeningDisplay() {
        return this.anyMenuIsShown ? { opacity: "0.8", transform: "translate(0%)" } : { opacity: "0", transform: "translate(100%)" };
    }

    get playButtonImage() {
        return this.rootStore.musicPlayerStore.musicIsPlaying ? "./images/music_buttons/pause.png" : "./images/music_buttons/play.png";
    }
    get playButtonTitle() {
        return this.rootStore.musicPlayerStore.musicIsPlaying ? "Поставить на паузу" : "Снять с паузы";
    }

    showSettingsMenu = () => {
        this.settingsMenuIsShown = true;
    };
    showResourceMenu = () => {
        this.resourceMenuIsShown = true;
    };
    showResourceWindow = () => {
        this.resourceWindowIsShown = true;
        this.resourceMenuIsShown = false;
    };
    showMusicList = () => {
        this.musicListIsShown = true;
    };
    showEventWindow = () => {
        this.eventWindowIsShown = true;
    };
    returnToResourceMenu = () => {
        this.resourceMenuIsShown = true;
        this.resourceWindowIsShown = false;
    };
    closeTabs = () => {
        if (this.resourceWindowIsShown === true) {
            this.resourceMenuIsShown = true;
        } else {
            this.resourceMenuIsShown = false;
        }
        this.settingsMenuIsShown = false;
        this.resourceWindowIsShown = false;
        this.musicListIsShown = false;
        this.eventWindowIsShown = false;
    };
    closeStartScreen = () => {
        //if () {
        //
        //} else {
        //
        //}
        this.startScreenIsShown = false;
    };

    blinkEventIcons = () => {
        this.eventsAreBlinking = !this.eventsAreBlinking;
    };
}
