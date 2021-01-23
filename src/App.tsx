import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import { storeContext } from "./storage/RootStore";
import { MainPage } from "./pages/main";
import { ScenariosPage } from "./pages/scenarios";
import { MapPage } from "./pages/map";
import { loadDataFromServer } from "./utils/serverService";

// TODO: Unit tests - jest?
// TODO: Firebase?

export const App = observer(() => {
    const {
        serverStore: { dataIsLoaded, changeDataLoadStatus },
        scenarioStore: { setScenariosData, setCountriesData },
        resourceMenuStore: { setResourcesData },
    } = useContext(storeContext);

    useEffect(() => {
        loadDataFromServer(dataIsLoaded, changeDataLoadStatus, setScenariosData, setResourcesData, setCountriesData);
    }, [dataIsLoaded, changeDataLoadStatus, setScenariosData, setResourcesData, setCountriesData]);

    return (
        <div id="app">
            {dataIsLoaded ? (
                <Switch>
                    <Route path="/map" component={MapPage} />
                    <Route path="/scenarios" component={ScenariosPage} />
                    <Route exact path="/" component={MainPage} />
                </Switch>
            ) : null}
        </div>
    );
});
