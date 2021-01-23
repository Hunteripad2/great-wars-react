import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { ResourceMenuStore } from "../ResourceMenuStore";
import { MusicPlayerStore } from "../MusicPlayerStore";
import { InterfaceStore } from "../InterfaceStore";
import { ScenarioStore } from "../ScenarioStore";
import { ServerStore } from "../ServerStore";

export class RootStore {
    constructor() {
        makeAutoObservable(this);
    }
    interfaceStore = new InterfaceStore(this);
    serverStore = new ServerStore(this);
    resourceMenuStore = new ResourceMenuStore(this);
    musicPlayerStore = new MusicPlayerStore(this);
    scenarioStore = new ScenarioStore(this);
}

export const storeContext = createContext<RootStore>(new RootStore());
