import { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

const currentResourceImageTitle = "Изображение ресурса";
const currentResourceOption = "Закрыть";

export const ResourceWindow = observer(() => {
    const {
        resourceMenuStore: { currentResourceData },
        interfaceStore: { resourceWindowDisplay, closeTabs },
    } = useContext(storeContext);

    const currentResourceName = currentResourceData.name;
    const currentResourceDesc = currentResourceData.desc;
    const currentResourceImageSrc = "./images/event_images/" + currentResourceData.image + ".jpg";

    return (
        <div className={styles.resourceWindow} style={resourceWindowDisplay}>
            <h1 className={styles.name}>{currentResourceName}</h1>
            <img className={styles.image} src={currentResourceImageSrc} alt={currentResourceImageTitle} />
            <p className={styles.desc}>{currentResourceDesc}</p>
            <button className={styles.option} onClick={closeTabs}>
                {currentResourceOption}
            </button>
        </div>
    );
});
