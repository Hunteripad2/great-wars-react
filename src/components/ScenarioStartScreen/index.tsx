import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const clickTooltip = "Нажмите, чтобы начать";

export const ScenarioStartScreen = observer(() => {
    const {
        interfaceStore: { closeStartScreen, startScreenDisplay },
        scenarioStore: { currentStartScreenData },
    } = useContext(storeContext);

    const startScreenTitle = currentStartScreenData[0].title;
    const startScreenDesc = currentStartScreenData[0].desc;

    return (
        <div className={styles.startScreen} style={startScreenDisplay} onClick={closeStartScreen}>
            <h1 className={styles.title}>{startScreenTitle}</h1>
            <p className={styles.desc}>{startScreenDesc}</p>
            <p className={styles.tooltip}>{clickTooltip}</p>
        </div>
    );
});
