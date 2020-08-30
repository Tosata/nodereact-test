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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*global google*/
var react_1 = __importStar(require("react"));
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
    return react_1.default.createElement(react_google_maps_1.GoogleMap, { defaultZoom: 13, defaultCenter: { lat: 60.4518, lng: 22.2666 } }, Object.keys(props.markers).map(function (key) { return (react_1.default.createElement(InfoBox, { defaultPosition: new google.maps.LatLng(props.markers[key].lat, props.markers[key].lon), options: { closeBoxURL: "", enableEventPropagation: true } },
        react_1.default.createElement("div", { style: { backgroundColor: props.markers[key].color, opacity: 0.75, padding: '8px', borderRadius: "50%", border: "solid 2px darkgreen" } },
            react_1.default.createElement("div", { style: { fontSize: "16px" } }, props.markers[key].bikes_avail)))); }));
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            response: '',
        };
        _this.callApi = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, body, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/api/bikes')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        body = _a.sent();
                        console.log(body.express);
                        console.log(typeof body.express);
                        for (x in body.express) {
                            console.log('Pyörä: ', x);
                        }
                        if (response.status !== 200)
                            throw Error(body.message);
                        return [2 /*return*/, body];
                }
            });
        }); };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        // this.callApi()
        //   .then(res => this.setState({ response: res.express }))
        //   .catch(err => console.log(err));
        var _this = this;
        fetch('/api/bikes').then(function (res) {
            res.json().then(function (json) {
                _this.setState({ response: json.express });
            });
            // console.log(res.json());
            // this.setState({response: res.json()});
        });
    };
    ;
    App.prototype.callApiSync = function () {
        fetch('/api/bikes').then(function (response) {
            return response.body;
        });
    };
    App.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(MyMapComponent, { isMarkerShown: true, markers: this.state.response })));
    };
    return App;
}(react_1.Component));
exports.default = App;
