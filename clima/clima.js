const axios = require('axios')

//=====================================
// Site utilizado para obtener las temperaturas
// https: //rapidapi.com/dev132/api/city-geo-location-lookup
//=====================================


const getClima = async(lat, lng) => {

    const appid = "b6907d289e10d714a6e88b30761fae22"

    const temperatura = 273.15;
    var resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}`)
    var temperaturaObtenida = resp.data.main.temp

    return parseFloat(temperaturaObtenida - temperatura).toFixed(2);
}

module.exports = {
    getClima
}