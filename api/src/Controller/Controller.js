const axios = require('axios');


const getCountry = async () => {
        const promise = await axios('https://restcountries.com/v3.1/all');
        const countries = promise.data.map((ele)=>{
            return {
                id: ele.ccn3 ? ele.ccn3 : ele.cca3,
                name: ele.name.common,
                flags: ele.flags.png,
                region: ele.region,
                capital: ele.capital ? ele.capital[0] : "no capital registered",
                subregion: ele.subregion ? ele.subregion : "no subregion registered",
                area: ele.area ? ele.area : 0,
                population: ele.population ? ele.population : 0,
            }
        })
    
        return countries;
};

module.exports= {
    getCountry
}