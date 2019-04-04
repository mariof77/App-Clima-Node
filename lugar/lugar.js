const axios = require('axios')

const getLugarLatLng = async(dire) => {

    const encodeUrl = encodeURI(dire)
        // console.log(encodeUrl)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'df7efd995fmsh346f751935abda1p1a1d5ejsn4d5bfef803dc' }
    });

    const resp = await instance.get();

    if (resp.data.Results[0].length === 0) {
        throw new Error(`No hay resultados para ${dire }`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}