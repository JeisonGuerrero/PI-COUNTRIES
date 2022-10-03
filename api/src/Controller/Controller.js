const axios = require('axios');


const getCountry = async () => {
        const promise = await axios('https://restcountries.com/v3.1/all');
        const countries = promise.data.map((ele)=>{
            return {
                id: ele.ccn3,
                name: ele.name.common,
                flags: ele.flags.png,
                region: ele.region,
                capital: ele.capital? ele.capital[0]: "no capital registered",
                subregion: ele.subregion,
                area: ele.area,
                population: ele.population,
            }
        })
    
        return countries;
};

module.exports= {
    getCountry
}