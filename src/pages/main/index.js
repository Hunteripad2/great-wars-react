import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Blackening from '../../components/Blackening.js';
import logo from '../../assets/logo.png'

class MainPage extends React.Component {
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
  			        <button className="menu__option" /*@click="showSettingsMenu"*/>Настройки</button>
  			      </li>
  			    </ul>
  			  </main>
  			  <Blackening />
  			  <ResourceMenu />
  			  <SettingsMenu />
  			</div>
		);
	}
}

function ResourceMenu() {
	return null;
}

function SettingsMenu() {
	return null;
}


export default MainPage;
