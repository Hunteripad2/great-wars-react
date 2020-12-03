import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Blackening from '../../components/Blackening.js';
import MusicPlayer from '../../components/MusicPlayer.js';
import MusicList from '../../components/MusicList.js';
import EventIcons from '../../components/EventIcons.js';
import EventWindow from '../../components/EventWindow.js';
import scenariosData from '../../utils/scenariosData.js';
import logo from '../../assets/logo.png'
import turnButton from '../../assets/turn_button.png'

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.endTurn = this.endTurn.bind(this);
    this.showMusicMenu = this.showMusicMenu.bind(this);
    this.closeTabs = this.closeTabs.bind(this);
    this.showEvent = this.showEvent.bind(this);
    this.chooseTrackById = this.chooseTrackById.bind(this);
    this.changeMusicStatus = this.changeMusicStatus.bind(this);
    this.playNextMusic = this.playNextMusic.bind(this);
    this.forbidMusicById = this.forbidMusicById.bind(this);
    this.state = {
      musicTabIsShown: false,
      eventIsShown: false,
      musicIsPlaying: false,
      currentScenarioName: document.URL.slice(document.URL.indexOf("?") + 1),
      currentScenario: [],
      currentPeriodIndex: "",
      currentPeriod: {},
      currentMusicList: [],
      currentTrack: {},
      currentStoryline: "",
      currentEvents: [],
      currentEventsBlinking: false,
      currentEventData: {},
    };
  }

  componentDidMount() {
		this.setState((state, props) => ({
      currentScenario: scenariosData[state.currentScenarioName],
      currentPeriodIndex: localStorage.getItem(`${state.currentScenarioName}CurrentPeriodIndex`),
      currentMusicList: JSON.parse(localStorage.getItem(`${state.currentScenarioName}CurrentMusicList`)),
      currentStoryline: localStorage.getItem(`${state.currentScenarioName}CurrentStoryline`),
    }));
    this.setState((state, props) => ({
      currentPeriod: state.currentScenario[state.currentPeriodIndex],
      currentTrack: state.currentMusicList[0],
    }));
    this.setState((state, props) => ({
      currentEvents: state.currentPeriod.events,
    }));
    this.setDraggableMap(document.querySelector(".map"));
    this.timerID = setInterval(() => {
      this.setState({currentEventsBlinking: !this.state.currentEventsBlinking});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setDraggableMap(map) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    document.querySelector("main").onmousedown = grabMap;

    function grabMap(evnt) {
      map.style.cursor = "grabbing";

      evnt = evnt || window.event;
      evnt.preventDefault();

      pos3 = evnt.clientX;
      pos4 = evnt.clientY;

      document.onmouseup = stopDraggingMap;
      document.onmousemove = dragMap;
    }

    function dragMap(evnt) {
      evnt = evnt || window.event;
      evnt.preventDefault();

      pos1 = pos3 - evnt.clientX;
      pos2 = pos4 - evnt.clientY;
      pos3 = evnt.clientX;
      pos4 = evnt.clientY;

      if (map.offsetTop - pos2 > -500 && map.offsetTop - pos2 < 500) {
        map.style.top = (map.offsetTop - pos2) + "px";
      }
      if (map.offsetLeft - pos1 > -500 && map.offsetLeft - pos1 < 500) {
        map.style.left = (map.offsetLeft - pos1) + "px";
      }
    }
      
    function stopDraggingMap() {
        map.style.cursor = "grab";

        document.onmouseup = null;
        document.onmousemove = null;
    }
  }

  endTurn() {
    const currentScenarioName = this.state.currentScenarioName;
    const currentScenario = this.state.currentScenario;
    const currentPeriodIndex = this.state.currentPeriodIndex
    const currentStoryline = this.state.currentStoryline

    for (let i = +currentPeriodIndex + 1; i < currentScenario.length; i += 1) {
      if (currentScenario[i].storyLine.some(storyline => storyline === currentStoryline)) {
        localStorage.setItem(`${currentScenarioName}CurrentPeriodIndex`, i);
        this.setState({
          currentPeriodIndex: i,
          currentPeriod: currentScenario[i],
          currentEvents: currentScenario[i].events,
        });
        break;
      }
    } // else endscreen
  }

  changeMusicStatus() {
    this.setState({musicIsPlaying: !this.state.musicIsPlaying});
  }

  playNextMusic() {
    const currentMusicList = this.state.currentMusicList;
    const currentTrack = this.state.currentTrack;
    let randomIndex;
          
    for (let track of currentMusicList) {
      if (track.allowed && track !== currentTrack) {
        do randomIndex = Math.floor(Math.random() * currentMusicList.length)
        while (!currentMusicList[randomIndex].allowed && currentMusicList[randomIndex] !== currentTrack);
        this.setState({currentTrack: currentMusicList[randomIndex]});
        break;
      }
    }

    this.setState({musicIsPlaying: true});
    document.querySelector("audio").currentTime = 0;
    document.querySelector("audio").play();
  }

  chooseTrackById(e) {
    const trackId = e.target.parentNode.id || e.target.id;
    if (!this.state.currentMusicList[trackId].allowed || e.target.tagName === "IMG") {
      return null;
    }
    this.setState({
      currentTrack: this.state.currentMusicList[trackId],
      musicIsPlaying: true,
    });
    document.querySelector("audio").currentTime = 0;
    document.querySelector("audio").play();
  }

  forbidMusicById(e) {
    const trackId = e.target.parentNode.id;
    const currentMusicList = this.state.currentMusicList;
    currentMusicList[trackId].allowed = !currentMusicList[trackId].allowed;
    this.setState({currentMusicList: currentMusicList});
    localStorage.setItem(`${this.state.currentScenarioName}CurrentMusicList`, JSON.stringify(currentMusicList));
  }

  showMusicMenu() {
    this.setState({musicTabIsShown: true});
  }
  closeTabs() {
    this.setState({musicTabIsShown: false});
    this.setState({eventIsShown: false});
  }

  showEvent(e) {
    const eventId = e.target.parentNode.id || e.target.id;
    this.setState({
      eventIsShown: true,
      currentEventData: this.state.currentEvents[eventId],
    });
    //      event.currentTarget.setAttribute("checked", "");
    //      event.currentTarget.style.opacity = "0.2";
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
            <MusicPlayer showMusicMenu={this.showMusicMenu} changeMusicStatus={this.changeMusicStatus} playNextMusic={this.playNextMusic} musicIsPlaying={this.state.musicIsPlaying} currentTrack={this.state.currentTrack} />
          </div>
          <div className="turnCounter">
            <span className="turnCounter__date">{this.state.currentPeriod.date}</span>
            <button className="turnCounter__button" onClick={this.endTurn}>
              <img className="turnCounter__image" src={turnButton} />
            </button>
          </div>
        </header>
        <main>
          <div className="mapBackground"></div>
          <div className="map">
            <img className="map__map" src={'./maps/' + this.state.currentPeriod.map + ".png"} />
            <EventIcons currentEvents={this.state.currentEvents} currentEventsBlinking={this.state.currentEventsBlinking} showEvent={this.showEvent} />
          </div>
        </main>
        <Blackening musicTabIsShown={this.state.musicTabIsShown} eventIsShown={this.state.eventIsShown} closeTabs={this.closeTabs} />
        <MusicList musicTabIsShown={this.state.musicTabIsShown} currentMusicList={this.state.currentMusicList} chooseTrackById={this.chooseTrackById} forbidMusicById={this.forbidMusicById} />
        <EventWindow eventIsShown={this.state.eventIsShown} currentEventData={this.state.currentEventData} />
      </div>
		);
	}
}

export default MapPage;
