export function getCurrentPeriodIndex(scenarioName: string) {
    return localStorage.getItem(`${scenarioName}CurrentPeriodIndex`);
}
export function getCurrentMusicList(scenarioName: string) {
    return localStorage.getItem(`${scenarioName}CurrentMusicList`);
}

export function setPeriodIndexToZero(scenarioName: string) {
    localStorage.setItem(`${scenarioName}CurrentPeriodIndex`, "0");
}
export function setStorylineToHistorical(scenarioName: string) {
    localStorage.setItem(`${scenarioName}CurrentStoryline`, "Historical");
}
export function setInitialMusicList(scenarioName: string, initialMusicList: string) {
    localStorage.setItem(`${scenarioName}CurrentMusicList`, initialMusicList);
}
