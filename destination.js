var img = document.querySelectorAll("img")[1];
var link1 = document.querySelector("#link-1");
var link2 = document.querySelector("#link-2");
var link3 = document.querySelector("#link-3");
var link4 = document.querySelector("#link-4");


link1.addEventListener("click", () => {
    img.src = "./assets/destination/image-moon.png";
    document.querySelector("h1").innerHTML = "MOON";
    document.querySelector("#main-text").innerHTML = "See our planet as you\'ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\'re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";   
    document.querySelector("#distance").innerHTML = "384,400 KM";
    document.querySelector("#time").innerHTML = "3 DAYS";
})
link2.addEventListener("click", () => {
    img.src = "./assets/destination/image-mars.png";
    document.querySelector("h1").innerHTML = "MARS";
    document.querySelector("#main-text").innerHTML = "Don\'t forget to pack your hiking boots. You\'ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system . It\'s two and a half times the size of Everest!";   
    document.querySelector("#distance").innerHTML = "235 MIL. KM";
    document.querySelector("#time").innerHTML = "9 MONTHS";
})
link3.addEventListener("click", () => {
    img.src = "./assets/destination/image-europa.png";
    document.querySelector("h1").innerHTML = "EUROPA";
    document.querySelector("#main-text").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\'s dream. With an icy surface, it\'s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";   
    document.querySelector("#distance").innerHTML = "628 MIL. KM";
    document.querySelector("#time").innerHTML = "3 YEARS";
})
link4.addEventListener("click", () => {
    img.src = "./assets/destination/image-titan.png";
    document.querySelector("h1").innerHTML = "TITAN";
    document.querySelector("#main-text").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan  is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";  
    document.querySelector("#distance").innerHTML = "1.6 BIL. KM";
    document.querySelector("#time").innerHTML = "7 YEARS";
})
