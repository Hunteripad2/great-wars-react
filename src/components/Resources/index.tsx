import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";
import { storeContext } from "../../storage/RootStore";

export const Resources = observer(() => {
    const {
        resourceMenuStore: { resourcesDisplay, currentResourceList, setCurrentResourceData },
        interfaceStore: { showResourceWindow },
    } = useContext(storeContext);

    function showResource(resourceId: number) {
        setCurrentResourceData(resourceId);
        showResourceWindow();
    }

    const resourceListFirstRow = currentResourceList.map((resource, index) => {
        if (index % 2 === 0) {
            return (
                <td key={uuidv4()} className={styles.option}>
                    <button className={styles.button} onClick={() => showResource(index)}>
                        {resource.name}
                    </button>
                </td>
            );
        } else return null;
    });

    const resourceListSecondRow = currentResourceList.map((resource, index) => {
        if (index % 2 !== 0) {
            return (
                <td key={uuidv4()} className={styles.option}>
                    <button className={styles.button} onClick={() => showResource(index)}>
                        {resource.name}
                    </button>
                </td>
            );
        } else return null;
    });

    return (
        <table className={styles.resources} style={resourcesDisplay}>
            <tr className={styles.row}>{resourceListFirstRow}</tr>
            <tr className={styles.row}>{resourceListSecondRow}</tr>
        </table>
    );
});
