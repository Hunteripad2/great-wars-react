import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import State from "./storage";
import { MainPage } from "./pages/main";
import { ScenariosPage } from "./pages/scenarios";
import { MapPage } from "./pages/map";

// TODO: Unit tests - jest?
// TODO: Firebase?

export const App = observer(() => {
    const state = useContext(State);

    useEffect(() => {
        state.loadData();
    });

    return (
        <div id="app">
            {state.dataIsLoaded ? (
                <Switch>
                    <Route path="/map" component={MapPage} />
                    <Route path="/scenarios" component={ScenariosPage} />
                    <Route exact path="/" component={MainPage} />
                </Switch>
            ) : null}
        </div>
    );
});
