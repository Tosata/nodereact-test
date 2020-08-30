"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*global google*/
var react_1 = __importDefault(require("react"));
require("./App.css");
var recompose_1 = require("recompose");
var react_google_maps_1 = require("react-google-maps");
var InfoBox = require("react-google-maps/lib/components/addons/InfoBox").InfoBox;
var MyMapComponent = recompose_1.compose(recompose_1.withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAK73U9fYt7qzTW6rrWYWqO0n-mUAAmH70&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: react_1.default.createElement("div", { style: { height: "80%" } }),
    containerElement: react_1.default.createElement("div", { style: { height: "500px" } }),
    mapElement: react_1.default.createElement("div", { style: { height: "100%" } }),
}), react_google_maps_1.withScriptjs, react_google_maps_1.withGoogleMap)(function (props) {
    return react_1.default.createElement(react_google_maps_1.GoogleMap, { defaultZoom: 13, defaultCenter: { lat: 60.4518, lng: 22.2666 } }, Object.keys(props).map(function (key) { return (react_1.default.createElement(InfoBox, { defaultPosition: new google.maps.LatLng(props[key].lat, props[key].lon), options: { closeBoxURL: "", enableEventPropagation: true } },
        react_1.default.createElement("div", { style: {
                backgroundColor: props[key].color,
                opacity: 0.75,
                padding: '8px',
                borderRadius: "50%",
                border: "solid 2px darkgreen"
            } },
            react_1.default.createElement("div", { style: { fontSize: "16px" } }, props[key].bikes_avail)))); }));
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { response: [] };
        _this.refresh = function () {
            _this.updateRacks();
        };
        _this.filter = function () {
            _this.setState({ response: _this.state.response.filter(function (rack) { return rack.bikes_avail > 5; }) });
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.updateRacks();
    };
    ;
    App.prototype.updateRacks = function () {
        var _this = this;
        fetch('/api/bikes').then(function (res) {
            res.json().then(function (json) {
                console.log(json.express);
                if (json.express !== null) {
                    _this.setState({ response: json.express });
                }
            });
        });
    };
    App.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(MyMapComponent, __assign({}, this.state.response)),
            react_1.default.createElement("button", { onClick: this.refresh }, "Refresh"),
            react_1.default.createElement("button", { onClick: this.filter }, "Filter")));
    };
    return App;
}(react_1.default.PureComponent));
var Rack = /** @class */ (function () {
    function Rack(name, bikes_avail, lon, lat, color) {
        this.name = name;
        this.bikes_avail = bikes_avail;
        this.lon = lon;
        this.lat = lat;
        this.color = color;
    }
    return Rack;
}());
exports.default = App;
