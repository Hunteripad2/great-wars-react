import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Blackening from '../../components/Blackening.js';
import SettingsMenu from '../../components/SettingsMenu.js';
import scenariosData from '../../utils/scenariosData.js';
import logo from '../../assets/logo.png'

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.showSettingsMenu = this.showSettingsMenu.bind(this);
		this.closeTabs = this.closeTabs.bind(this);
		this.state = {
		  settingsTabIsShown: false,
		};
	}

	componentDidMount() {
		if (!localStorage.getItem(`scenarioFirstCurrentPeriodIndex`)) {
		  localStorage.setItem(`scenarioFirstCurrentPeriodIndex`, "0");
		  localStorage.setItem(`scenarioFirstCurrentStoryline`, "Historical");
		  localStorage.setItem(`scenarioFirstCurrentMusicList`, JSON.stringify(scenariosData.scenarioFirst[0].startingMusic));
		}
		if (!localStorage.getItem(`scenarioSecondCurrentPeriodIndex`)) {
		  localStorage.setItem(`scenarioSecondCurrentPeriodIndex`, "0");
		  localStorage.setItem(`scenarioSecondCurrentStoryline`, "Historical");
		  localStorage.setItem(`scenarioSecondCurrentMusicList`, JSON.stringify(scenariosData.scenarioSecond[0].startingMusic));
		}
		if (!localStorage.getItem(`scenarioThirdCurrentPeriodIndex`)) {
		  localStorage.setItem(`scenarioThirdCurrentPeriodIndex`, "0");
		  localStorage.setItem(`scenarioThirdCurrentStoryline`, "Historical");
		  localStorage.setItem(`scenarioThirdCurrentMusicList`, JSON.stringify(scenariosData.scenarioThird[0].startingMusic));
		}
	}

	showSettingsMenu() {
		this.setState({settingsTabIsShown: true});
	}
	closeTabs() {
		this.setState({settingsTabIsShown: false});
	}

	render() {
		return (
			<div className="mainMenu">
  			  <main>
  			    <img src={logo} className="logo" />
  			    <ul className="menu">
  			      <li className="menu__item">
  			        <Link to="/scenarios" className="menu__option">Начать</Link>
  			      </li>
  			      <li className="menu__item">
  			        <button className="menu__option" /*@click="showResourceMenu"*/>Ресурсы</button>
  			      </li>
  			      <li className="menu__item">
  			        <button className="menu__option" onClick={this.showSettingsMenu}>Настройки</button>
  			      </li>
  			    </ul>
  			  </main>
  			  <Blackening settingsTabIsShown={this.state.settingsTabIsShown} closeTabs={this.closeTabs} />
  			  <ResourceMenu />
  			  <SettingsMenu settingsTabIsShown={this.state.settingsTabIsShown} />
  			</div>
		);
	}
}

function ResourceMenu() {
	return null;
}


export default MainPage;
