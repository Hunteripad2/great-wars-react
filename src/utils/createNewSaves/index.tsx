import { scenariosData } from "../scenariosData";

export function createNewSaves(scenarioName: string): void {
    localStorage.setItem(`${scenarioName}CurrentPeriodIndex`, "0"); // вынести в сервис
    localStorage.setItem(`${scenarioName}CurrentStoryline`, "Historical");
    localStorage.setItem(`${scenarioName}CurrentMusicList`, JSON.stringify(scenariosData[scenarioName][0].startingMusic));
}
