var img = document.querySelectorAll("img")[1];
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var buttons = document.querySelectorAll(".a-b");



buttons.forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector(".actives")?.classList.remove("actives");
        button.classList.add("actives");
})
});




button1.addEventListener("click", () => {
img.src= "./space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
document.querySelector("#terminology").innerHTML = "The terminology";
document.querySelector("#title").innerHTML= "LAUNCH VEHICLE";
document.querySelector("#body").innerHTML= "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
})

button2.addEventListener("click", () => {
    img.src= "./space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg";
    document.querySelector("#terminology").innerHTML = "The terminology";
    document.querySelector("#title").innerHTML= "SPACE CAPSULE";
    document.querySelector("#body").innerHTML= "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
})

button3.addEventListener("click", () => {
    img.src= "./space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg";
    document.querySelector("#terminology").innerHTML = "The terminology";
    document.querySelector("#title").innerHTML= "SPACEPORT";
    document.querySelector("#body").innerHTML= "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
})