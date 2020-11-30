import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Blackening from '../../components/Blackening.js';
import logo from '../../assets/logo.png'
import turnButton from '../../assets/turn_button.png'

class MapPage extends React.Component {
	render() {
		return (
      <div className="mapScreen">
        <header className="header">
          <div className="header__top">
            <div className="header__backgroundLeftImage"></div>
            <div className="header__backgroundRightImage"></div>
            <div className="header__returnToMainPage">
              <Link to="/" className="header__returnToMainPageLink">Главное меню</Link>
            </div>
            <img src={logo} className="header__logo" />
            <MusicPlayer />
          </div>
          <div className="turnCounter">
            <DateCount />
            <button className="turnCounter__button" /*@click="endTurn"*/>
              <img className="turnCounter__image" src={turnButton} />
            </button>
          </div>
        </header>
        <main>
          <div className="mapBackground"></div>
          <div className="map">
            <MapImage />
            <EventIcons />
          </div>
        </main>
        <Blackening />
        <MusicList />
        <EventWindow />
      </div>
		);
	}
}

function MusicPlayer() {
	return null;
}

function DateCount() {
	return null;
}

function MapImage() {
	return null;
}

function EventIcons() {
	return null;
}

function MusicList() {
	return null;
}

function EventWindow() {
	return null;
}


export default MapPage;
