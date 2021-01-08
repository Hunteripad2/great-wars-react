import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import State from "../../storage";

export const Blackening = observer(() => {
    const state = useContext(State);

    return <div className={styles.blackening} onClick={state.closeTabs} style={state.blackeningStyle} />;
});
