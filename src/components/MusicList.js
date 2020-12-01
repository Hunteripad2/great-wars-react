import React from 'react';
import './MusicList.css';
import trackAllowed from '../assets/music_player/track_status/allowed.png';
import trackForbidden from '../assets/music_player/track_status/forbidden.png';

class MusicList extends React.Component {
  
  render() {
    const currentMusicList = this.props.currentMusicList.map((track, index) => 
      <li key={track.name} className="musicMenu__item" /*onClick="chooseThisMusic(index)"*/>
        <span className="musicMenu__itemName" style={track.allowed ? {opacity: '1'} : {opacity: '0.2'}}>{track.name}</span>
        <img src={track.allowed ? trackAllowed : trackForbidden} className="musicMenu__itemForbid" /*onClick="forbidMusic(index)"*/ title={track.allowed ? "Запретить воспроизведение" : "Разрешить воспроизведение"} />
      </li>
    );

    return (
      <div className="musicMenu" style={this.props.musicTabIsShown ? {transform: 'translate(0%)'} : {transform: 'translate(100%)'}}>
        <ul className="musicMenu__list">
          {currentMusicList}
        </ul>
      </div>
    );
  }
}
  
export default MusicList;


//import { SET_ACTIVE_MUSIC, CHANGE_MUSIC_STATUS } from '@/store';
//import { mapActions } from 'vuex'
//
//export default {
//  name: "music-list",
//  computed: {
//    currentMusicList() {
//      return this.$store.getters.currentMusicList
//    },
//    playingMusic() {
//      return this.$store.getters.playingMusic;
//    },
//    currentMusicTabStatus() {
//      return this.$store.getters.currentMusicTabStatus;
//    },
//  },
//  methods: {
//    chooseThisMusic(musicIndex) {
//      if (event.target.className === "music-menu__item-forbid") {
//        return 0;
//      }
//      this.setActiveMusic({ newPlayingMusic: this.currentMusicList[musicIndex] });
//    },
//    forbidMusic(musicIndex) {
//      this.changeMusicStatus({ musicIndex });
//    },
//    ...mapActions({
//      setActiveMusic: SET_ACTIVE_MUSIC,
//      changeMusicStatus: CHANGE_MUSIC_STATUS,
//    })
//  },
//};