const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        // timeout: 1000,
        headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': '1f3253ca35msh3d266a34bc5c773p18cfebjsnf499107a1df7',
            'useQueryString': 'true',

        }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`NO hay resultados para ${dir}`);
    }

    const data = resp.data.data[0];
    const direccion = `${data.country}, ${data.region}, ${data.name} `;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}