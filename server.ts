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