import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // TODO: hash router
import "./styles.scss";
import { App } from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
