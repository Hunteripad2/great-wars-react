import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { DataName } from "../types";

export class ServerStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    resourcesDataIsLoaded = false;
    scenariosDataIsLoaded = false;
    countriesDataIsLoaded = false;

    changeDataLoadStatus = (dataName: DataName, newStatus: boolean) => {
        if (dataName === "resources") {
            this.resourcesDataIsLoaded = newStatus;
        } else if (dataName === "scenarios") {
            this.scenariosDataIsLoaded = newStatus;
        } else {
            this.countriesDataIsLoaded = newStatus;
        }
    };
}
