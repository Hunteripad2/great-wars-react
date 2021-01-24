import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { Track } from "../types";
import { updateMusicList } from "../../utils/localStorageService";

export class MusicPlayerStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    musicIsPlaying = false;
    currentTrack: Track = {};
    currentMusicList: Array<Track> = [];

    changeMusicPlayingStatus = (newStatus: boolean) => {
        this.musicIsPlaying = newStatus;
    };

    setNewTrack = (trackId: number) => {
        this.currentTrack = this.currentMusicList[trackId];
    };

    forbidChoosenTrack = (trackName: string | undefined) => {
        const trackId = this.currentMusicList.findIndex((track) => track.name === trackName);
        this.currentMusicList[trackId].allowed = !this.currentMusicList[trackId].allowed;

        const currentScenarioName = this.rootStore.scenarioStore.currentScenarioName;
        updateMusicList(currentScenarioName, JSON.stringify(this.currentMusicList));
    };

    addNewTrack = (newMusicName: string | undefined, newMusicSrc: string | undefined) => {
        this.currentMusicList.push({ name: newMusicName, src: newMusicSrc, allowed: true });

        const currentScenarioName = this.rootStore.scenarioStore.currentScenarioName;
        updateMusicList(currentScenarioName, JSON.stringify(this.currentMusicList));
    };
}
