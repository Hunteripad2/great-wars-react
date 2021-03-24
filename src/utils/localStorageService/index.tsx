export function getCurrentPeriodIndex(scenarioName: string) {
    return localStorage.getItem(`${scenarioName}CurrentPeriodIndex`);
}

export function updatePeriodIndexSave(currentScenarioName: string, currentPeriodIndex: string) {
    localStorage.setItem(`${currentScenarioName}CurrentPeriodIndex`, currentPeriodIndex);
}

export function updateMusicListSave(currentScenarioName: string, currentMusicList: string) {
    return localStorage.setItem(`${currentScenarioName}CurrentMusicList`, currentMusicList);
}

export function createNewSaves(scenarioName: string, startingMusic: string) {
    localStorage.setItem(`${scenarioName}CurrentPeriodIndex`, "0");
    localStorage.setItem(`${scenarioName}CurrentStoryline`, "Historical");
    localStorage.setItem(`${scenarioName}CurrentMusicList`, startingMusic);
}

export function loadSaves(currentScenarioName: string, setInitialData: Function) {
    const currentPeriodIndex = Number(getCurrentPeriodIndex(currentScenarioName));
    const currentMusicList = JSON.parse(String(localStorage.getItem(`${currentScenarioName}CurrentMusicList`)));
    const currentTrack = currentMusicList[0];
    const currentStoryline = String(localStorage.getItem(`${currentScenarioName}CurrentStoryline`));

    setInitialData(currentPeriodIndex, currentMusicList, currentTrack, currentStoryline);
}
