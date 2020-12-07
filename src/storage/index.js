import { makeAutoObservable} from "mobx";

class State {
	constructor() {
        makeAutoObservable(this)
	}

    settingsMenuIsShown = false

	get settingsMenuStyle() {
		return this.settingsMenuIsShown ? {transform: 'scale(1, 1)'} : {transform: 'scale(0, 0)'};
	}

	get blackeningStyle() {
		return this.settingsMenuIsShown ? {opacity: '0.8', transform: 'translate(0%)'} : {opacity: '0', transform: 'translate(100%)'};
	}

	showSettingsMenu() {
		this.settingsMenuIsShown = true
	}

	closeTabs() {
		this.settingsMenuIsShown = false
	}
}

export default State;