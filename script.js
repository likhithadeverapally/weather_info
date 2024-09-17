const api_key="240f8d7e5dd743db8df52550241709";

const url="http://api.weatherapi.com/v1/current.json?&q="

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

async function checkWeather(city) {
    const response=await fetch(url+city+`&key=${api_key}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML=data.current.temp_c+`°C`;
    document.querySelector(".humid").innerHTML=data.current.humidity + `%`;
    document.querySelector(".wind_speed").innerHTML=data.current.wind_kph + `kmph`;
    const iconUrl = "https:" + data.current.condition.icon;
    document.querySelector(".sun").src = iconUrl;

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
