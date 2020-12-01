import React from 'react';
import './SettingsMenu.css';
import scenariosData from '../utils/scenariosData.js';

class SettingsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.resetProgressFirst = this.resetProgressFirst.bind(this);
    this.resetProgressSecond = this.resetProgressSecond.bind(this);
    this.resetProgressThird = this.resetProgressThird.bind(this);
  }

  resetProgressFirst() {
		if (window.confirm("Все связанные с первым сценарием данные будут удалены")) {
      localStorage.setItem(`scenarioFirstCurrentPeriodIndex`, 0);
      localStorage.setItem(`scenarioFirstCurrentStoryline`, "Historical");
      localStorage.setItem(`scenarioFirstCurrentMusicList`, JSON.stringify(scenariosData.scenarioFirst[0].startingMusic));
      alert("Прогресс первого сценария сброшен");
    }
  }
  resetProgressSecond() {
    if (window.confirm("Все связанные со вторым сценарием данные будут удалены")) {
      localStorage.setItem(`scenarioSecondCurrentPeriodIndex`, 0);
      localStorage.setItem(`scenarioSecondCurrentStoryline`, "Historical");
      localStorage.setItem(`scenarioSecondCurrentMusicList`, JSON.stringify(scenariosData.scenarioSecond[0].startingMusic));
      alert("Прогресс второго сценария сброшен");
    }
  }
  resetProgressThird() {
    if (window.confirm("Все связанные с третьим сценарием данные будут удалены")) {
      localStorage.setItem(`scenarioThirdCurrentPeriodIndex`, 0);
      localStorage.setItem(`scenarioThirdCurrentStoryline`, "Historical");
      localStorage.setItem(`scenarioThirdCurrentMusicList`, JSON.stringify(scenariosData.scenarioThird[0].startingMusic));
      alert("Прогресс третьего сценария сброшен");
    }
  }

  render() {
		return (
      <div className="settingsMenu" style={this.props.settingsTabIsShown ? {transform: 'scale(1, 1)'} : {transform: 'scale(0, 0)'}}>
        <ul className="settingsMenu__progressList">
          <li className="settingsMenu__progressItem">
            <button className="settingsMenu__progressButton" onClick={this.resetProgressFirst}>Сбросить прогресс первого сценария</button>
          </li>
          <li className="settingsMenu__progressItem">
            <button className="settingsMenu__progressButton" onClick={this.resetProgressSecond}>Сбросить прогресс второго сценария</button>
          </li>
          <li className="settingsMenu__progressItem">
            <button className="settingsMenu__progressButton" onClick={this.resetProgressThird}>Сбросить прогресс третьего сценария</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SettingsMenu;
