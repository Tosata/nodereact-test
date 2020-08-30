"use strict";
// import React from 'react';
// import './App.css';
// import {compose, withProps} from 'recompose';
// import {GoogleMap, withGoogleMap, withScriptjs, OverlayView} from "react-google-maps";
//
// const {InfoBox} = require("react-google-maps/lib/components/addons/InfoBox");
//
//
// const GoogleMapComponent = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAK73U9fYt7qzTW6rrWYWqO0n-mUAAmH70&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{height: `80%`}}/>,
//         containerElement: <div style={{height: `500px`}}/>,
//         mapElement: <div style={{height: `100%`}}/>,
//     }),
//     withScriptjs,
//     withGoogleMap
// )((props: any) =>
//     <GoogleMap defaultZoom={13}
//                defaultCenter={{lat: 60.4518, lng: 22.2666}}>
//         {Object.keys(props.markers).map(key => (
//             <InfoBox defaultPosition={new google.maps.LatLng(props.markers[key].lat, props.markers[key].lon)}
//                      options={{closeBoxURL: ``, enableEventPropagation: true}}>
//                 <div style={{
//                     backgroundColor: props.markers[key].color,
//                     opacity: 0.75,
//                     padding: '8px',
//                     borderRadius: `50%`,
//                     border: `solid 2px darkgreen`
//                 }}>
//                     <div style={{fontSize: `16px`}}>
//                         {props.markers[key].bikes_avail}
//                     </div>
//                 </div>
//             </InfoBox>
//         ))}
//     </GoogleMap>
// );
//
// class MapComponent extends React.Component {
//
//     constructor(props: any) {
//         super(props);
//         this.state = props;
//     }
//
//     render(): React.ReactNode {
//         return (
//             <div id="my-map-container">
//                 <GoogleMapComponent />
//             </div>
//         );
//
//     }
// }
//
// export default MapComponent;
