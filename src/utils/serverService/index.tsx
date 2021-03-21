function getServerUrl() {
    const hostname = window.location.hostname;
    const isLocalClient = hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0";

    const localServer = "http://localhost:3001/";
    const herokuServer = "https://sleepy-waters-99292.herokuapp.com/";

    return isLocalClient ? localServer : herokuServer;
}

export function loadDataFromServer(changeDataLoadStatus: Function, setScenariosData: Function, setResourcesData: Function, setCountriesData: Function, setStartScreenData: Function) {
    const serverUrl = getServerUrl();

    fetch(serverUrl + "resourcesData")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setResourcesData(data);
        })
        .then(() => {
            changeDataLoadStatus("resources", true);
        });
    fetch(serverUrl + "scenariosData")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setScenariosData(data);
        })
        .then(() => {
            changeDataLoadStatus("scenarios", true);
        });
    fetch(serverUrl + "countriesData")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setCountriesData(data);
        })
        .then(() => {
            changeDataLoadStatus("countries", true);
        });
    fetch(serverUrl + "startScreenData")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setStartScreenData(data);
        })
        .then(() => {
            changeDataLoadStatus("startScreens", true);
        });
}
