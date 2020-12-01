import React from 'react';
import './Blackening.css';

class Blackening extends React.Component {
  render() {
    let blackeningStyle;
    if (this.props.musicTabIsShown || this.props.settingsTabIsShown) {
      blackeningStyle = {opacity: '0.8', transform: 'translate(0%)'};
    } else blackeningStyle = {opacity: '0', transform: 'translate(100%)'};

    return (
      <div className="blackening" onClick={this.props.closeTabs} style={blackeningStyle} />
    );
  }
}

export default Blackening;

//<script>
//import { CLOSE_TABS } from '@/store';
//import { mapActions } from 'vuex'
//
//export default {
//  name: "blackening",
//  computed: {
//    currentSettingsTabStatus() {
//      return this.$store.getters.currentSettingsTabStatus;
//    },
//    currentResourceTabStatus() {
//      return this.$store.getters.currentResourceTabStatus;
//    },
//    currentMusicTabStatus() {
//      return this.$store.getters.currentMusicTabStatus;
//    },
//    currentEventTabStatus() {
//      return this.$store.getters.currentEventTabStatus;
//    },
//    blackeningStatus() {
//      if (this.currentSettingsTabStatus || this.currentResourceTabStatus || this.currentMusicTabStatus || this.currentEventTabStatus) {
//        return 'opacity: 0.8; transform: translate(0%)'; 
//      } else return 'opacity: 0; transform: translate(100%)';
//    },
//  },
//  methods: {
//    ...mapActions({
//      closeTabs: CLOSE_TABS
//    })
//  }
//};
//</script>