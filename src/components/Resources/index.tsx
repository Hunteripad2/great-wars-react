import { useContext } from "react";
import { observer } from "mobx-react-lite";
import State from "../../storage";
import styles from "./styles.module.scss";

export const Resources = observer(() => {
    const state = useContext(State);

    function showResource(resourceId: number) {
        // TODO: доделать всплывающее окно
        return null;
    }

    const resourceListFirstRow = state.currentResourceList.map((resource, index) => {
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

    const resourceListSecondRow = state.currentResourceList.map((resource, index) => {
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
        <table className={styles.resources} style={state.resourcesStyle}>
            <tr className={styles.row}>{resourceListFirstRow}</tr>
            <tr className={styles.row}>{resourceListSecondRow}</tr>
        </table>
    );
});
