"use strict";
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
var simple_cache_1 = require("./simple-cache");
var axios = require('axios').default;
var BikeService = /** @class */ (function () {
    function BikeService() {
        this.apiCache = new simple_cache_1.SimpleCache();
    }
    BikeService.prototype.GetRacks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, racks_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apiCache.recordExists('citybike')) return [3 /*break*/, 1];
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(_this.apiCache.get('citybike'));
                            })];
                    case 1:
                        params = { json: true };
                        racks_1 = [];
                        return [4 /*yield*/, axios.get('https://data.foli.fi/citybike/', { params: params })
                                .then(function (response) {
                                for (var i in response.data.racks) {
                                    racks_1.push({
                                        name: response.data.racks[i].name,
                                        bikes_avail: response.data.racks[i].bikes_avail,
                                        lon: response.data.racks[i].lon,
                                        lat: response.data.racks[i].lat,
                                        color: response.data.racks[i].bikes_avail > 2 ? 'green' : 'yellow'
                                    });
                                }
                                _this.apiCache.set('citybike', racks_1);
                            })
                                .catch(function (error) {
                                console.log(error);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, racks_1];
                }
            });
        });
    };
    return BikeService;
}());
exports.default = new BikeService();
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
