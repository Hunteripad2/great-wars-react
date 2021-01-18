import { useContext } from "react";
import { observer } from "mobx-react-lite";
import State from "../../storage";
import styles from "./styles.module.scss";
import { Resources } from "../Resources";

export const ResourceMenu = observer(() => {
    const { resourceMenuStyle, booksCategoryStyle, chooseBooksCategory, articlesCategoryStyle, chooseArticlesCategory, filmsCategoryStyle, chooseFilmsCategory, headerStyle } = useContext(State);

    return (
        <div className={styles.resourceMenu} style={resourceMenuStyle}>
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
            <Resources />
            <h1 className={styles.chooseCategoryHeader} style={headerStyle}>
                Выберите раздел
            </h1>
        </div>
    );
});
