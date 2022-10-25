//  task_1 let openWindow = window.open("https://w3.school.com", "w3", "width=300, innerHeight=300, left = 700, top = 200");
// let openWindow = window.open("", "", "width=300, height=300");
// setTimeout(function(){
//     openWindow.resizeTo(500,500);
//     setTimeout(() => {
//         openWindow.moveTo(200,200);
//         setTimeout(() => {
//             openWindow.close();
//         }, 6000);
//     }, 4000);
// },2000)

// if (navigator.geolocation) {
// navigator.geolocation.getCurrentPosition((pos) => {
//     console.log("latitude: " + pos.coords.latitude);
//     console.log("longtitude: " + pos.coords.longitude);
//     console.log("altitude: " + pos.coords.altitude);
//     console.log("accuracy: " + pos.coords.accuracy);
//     console.log("spped: " + pos.coords.speed);
// }, (e) => {alert(e);}, {
//     enableHighAccuracy:true, setTimeout: 4000, maximumAge: 0
// });
// } else {
//     alert("Your browser does not support geolocation");
// }

// task_2

// 1st option: <button onclick="changeCSS()>"
// function changeCSS() {
//         let text = document.querySelector("p");
//         text.style.color = "orange";
//         text.style.fontSize = "20px";
//         text.style.fontFamily = "Comic Sans MS";
// }
// 2nd option:  <button id="changeCSS"
// let btn = document.querySelector("#changeCSS");
// btn.addEventListener("click", function(){
//     let text = document.querySelector("p");
//     text.style.color = "orange";
//     text.style.fontSize = "20px";
//     text.style.fontFamily = "Comic Sans MS";
// })

// task_3

function changeBackgroundcolor (color) {
    document.body.style.backgroundcolor = color;             // or elem.style.... instead of event.target.style...
}
// or document.querySelector("#btn").addEventListener("mouseout", changeBackGroundColor("white"));


// task_4  upon selecting from a dropdown and clicking on a button the dropdown option is deleted

const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", deleteDropElem);
function deleteDropElem () {
    let x = document.getElementById("names");
    x.remove(x.selectedIndex);
}


// task_5 varios actions on a button

let butt = document.getElementById("liveButton");
//butt.addEventListener("mouseover", mouseOverFunc);
butt.addEventListener("click", clickFunc);
//butt.addEventListener("mouseout", mouseOutFunc);

// function mouseOverFunc(){
//     document.getElementById("myID").innerHTML += "Mouse on me!<br>";
// }
// function mouseOutFunc(){
//     document.getElementById("myID").innerHTML += "Mouse is not on me!<br>";
// }
function clickFunc(){
    document.getElementById("myID").innerHTML += "I was pressed!<br>";
}


// task_6   following up/tracking Windows size when changed

function displayWindowSize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let size = "Width " + w + ", " + "Height " + h;
    document.getElementById("result").innerHTML = "Window size: " + size;
}
window.addEventListener("resize", displayWindowSize);


// task_7       realize 2 dropdowns: 'countries' and corresponding 'cities': when a country selected cities dropdown appears and when a city is selected
//              the country name and the city name is displayed below

const cityArr = {
    "ger" : ["Steinau", "Bad Soden", "Schluchtern", "Fulda"],
    "usa" : ["Charlotte", "Salem", "High Point", "Wilmington"],
    "ukr" : ["Kyiv", "Lviv", "Rivne", "Lutsk"]
}
let selec = document.getElementById("country");
selec.addEventListener("change", createList);
selec.addEventListener("change", toParagraph);

let citySelec = document.getElementById("cities");
citySelec.addEventListener("change", toParagraph);

function createList() {
    citySelec.innerHTML = "";
    let selectedCountry = selec.value;
    for (let i = 0; i < cityArr[selectedCountry].length; i +=1) {
        let newOption = document.createElement("option");
        newOption.innerHTML = cityArr[selectedCountry][i];
        citySelec.appendChild(newOption);
    }
}
let parag = document.querySelector("p");
function toParagraph() {
    parag.innerHTML = "";
    parag.innerHTML = selec.options[selec.selectedIndex].text + ", "
    + citySelec.options[citySelec.selectedIndex].text;
}