import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Blackening from '../../components/Blackening.js';
import MusicPlayer from '../../components/MusicPlayer.js';
import MusicList from '../../components/MusicList.js';
import scenariosData from '../../utils/scenariosData.js';
import logo from '../../assets/logo.png'
import turnButton from '../../assets/turn_button.png'

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.showMusicMenu = this.showMusicMenu.bind(this);
    this.closeTabs = this.closeTabs.bind(this);
    this.state = {
      musicTabIsShown: false,
      currentScenarioName: document.URL.slice(document.URL.indexOf("?") + 1),
      currentPeriodIndex: "",
      currentMusicList: [],
      currentStoryline: "",
      initialMusic: {},
    };
  }

  componentDidMount() {
		this.setState((state, props) => ({
      currentPeriodIndex: localStorage.getItem(`${state.currentScenarioName}CurrentPeriodIndex`),
      currentMusicList: JSON.parse(localStorage.getItem(`${state.currentScenarioName}CurrentMusicList`)),
      currentStoryline: localStorage.getItem(`${state.currentScenarioName}CurrentStoryline`),
    }));
    this.setState((state, props) => ({
      initialMusic: state.currentMusicList[0],
    }));
  }

  showMusicMenu() {
    this.setState({musicTabIsShown: true});
  }
  closeTabs() {
    this.setState({musicTabIsShown: false});
  }

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
            <MusicPlayer showMusicMenu={this.showMusicMenu} />
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
        <Blackening musicTabIsShown={this.state.musicTabIsShown} closeTabs={this.closeTabs} />
        <MusicList musicTabIsShown={this.state.musicTabIsShown} currentMusicList={this.state.currentMusicList} />
        <EventWindow />
      </div>
		);
	}
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

function EventWindow() {
	return null;
}


export default MapPage;
