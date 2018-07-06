const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

const request = require('request');

var bikes = "durr";

request('https://data.foli.fi/citybike/',
	{ json: true },
	(err, res, body) => {
  if (err) { return console.log(err); }
  
  console.log(body.racks);
  console.log(typeof body.racks);

  var parsed = [];
  for (var i in body.racks) {
  		console.log(body.racks[i].name)
  		var color;
  		if(body.racks[i].bikes_avail > 2){
  				color = 'green'
  		} else if (body.racks[i].bikes_avail > 0) {
  			color = 'yellow'
  		} else {
  			color = 'red'
  		}
  		
  		parsed.push({
  			name : body.racks[i].name,
  			bikes_avail: body.racks[i].bikes_avail,
  			lon: body.racks[i].lon,
  			lat: body.racks[i].lat,
  			color: color
  		})
  }

  bikes = parsed;
});

app.get('/api/bikes', (req, res) => {
	res.send({ express : bikes})
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));


/*

// API calls

console.log("Morjens");

https.get('https://data.foli.fi/citybike/', (resp) => {
	let data = '';

	resp.on('data', (chunk) => {
		data += chunk;
	});

	resp.on('end', () => {
			console.log(JSON.parse(data));
	});

}).on("error", (err) => {
	console.log("Error: " + err.message);
});

*/