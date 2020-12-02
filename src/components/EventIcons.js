import React from 'react';
import './EventIcons.css';

class EventIcons extends React.Component {

  render() {
    const currentEvents = this.props.currentEvents.map((event, index) => 
      <button key={event.name} className="map__eventButton" style={{left: `${event.positionX}`, top: `${event.positionY}`}} onClick={this.props.showEvent} id={index} >
        <img src={'./event_icons/' + event.icon + ".png"} className="map__eventIconImage" style={this.props.currentEventsBlinking ? {opacity: "0.4"} : {opacity: "1"}} />
      </button>
    );

		return (
      <div className="map__eventIcons">
        {currentEvents}
      </div>
    );
  }
}

export default EventIcons;
