/*global google*/
import React, { Component } from 'react';
import './App.css';
import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAK73U9fYt7qzTW6rrWYWqO0n-mUAAmH70&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `80%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props: any) =>
  <GoogleMap defaultZoom={13}
             defaultCenter={{ lat: 60.4518, lng: 22.2666 }}>
    {Object.keys(props.markers).map(key => (
        <InfoBox defaultPosition={new google.maps.LatLng(props.markers[key].lat, props.markers[key].lon)}
                  options={{ closeBoxURL: ``, enableEventPropagation: true }}>
          <div style={{ backgroundColor: props.markers[key].color, opacity: 0.75, padding: '8px', borderRadius: `50%`, border: `solid 2px darkgreen` }}>
            <div style={{ fontSize: `16px`}}>
              {props.markers[key].bikes_avail}
            </div>
          </div>
        </InfoBox>
    ))}
  </GoogleMap>
);

class App extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));

    fetch('/api/bikes').then( res => {
      res.json().then(json => {
        this.setState({response: json.express})
      })
      // console.log(res.json());
      // this.setState({response: res.json()});
    });
  };

  callApiSync() {
    fetch('/api/bikes').then( response => {
      return response.body;
    })
  }

  callApi = async () => {
    const response = await fetch('/api/bikes');
    const body = await response.json();
    console.log(body.express);
    console.log(typeof body.express);
    for (let x in body.express){
      console.log('Pyörä: ', x);
    }

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <MyMapComponent isMarkerShown markers={this.state.response} />
        {/*<JsonTable rows={this.state.response} />*/}
      </div>
    );
  }
}

export default App;
