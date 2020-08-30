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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bike_service_1 = __importDefault(require("./service/bike-service"));
var app = express();
var port = process.env.PORT || 5000;
app.get('/api/bikes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _b = (_a = res).send;
                _c = {};
                return [4 /*yield*/, bike_service_1.default.GetRacks()];
            case 1:
                _b.apply(_a, [(_c.express = _d.sent(), _c)]);
                return [2 /*return*/];
        }
    });
}); });
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, function () { return console.log("Listening on port " + port); });
// request('https://data.foli.fi/citybike/',
//     {json: true},
//     (err, res, body) => {
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log(body.racks);
//         console.log(typeof body.racks);
//
//         let parsed = [];
//         for (let i in body.racks) {
//             console.log(body.racks[i].name)
//             let color;
//             if (body.racks[i].bikes_avail > 2) {
//                 color = 'green'
//             } else if (body.racks[i].bikes_avail > 0) {
//                 color = 'yellow'
//             } else {
//                 color = 'red'
//             }
//
//             parsed.push({
//                 name: body.racks[i].name,
//                 bikes_avail: body.racks[i].bikes_avail,
//                 lon: body.racks[i].lon,
//                 lat: body.racks[i].lat,
//                 color: color
//             })
//         }
//
//         bikes = parsed;
//     });
// const params = {json: true};
// racks = [];
// axios.get(
//     'https://data.foli.fi/citybike/',
//     {params})
//     .then((response: any) => {
//         for (let i in response.data.racks) {
//             racks.push({
//                 name: response.data.racks[i].name,
//                 bikes_avail: response.data.racks[i].bikes_avail,
//                 lon: response.data.racks[i].lon,
//                 lat: response.data.racks[i].lat,
//                 color: response.data.racks[i].bikes_avail > 2 ? 'green' : 'yellow'
//             });
//         }
//         res.send({express: racks})
//     })
//     .catch((error: any) => {
//         console.log(error);
//     });
