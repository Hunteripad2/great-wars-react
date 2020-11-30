import React from 'react';
import { Link } from "react-router-dom";
import './ScenarioTile.css';

class ScenarioTile extends React.Component {
  render() {
    return (
      <li className="scenarios__item">
        <Link to="/map" className="scenarios__link">
          <img src={this.props.image} className="scenarios__image" />
          <div className="scenarios__blackout">
            <h3 className="scenarios__progress">{this.props.progress}</h3>
            <h2 className="scenarios__name">{this.props.title}</h2>
            <h3 className="scenarios__date">{this.props.date}</h3>
          </div>
        </Link>
      </li>
    );
  }
}

export default ScenarioTile;

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