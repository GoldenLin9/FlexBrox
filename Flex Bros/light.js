let light = document.querySelector("#light");
let body = document.querySelector("body");
let lightOn = false;


// turn light off or on
light.addEventListener("click", ()=> {
    if (lightOn) {
        light.style.color = "black";
        body.style.background = "white";
        lightOn = false;
    } else {
        light.style.color = "yellow";
        body.style.background = "black";
        lightOn = true;
    }
});