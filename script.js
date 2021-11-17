
let cityList = ["Copenhagen","London","Paris","Lisbon","Madrid","Berlin","New York"];
const randomCity = ()=>{
    return cityList[Math.floor(Math.random() * cityList.length)]
}


const apiCall = ()=>{

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity()}&appid=414e30828a98f1aec41b012c3057e7a9&units=metric`;
fetch(apiUrl)
    .then(response => response.json())
    .then(yesOrNoData => {
        let h1obj = document.querySelector("#countryName");
        h1obj.innerHTML = ` City name:-${yesOrNoData["name"]}`;
        let temobj = document.querySelector("#temp");
        temobj.innerHTML = `Temperature :- ${yesOrNoData["main"]["temp"]}°C`;
        let runningupObj = document.querySelector("#runningUp");
        runningupObj.innerHTML = `weather condition:- ${yesOrNoData["weather"][0]["description"]}`;
        
    })
    .catch((error) => {
        console.log(error);
    });}
    
   apiCall();
   

    
    let buttonObj = document.querySelector("#searchbtn");


    buttonObj.addEventListener("click",()=>{
        let inputObj = document.querySelector("#inputvalue");
        let inputvalue = inputObj.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=414e30828a98f1aec41b012c3057e7a9&units=metric`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(yesOrNoData => {
        let paraObj = document.querySelector("#resultPara");
        let displaydiv = document.createElement("div");
        let cityelement = document.createElement("h1");
        let cityname = yesOrNoData["name"];
        cityelement.innerHTML = `City name:- ${cityname}`;
        let tempElement = document.createElement("h2");
        let currentTemperature = yesOrNoData["main"]["temp"];
        tempElement.innerHTML = `Current temperature:- ${currentTemperature}`;
        let weatherCastElement = document.createElement("h3");
        let wetherCast = yesOrNoData["weather"][0]["description"];
        weatherCastElement.innerHTML = `Weather type:- ${wetherCast}`;
        displaydiv.appendChild(cityelement);
        displaydiv.appendChild(tempElement);
        displaydiv.appendChild(weatherCastElement);
        let hrElement  = document.createElement("hr");
        paraObj.appendChild(displaydiv)
        paraObj.appendChild(hrElement);

        
        
    })
    .catch((error) => {
        console.log(error);
    });});

