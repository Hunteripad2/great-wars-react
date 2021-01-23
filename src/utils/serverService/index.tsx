function getServerUrl() {
    const hostname = window.location.hostname;
    const isLocalClient = hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0";

    const localServer = "http://localhost:3001/";
    const herokuServer = "https://sleepy-waters-99292.herokuapp.com/";

    return isLocalClient ? localServer : herokuServer;
}

export function loadDataFromServer(dataIsLoaded: boolean, changeDataLoadStatus: Function, setScenariosData: Function, setResourcesData: Function, setCountriesData: Function) {
    const serverUrl = getServerUrl();

    if (!dataIsLoaded) {
        fetch(serverUrl + "scenariosData")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setScenariosData(data);
            });
        fetch(serverUrl + "resourcesData")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setResourcesData(data);
            });
        fetch(serverUrl + "countriesData")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCountriesData(data);
            })
            .then(() => {
                changeDataLoadStatus(true);
            });
    }
}
