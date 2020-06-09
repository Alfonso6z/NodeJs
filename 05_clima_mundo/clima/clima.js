const axios = require('axios');

const getCLima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=da02e04cf4bb7d7df264231fb87d9d8b&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getCLima
}