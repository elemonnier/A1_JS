function addSegments(digitId){
    let digit = document.querySelector("#" + digitId); // `#${digitId}`
    for (let counter = 0; counter <= 6; counter++){
        let html = `<div class="off segment${counter} segment"></div>`;
        digit.insertAdjacentHTML("beforeend" , html);
    }
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];

    let node = document.querySelector(`#${digitId}`);
    for(let counter=0; counter<7; counter++){
        if(segmentStates[value][counter] === 1){
            node.children[counter].classList.remove("off");
        }
        else{
            node.children[counter].classList.add("off");
        }
    }
}

function init(){
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    updateDigit("hours-tens", Math.floor(hours / 10));
    updateDigit("hours-units", hours % 10);
    updateDigit("minutes-tens", Math.floor(minutes / 10));
    updateDigit("minutes-units", minutes % 10);

    let node = document.querySelector(".colon");
    if (seconds % 2 === 0) {
        node.classList.remove("off");
    } else {
        node.classList.add("off");
    }
    brightOutline(seconds);
    requestAnimationFrame(updateClock);
}

function createLEDs(){
    for (let counter = 0; counter < 60; counter++){
        let led = document.createElement("div");
        document.body.appendChild(led);
        led.setAttribute("id", "led"+counter);
        led.classList.add("led");
        led.classList.add("off");
        led.style.transform = "translate(263px, -162px)";
        for (let i=0; i<counter; i++){
            led.style.transform += "rotate(6deg)";
        }
        led.style.transform += "translate(0px, -300px)";
    }
}

function brightOutline(){
    let now = new Date();
    let seconds = now.getSeconds();

    if (seconds === 0){
        for (let counter = 0; counter < 60; counter++){
            document.getElementById("led"+counter).classList.add("off");
        }
        document.getElementById("led0").classList.remove("off");
    }
    else {
        for (let counter = 0; counter <= seconds; counter++) {
            document.getElementById("led" + counter).classList.remove("off");
        }
    }
    requestAnimationFrame(brightOutline);
}

function main(){
    document.body.classList.add("shiftedClock");
    init();
    createLEDs();
    updateClock();
    brightOutline();
}
main();