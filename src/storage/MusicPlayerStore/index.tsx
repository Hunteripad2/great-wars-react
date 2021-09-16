import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { Track } from "../types";
import { updateMusicListSave, updateMusicVolumeSave, getMusicVolumeSave } from "../../utils/localStorageService";

export class MusicPlayerStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    musicIsPlaying = false;
    currentTrack: Track = {};
    currentMusicList: Array<Track> = [];
    currentVolume: number = getMusicVolumeSave();

    changeMusicPlayingStatus = (newStatus: boolean) => {
        this.musicIsPlaying = newStatus;
    };

    changeVolume = (newVolume: number) => {
        this.currentVolume = newVolume;
        updateMusicVolumeSave(String(newVolume));
    };

    setCurrentTrack = (trackId: number) => {
        this.currentTrack = this.currentMusicList[trackId];
    };

    findTrackByName = (trackName: string) => {
        return this.currentMusicList.findIndex((track) => track.name === trackName);
    };

    forbidTrack = (trackId: number) => {
        this.currentMusicList[trackId].allowed = !this.currentMusicList[trackId].allowed;
        updateMusicListSave(this.rootStore.scenarioStore.currentScenarioName, JSON.stringify(this.currentMusicList));
    };

    addNewTrack = (newMusicName: string, newMusicSrc: string) => {
        this.currentMusicList.push({ name: newMusicName, src: newMusicSrc, allowed: true });
        updateMusicListSave(this.rootStore.scenarioStore.currentScenarioName, JSON.stringify(this.currentMusicList));
    };
}
