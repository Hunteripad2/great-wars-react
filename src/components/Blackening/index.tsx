import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

export const Blackening = observer(() => {
    const {
        interfaceStore: { closeTabs, blackeningDisplay },
    } = useContext(storeContext);

    return <div className={styles.blackening} onClick={closeTabs} style={blackeningDisplay} />;
});
