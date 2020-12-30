import { useContext } from 'react';
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss';
import State from '../../storage';

const CountryFlags = observer(() => {
	const state = useContext(State);

	const showCountry = (countryId : number) => (e : React.MouseEvent<HTMLButtonElement>) => {
		//state.checkEvent(eventId);
		//state.setEventData(eventId);
		//state.showEventWindow();
		console.log("click");
	}

	const countryFlags = state.currentCountryList.map((country, index) => 
		<button key={country.name} className={styles.button} style={{left: `${country.positionX}`, top: `${country.positionY}`}} onClick={showCountry(index)}>
			<img src={'./country_icons/' + country.icon + ".png"} className={styles.image} alt="Страна" />
		</button>
	);

	return (
		<div className={styles.countryFlags}>
			{countryFlags}
		</div>
	);
});

export default CountryFlags;
