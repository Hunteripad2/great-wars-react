import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { Track } from "../types";

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
    updateMusicList = (newMusicList: Array<Track>, scenarioName: string) => {
        this.currentMusicList = newMusicList;
        localStorage.setItem(`${scenarioName}CurrentMusicList`, JSON.stringify(newMusicList));
    };
}
