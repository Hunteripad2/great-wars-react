import React from 'react';
import './MusicPlayer.css';
import playButton from '../assets/music_player/header_buttons/play.png'
import pauseButton from '../assets/music_player/header_buttons/pause.png'
import nextButton from '../assets/music_player/header_buttons/next.png'
import listButton from '../assets/music_player/header_buttons/list.png'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playCurrentMusic = this.playCurrentMusic.bind(this);
    this.playNextMusic = this.playNextMusic.bind(this);
    this.state = {
      musicIsPlaying: true,
    };
  }

  playCurrentMusic() {
    this.setState({musicIsPlaying: !this.state.musicIsPlaying});
    //      if (this.currentMusicPlayStatus) {
    //        document.querySelector("audio").pause();
    //      } else document.querySelector("audio").play();
  }

  playNextMusic() {
    this.setState({musicIsPlaying: true});
    //      const currentMusicList = this.currentMusicList;
    //      const playingMusic = this.playingMusic;
    //
    //      for (let music of currentMusicList) {
    //        if (music.status === "allowed" && music !== playingMusic) {
    //          let randomIndex = Math.floor(Math.random() * currentMusicList.length);
    //          while (currentMusicList[randomIndex].status !== "allowed" && currentMusicList[randomIndex] !== playingMusic) {
    //            randomIndex = Math.floor(Math.random() * currentMusicList.length);
    //          }
    //          this.setActiveMusic({ newPlayingMusic: currentMusicList[randomIndex] });
    //          break;
    //        }
    //      }
  }

  render() {
    let buttonImage;
    if (this.state.musicIsPlaying) {
      buttonImage = <img className="musicButtons__playImage" src={pauseButton} title="Поставить на паузу" />;
    } else buttonImage = <img className="musicButtons__playImage" src={playButton} title="Снять с паузы" />;

    return (
      <div className="musicButtons">
        <button className="musicButtons__play" onClick={this.playCurrentMusic}>
          {buttonImage}
        </button>
        <button className="musicButtons__next" onClick={this.playNextMusic}>
          <img className="musicButtons__nextImage" src={nextButton} title="Следующая композиция" />
        </button>
        <button className="musicButtons__list" onClick={this.props.showMusicMenu}>
          <img className="musicButtons__listImage" src={listButton} title="Список композиций" />
        </button>
        <audio /*@ended="playNextMusic"*/>
          <source /*src={playingMusic.src}*/ type="audio/ogg" />
        </audio>
      </div>
    );
  }
}
  
export default MusicPlayer;

//<script>
//import { SHOW_MUSIC_MENU, CHANGE_MUSIC_PLAY_STATUS, SET_ACTIVE_MUSIC, SET_PREVIOUS_MUSIC } from '@/store';
//import { mapActions } from 'vuex'
//
//export default {
//  name: "music-player",
//  computed: {
//    playingMusic() {
//      return this.$store.getters.playingMusic;
//    },
//    previousMusic() {
//      return this.$store.getters.previousMusic;
//    },
//    currentMusicList() {
//      return this.$store.getters.currentMusicList
//    },
//    currentMusicPlayStatus() {
//      return this.$store.getters.currentMusicPlayStatus
//    },
//  },
//  methods: {
//    
//    
//    ...mapActions({
//      showMusicMenu: SHOW_MUSIC_MENU,
//      changeMusicPlayStatus: CHANGE_MUSIC_PLAY_STATUS,
//      setActiveMusic: SET_ACTIVE_MUSIC,
//      setPreviuosMusic: SET_PREVIOUS_MUSIC,
//    })
//  },
//  updated() {
//    if (this.playingMusic !== this.previousMusic) {
//      document.querySelector("audio").currentTime = 0;
//      if (!this.currentMusicPlayStatus) {
//        this.changeMusicPlayStatus();
//      }
//      document.querySelector("audio").play();
//      this.setPreviuosMusic();
//    }
//    console.log('done');
//  }
//};
//</script>