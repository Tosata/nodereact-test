/*global google*/
import React, {Component} from 'react';
import './App.css';
import {compose, withProps} from 'recompose';
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";

const {InfoBox} = require("react-google-maps/lib/components/addons/InfoBox");


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAK73U9fYt7qzTW6rrWYWqO0n-mUAAmH70&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `80%`}}/>,
        containerElement: <div style={{height: `500px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props: any) =>
    <GoogleMap defaultZoom={13}
               defaultCenter={{lat: 60.4518, lng: 22.2666}}>
        {Object.keys(props).map(key => (
            <InfoBox defaultPosition={new google.maps.LatLng(props[key].lat, props[key].lon)}
                     options={{closeBoxURL: ``, enableEventPropagation: true}}>
                <div style={{
                    backgroundColor: props[key].color,
                    opacity: 0.75,
                    padding: '8px',
                    borderRadius: `50%`,
                    border: `solid 2px darkgreen`
                }}>
                    <div style={{fontSize: `16px`}}>
                        {props[key].bikes_avail}
                    </div>
                </div>
            </InfoBox>
        ))}
    </GoogleMap>
);

class App extends React.PureComponent<IState> {
    state: IState = {response: []};

    componentDidMount() {
        this.updateRacks();
    };

    refresh = () => {
        this.updateRacks();
    };

    filter = () => {
        this.setState({response: this.state.response.filter(rack => rack.bikes_avail > 5)});
    };

    updateRacks() {
        fetch('/api/bikes').then(res => {
            res.json().then(json => {
                console.log(json.express);
                if (json.express !== null) {
                    this.setState({response: json.express})
                }
            })
        });
    }

    render() {
        return (
            <div className="App">
                <MyMapComponent {...this.state.response} />
                {/*<JsonTable rows={this.state.response} />*/}
                <button onClick={this.refresh}>Refresh</button>
                <button onClick={this.filter}>Filter</button>
            </div>
        );
    }
}

class Rack {
    name: string;
    bikes_avail: number;
    lon: number;
    lat: number;
    color: string;

    constructor(name: string, bikes_avail: number, lon: number, lat: number, color: string) {
        this.name = name;
        this.bikes_avail = bikes_avail;
        this.lon = lon;
        this.lat = lat;
        this.color = color;
    }
}

interface IState {
    response: Rack[];
}

export default App;
