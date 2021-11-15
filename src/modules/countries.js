const getCountries = async () => {
    try {
        const data = await (await fetch('https://restcountries.com/v3.1/all')).json();
        let countriesData = [];
        for (let item of data) {
            let obj = {
            country: item.name.common,
            coords: {
                lat: item.latlng[0],
                lng: item.latlng[1]
            }
            }
            countriesData.push(obj);
        }
        countriesData.sort((a, b) => a.country.localeCompare(b.country));
        return countriesData;
    } catch(err) {
        console.log(err.message);
    }
}
const getWeather = async (pick) => {
    /* const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${pick.coords.lat}&lon=${pick.coords.lng}&exclude=hourly,daily&appid={37455216f4de62aa6e8beba09934433a}`;
    try {
        const data = await (await fetch(url)).json();
        console.log(url);
        console.log('getting da weather', data);
    } catch(err) {
        console.log(err.message);
    } */
    const weather = {
        day: 'monday',
        weather: 'rain',
        photos: await getPicture(pick.country)
    }
    return weather
}
const getPicture = async (value) => {
    const unplashURL = `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=dqpkUmz79LDIjBojkNgpJP-H_ppG-CIylVrSYzeajfU`;
    const test = `https://api.unsplash.com/photos/?client_id=dqpkUmz79LDIjBojkNgpJP-H_ppG-CIylVrSYzeajfU/random`;
    const data = await (await fetch(unplashURL)).json();
    return data.results[0].urls.small
}

export {getCountries, getWeather};