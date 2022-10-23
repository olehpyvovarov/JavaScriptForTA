//  task_1 let openWindow = window.open("https://w3.school.com", "w3", "width=300, innerHeight=300, left = 700, top = 200");
let openWindow = window.open("", "", "width=300, height=300");
setTimeout(function(){
    openWindow.resizeTo(500,500);
    setTimeout(() => {
        openWindow.moveTo(200,200);
        setTimeout(() => {
            openWindow.close();
        }, 6000);
    }, 4000);
},2000)

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition((pos) => {
    console.log("latitude: " + pos.coords.latitude);
    console.log("longtitude: " + pos.coords.longitude);
    console.log("altitude: " + pos.coords.altitude);
    console.log("accuracy: " + pos.coords.accuracy);
    console.log("spped: " + pos.coords.speed);
}, (e) => {alert(e);}, {
    enableHighAccuracy:true, setTimeout: 4000, maximumAge: 0
});
} else {
    alert("Your browser does not support geolocation");
}

// task_2

function changeCSS() {
    document.querySelector("#text").addEventListener("click", (event) => {
        event.target.style.color = "orange";
        event.target.style.fontWeight = "20px";
        event.target.style.fontType = "Comic Sans MS";
    });
}


// task_3

document.querySelector("#btn1").addEventListener("click", (event) => {
    event.target.style.backgroundcolor = "blue";                                // background color
});
document.querySelector("#btn2").addEventListener("doubleclick", (event) => {
    event.target.style.backgroundcolor = "pink";                                // background color
});
document.querySelector("#btn2").addEventListener("doubleclick", (event) => {
    event.target.style.backgroundcolor = "yellow";                                // background color
});
//or
let elem = document.documentHTML();
function changeBackGroundColor (event, color) {
    event.target.style.backgroundcolor = color;             // or elem.style.... instead of event.target.style...
}
let btn1 = document.querySelector("#btn1").addEventListener("click", changeBackGroundColor("blue"));
let btn2 = document.querySelector("#btn2").addEventListener("doubleclick", changeBackGroundColor("pink"));
document.querySelector("#btn").addEventListener("mouseover", changeBackGroundColor("yellow"));
document.querySelector("#btn").addEventListener("mouseout", changeBackGroundColor("white"));