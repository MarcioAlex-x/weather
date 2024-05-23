window.addEventListener('load',()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const getData = async()=>{
            const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=64930df30e9240b6be3214240242205&q=${latitude},${longitude}&lang=pt`)
            const data = await fetchData.json()

            if(data.current.is_day === 0){
                document.querySelector('.container').classList.add('night')
            }else{
                document.querySelector('.container').classList.add('day')
            }

            document.querySelector('.location').innerHTML=data.location.name
            document.querySelector('.icon-weather').setAttribute('src','https:'+data.current.condition.icon)
            document.querySelector('.text').innerHTML = data.current.condition.text
            document.querySelector('.humidity').innerHTML = data.current.humidity
            document.querySelector('.temp-c').innerHTML = data.current.temp_c
            document.querySelector('.wind-kph').innerHTML = data.current.wind_kph
            document.querySelector('.feelslike-c').innerHTML = data.current.feelslike_c.toFixed(0)
        }
        getData()
    })  
})