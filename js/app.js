const url = "http://api.openweathermap.org/data/2.5/"
const key = "API__KEY"

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value)
    }
}


//Fetch
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then((result) => {
        //DOM select
        const title = document.querySelector('.title');
        const price = document.querySelector('.price');
        const status = document.querySelector('.status');
        const wicon = document.getElementById('wicon');

        title.innerHTML = `${result.name +'-'+ result.sys.country} `
        price.innerHTML = `${Math.round(result.main.temp)+"°C"}`
        status.innerHTML = `${result.weather[0].description}`
        wicon.setAttribute('src', "http://openweathermap.org/img/w/" + `${result.weather[0].icon}` + ".png")
    })

    searchBar.value="";
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)