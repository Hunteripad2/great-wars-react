import React from 'react';
import './EventWindow.css';

class EventWindow extends React.Component {  

  render() {
    const currentEventData = this.props.currentEventData;

    return (
      <div className="event" style={this.props.eventIsShown ? {transform: 'scale(1, 1)'} : {transform: 'scale(0, 0)'}}>
        <h1 className="event__name">{currentEventData.name}</h1>
        <img className="event__image" src={'./event_images/' + currentEventData.image + '.jpg'} />
        <p className="event__desc">{currentEventData.desc}</p>
        <button className="event__buttonFirst" /*onClick="chooseEventOption"*/ style={currentEventData.option2 ? {} : {borderTopLeftRadius: "15px", borderTopRightRadius: "15px"}}>{currentEventData.option1}</button>
        {currentEventData.option2 ? <button className="event__buttonSecond" /*onClick="chooseEventOption"*/>{currentEventData.option2}</button> : null}
      </div>
    );
  }
}

export default EventWindow;

//export default {
//  name: "event-window",
//  methods: {
//    chooseEventOption() {
//      console.log("click");
//      //const musicName = event.target.parentNode.getAttribute("musicname");
//      //const musicSrc = event.target.parentNode.getAttribute("musicsrc");
//      //let musicList = JSON.parse(localStorage.getItem(`${currentScenario}MusicList`));
//      //
//      //if (event.target.parentNode.getAttribute("eventtype") === "music" && event.target === document.querySelector('.event__button-second')) {
//      //  document.querySelector('.music-menu').insertAdjacentHTML('beforeend', `<li class="music-menu__item" onclick="chooseThisMusic()"><span class="music-menu__item-name">${musicName}</span><audio class="inactive-music" onended="playNextMusic()"><source src="${musicSrc}" type="audio/ogg"></audio><img src="forbid-music-unckecked.png" class="music-menu__item-forbid" onclick="forbidMusic()" title="Запретить воспроизведение"></li>`);
//      //
//      //  musicList.push({name: musicName, src: musicSrc});
//      //  localStorage.setItem(`${currentScenario}MusicList`, JSON.stringify(musicList));
//      //}
//  
//      //closeTabs();
//    },
//  }
//};