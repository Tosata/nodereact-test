import express = require('express');
import path = require('path');
import BikeService from "./service/bike-service";

const app = express();
const port = process.env.PORT || 5000;


app.get('/api/bikes', async (req, res) => {
    res.send({express: await BikeService.GetRacks()})
});


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Listening on port ${port}`));


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