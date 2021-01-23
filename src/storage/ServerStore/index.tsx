import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";

export class ServerStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    dataIsLoaded = false;

    changeDataLoadStatus = (newStatus: boolean) => {
        this.dataIsLoaded = newStatus;
    };
}
