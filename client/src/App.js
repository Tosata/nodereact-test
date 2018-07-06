/*global google*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Circle } from "react-google-maps";
import { compose, withProps } from "recompose";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const JsonTable = require('ts-react-json-table');

var box = [];

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAK73U9fYt7qzTW6rrWYWqO0n-mUAAmH70&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 60.4518, lng: 22.2666 }}
  >
    {Object.keys(props.markers).map(key => (
        <InfoBox

                  defaultPosition={new google.maps.LatLng(props.markers[key].lat, props.markers[key].lon)}
                  options={{ closeBoxURL: ``, enableEventPropagation: true }}
                >
                  <div style={{ backgroundColor: props.markers[key].color, opacity: 0.75, padding: '8px', borderRadius: `50%`, border: `solid 2px darkgreen` }}>
                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                      {props.markers[key].bikes_avail}
                    </div>
                  </div>
                </InfoBox>
    ))}
    

    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

class App extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api/bikes');
    const body = await response.json();
    console.log(body.express);
    console.log(typeof body.express);
    for (var x in body.express){
      console.log('Pyörä: ', x);
    }

    if (response.status !== 200) throw Error(body.message);

    return body;
  };



  render() {
    return (

      <div className="App">
        
        
        <MyMapComponent isMarkerShown
                        markers={this.state.response} />

         

        <JsonTable rows={this.state.response} />
        
      </div>
    );
  }
}


export default App;
