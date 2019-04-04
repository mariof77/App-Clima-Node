//========================================
// Para obtener ubicaciones por gps trabajo con rapidapi -> google ya te empezo a cobrar
// https://rapidapi.com/dev132/api/city-geo-location-lookup
// Por linea de comandos ejecuto: node app - d "Buenos Aires"
// NOTA: Para tener en cuenta siempre esta devolviendo la misma temperatura. Eso es el servicio de rapidapi
//========================================
const axios = require('axios')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        // console.log(coords.lat);
        // console.log(coords.lng);
        const temp = await clima.getClima(coords.lat, coords.lng);
        // console.log(temp)
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


// const getInfo = async(direccion) => {

//     try {
//         const coords = await lugar.getLugarLatLng(direccion);
//         const temp = await clima.getClima(coords.lat, coords.lng);
//         return `El clima de ${ coords.direccion } es de ${ temp}.`

//     } catch (e) {
//         return `No se pudo determinar el clima de ${ direccion }`
//     }
// }

// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
// .then( console.log())


// clima.getClima(-34.610001, -58.369999)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e))