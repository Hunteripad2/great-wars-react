import React from 'react';
import { Link } from "react-router-dom";
import './ScenarioTile.css';

class ScenarioTile extends React.Component {
  render() {
    return (
      <li className="scenarios__item">
        <Link to={"/map?" + this.props.scenarioName} className="scenarios__link">
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