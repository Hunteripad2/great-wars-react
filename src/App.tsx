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
        serverStore: { changeDataLoadStatus, scenariosDataIsLoaded },
        scenarioStore: { setScenariosData, setCountriesData, setStartScreenData },
        resourceMenuStore: { setResourcesData },
    } = useContext(storeContext);

    useEffect(() => {
        loadDataFromServer(changeDataLoadStatus, setScenariosData, setResourcesData, setCountriesData, setStartScreenData);
    }, [changeDataLoadStatus, setScenariosData, setResourcesData, setCountriesData, setStartScreenData]);

    return (
        <div id="app">
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/scenarios" component={ScenariosPage} />
                <Route path="/map" component={scenariosDataIsLoaded ? MapPage : undefined} />
            </Switch>
        </div>
    );
});
