const axios = require('axios').default;

class BikeService {

    async GetRacks(): Promise<Rack[]> {
        const params = {json: true};
        const racks: Rack[] = [];
        await axios.get(
            'https://data.foli.fi/citybike/',
            {params})
            .then((response: any) => {
                for (let i in response.data.racks) {
                    racks.push({
                        name: response.data.racks[i].name,
                        bikes_avail: response.data.racks[i].bikes_avail,
                        lon: response.data.racks[i].lon,
                        lat: response.data.racks[i].lat,
                        color: response.data.racks[i].bikes_avail > 2 ? 'green' : 'yellow'
                    });
                }
            })
            .catch((error: any) => {
                console.log(error);
            });

        return racks;
    }
}

export default new BikeService();

class Rack {
    name: string;
    bikes_avail: string;
    lon: string;
    lat: string;
    color: string;

    constructor(name: string, bikes_avail: string, lon: string, lat: string, color: string) {
        this.name = name;
        this.bikes_avail = bikes_avail;
        this.lon = lon;
        this.lat = lat;
        this.color = color;
    }
}