import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import State from '../../storage';
import styles from './styles.module.scss';
import Resources from '../Resources';

const ResourceMenu = observer(() => {
	const state = useContext(State);

	return (
		<div className={styles.resourceMenu} style={state.resourceMenuStyle}>
			<ul className={styles.categories}>
				<li className={styles.option}>
					<button className={styles.button} style={state.booksCategoryStyle} onClick={state.chooseBooksCategory}>Книги</button>
				</li>
				<li className={styles.option}>
					<button className={styles.button} style={state.articlesCategoryStyle} onClick={state.chooseArticlesCategory}>Статьи</button>
				</li>
				<li className={styles.option}>
					<button className={styles.button} style={state.filmsCategoryStyle} onClick={state.chooseFilmsCategory}>Фильмы</button>
				</li>
			</ul>
			<Resources />
			<h1 className={styles.chooseCategoryHeader} style={state.headerStyle}>Выберите раздел</h1>
		</div>
	);
});

export default ResourceMenu;
