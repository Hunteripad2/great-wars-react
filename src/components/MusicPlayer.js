import React from 'react';
import './MusicPlayer.css';
import playButton from '../assets/music_player/header_buttons/play.png'
import pauseButton from '../assets/music_player/header_buttons/pause.png'
import nextButton from '../assets/music_player/header_buttons/next.png'
import listButton from '../assets/music_player/header_buttons/list.png'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.pauseMusic = this.pauseMusic.bind(this);
    this.playMusic = this.playMusic.bind(this);
  }

  pauseMusic() {
    this.props.changeMusicStatus();
    document.querySelector("audio").pause();
  }
  playMusic() {
    this.props.changeMusicStatus();
    document.querySelector("audio").play();
  }

  render() {
    let playButtonImage;
    if (this.props.musicIsPlaying) {
      playButtonImage = <img className="musicButtons__playImage" src={pauseButton} title="Поставить на паузу" />;
    } else playButtonImage = <img className="musicButtons__playImage" src={playButton} title="Снять с паузы" />;

    return (
      <div className="musicButtons">
        <button className="musicButtons__play" onClick={this.props.musicIsPlaying ? this.pauseMusic : this.playMusic}>
          {playButtonImage}
        </button>
        <button className="musicButtons__next" onClick={this.props.playNextMusic}>
          <img className="musicButtons__nextImage" src={nextButton} title="Следующая композиция" />
        </button>
        <button className="musicButtons__list" onClick={this.props.showMusicMenu}>
          <img className="musicButtons__listImage" src={listButton} title="Список композиций" />
        </button>
        <audio onEnded={this.props.playNextMusic}>
          <source src={'./tracks/' + this.props.currentTrack.src + ".ogg"} type="audio/ogg" />
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