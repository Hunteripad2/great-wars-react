import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { storeContext } from "../../storage/RootStore";
import styles from "./styles.module.scss";
import { Resources } from "../Resources";

export const ResourceMenu = observer(() => {
    const {
        serverStore: { resourcesDataIsLoaded },
        interfaceStore: { resourceMenuDisplay },
        resourceMenuStore: { booksCategoryStyle, chooseBooksCategory, articlesCategoryStyle, chooseArticlesCategory, filmsCategoryStyle, chooseFilmsCategory, headerDisplay },
    } = useContext(storeContext);

    return (
        <div className={styles.resourceMenu} style={resourceMenuDisplay}>
            <ul className={styles.categories}>
                <li className={styles.option}>
                    <button className={styles.button} style={booksCategoryStyle} onClick={chooseBooksCategory}>
                        Книги
                    </button>
                </li>
                <li className={styles.option}>
                    <button className={styles.button} style={articlesCategoryStyle} onClick={chooseArticlesCategory}>
                        Статьи
                    </button>
                </li>
                <li className={styles.option}>
                    <button className={styles.button} style={filmsCategoryStyle} onClick={chooseFilmsCategory}>
                        Фильмы
                    </button>
                </li>
            </ul>
            {resourcesDataIsLoaded ? <Resources /> : null}
            <h1 className={styles.chooseCategoryHeader} style={headerDisplay}>
                Выберите раздел
            </h1>
        </div>
    );
});
