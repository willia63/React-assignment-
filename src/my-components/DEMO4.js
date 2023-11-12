import React, { Component } from 'react';

class Demo4 extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null,
    };
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.setState({ error: "Geolocation is not supported by this browser." });
    }
  }

  showPosition = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  render() {
    return (
      <div>
        <hr />
        <section>
          <h1>Advanced JS: HTML Geolocation - Show the shop location on Google Map</h1>
          <h3>Possibly calculate the distance between user location to shop location</h3>

          <p>Click the button to get your coordinates.</p>
          <button onClick={this.getLocation}>Get current location</button>
          <p>Latitude: {this.state.latitude}</p>
          <p>Longitude: {this.state.longitude}</p>
          {this.state.error && <p>{this.state.error}</p>}
        </section>
      </div>
    );
  }
}

export default Demo4;
