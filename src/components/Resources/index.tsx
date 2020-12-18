import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import State from '../../storage';
import styles from './styles.module.scss';

const currentResourceList = [{name: "Ресурс 1", desc: "", image: ""}, {name: "Ресурс 2", desc: "", image: ""}, {name: "Ресурс 3", desc: "", image: ""}]

const Resources = observer(() => {
	const state = useContext(State);

	function showResource(resourceId: number) {
		return null;
	}

	const resourceList = currentResourceList.map((resource, index) =>
		<li key={resource.name} className={styles.option} onClick={() => showResource(index)}>
			<span className={styles.name}>{resource.name}</span>
		</li>
	);

	//const resourceListSecondRow = currentResourceList.map((resource, index) => {
	//	if (Number((index / 2).toFixed()) !== 0) {
	//		return (
	//			<td key={resource.name} className={styles.option} onClick={() => showResource(index)}>
	//				<span className={styles.name}>{resource.name}</span>
	//			</td>
	//		);
	//	} else return null;
	//});

	return (
		<ul className={styles.resources} style={state.resourcesStyle}>
			{resourceList}
		</ul>
	);
});

export default Resources;
