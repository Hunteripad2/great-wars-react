import scenariosData from '../scenariosData';

function createNewSaves(scenarioName: string) : void {
	localStorage.setItem(`${scenarioName}CurrentPeriodIndex`, "0");
	localStorage.setItem(`${scenarioName}CurrentStoryline`, "Historical");
	localStorage.setItem(`${scenarioName}CurrentMusicList`, JSON.stringify(scenariosData[scenarioName][0].startingMusic));
}

export default createNewSaves;