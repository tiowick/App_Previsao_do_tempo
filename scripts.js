
const key = "0a1e2746c62678d5242303410e705217"

function screenData(data){

    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".text-forecast").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = data.main.humidity + "%"
    document.querySelector(".forecast").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

function clickButton(){
    const city = document.querySelector(".input-city").value

    findCity(city)

}

async function findCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    screenData(data)
    
}
