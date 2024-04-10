 import React from "react";
 
 function WeatherAPI(){
 //accuweather API
 fetch("https://dataservice.accuweather.com/currentconditions/v1/335668?apikey=WlJdqhjA4jTuM6FQA5uH1Rr7GoyHhKYY&language=en-us&details=true")
 .then(res => res.json()) 
 .then(data => {
     console.log(data)
   console.log(data[0].ApparentTemperature.Metric.Value)
   console.log(data[0].WeatherIcon)
   let icon = data[0].WeatherIcon
   if(icon <= 4){
     document.getElementById('icon').style.backgroundColor = "#fff44f"
   }else if(icon <= 11){
     document.getElementById('icon').style.backgroundColor = "#dcdcdc"
   }else if(icon <= 18){
     document.getElementById('icon').style.backgroundColor = "#bcd4e6"
     document.getElementById('icon').style.borderRadius = "0px 50% 50% 50%"
     
   }else if(icon <= 29){
     document.getElementById('icon').style.backgroundColor = "white"
     document.getElementById('icon').style.border = "1px black solid"
   }else if(icon <= 34){
     document.getElementById('icon').style.backgroundColor = "black"
     document.getElementById('icon').style.border = "1px black solid"
   }else if(icon <= 38){
     document.getElementById('icon').style.backgroundColor = "#dcdcdc"
     document.getElementById('icon').style.border = "4px black solid"
   }else if(icon <= 42){
     document.getElementById('icon').style.backgroundColor = "#bcd4e6"
     document.getElementById('icon').style.border = "4px black solid"
     document.getElementById('icon').style.borderRadius = "0px 50% 50% 50%"
   }else if(icon <= 44){
     document.getElementById('icon').style.backgroundColor = "white"
     document.getElementById('icon').style.border = "4px black solid"
 
   }
 
   document.querySelector("h4").innerText = `${data[0].WeatherText} and ${data[0].Temperature.Imperial.Value} F (${data[0].Temperature.Metric.Value} C)`
 })
 .catch(err => {
     console.log(`error ${err}`)
 });

 return (
 <section id="weather" style={{width: '50%'}} >
                <section id="icon" ></section>
                <h4></h4>
            </section>
            
            )};

export default WeatherAPI;