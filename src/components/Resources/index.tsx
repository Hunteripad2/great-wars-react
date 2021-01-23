import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { storeContext } from "../../storage/RootStore";
import styles from "./styles.module.scss";

export const Resources = observer(() => {
    const {
        resourceMenuStore: { resourcesDisplay, currentResourceList },
    } = useContext(storeContext);

    function showResource(resourceId: number) {
        // TODO: доделать всплывающее окно
        return null;
    }

    const resourceListFirstRow = currentResourceList.map((resource, index) => {
        if (index % 2 === 0) {
            return (
                <td key={resource.name} className={styles.option}>
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
                <td key={resource.name} className={styles.option}>
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
