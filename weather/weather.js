let btn = document.getElementById("btn");
console.log(btn);

let fetchApi = async (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;
    console.log(city);

    let apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        let data = await fetch(apiUrl);
        let finalData = await data.json();
        console.log(finalData);

        let weatherSection = document.getElementById("card");
        weatherSection.innerHTML = `
            <h3>Weather in ${finalData.name}</h3>
            <h2>Temperature: ${finalData.main.temp}°C</h2>
            <h2>Condition: ${finalData.weather[0].description}</h2>
            <h2>Country: ${finalData.sys.country}</h2>
            
        `;
    } catch (error) {
        console.error("Error fetching the API", error);
    }
};

btn.addEventListener("click", fetchApi);