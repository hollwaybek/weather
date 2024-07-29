let button = document.querySelector('button')
let input = document.querySelector('input')
let speed = document.querySelector('.speed')
let humidity = document.querySelector('.humidity')
let deg = document.querySelector('.deg')
let name_region = document.querySelector('.name_region')
let icon_img = document.querySelector('.icon_img')

button.addEventListener('click', () => {
    let query = input.value
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '898eacc06fmshbfe8396bab4733ep1f96c1jsnff5f61594fb2',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const ChangeCard = () => {
                speed.innerHTML = data.current.wind_mph
                humidity.innerHTML = data.current.humidity
                deg.innerHTML = data.current.temp_c
                icon_img.setAttribute('src', data.current.condition.icon)
                name_region.innerHTML = data.location.region
            }

            ChangeCard()
        })
        .catch(err = console.log(err))
})