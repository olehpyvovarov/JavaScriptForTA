//let openWindow = window.open("https://w3.school.com", "w3", "width=300, innerHeight=300, left = 700, top = 200");
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
}, (e) => {alert(e);}, {
    enableHighAccuracy:true, setTimeout: 4000, maximumAge: 0
});
} else {
    alert("Your browser does not support geolocation");
}