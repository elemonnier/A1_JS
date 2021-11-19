function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomComponent(){
    return getRandomInt(0, 255);
}

function randomColor(button){
    let red = randomComponent();
    let green = randomComponent();
    let blue = randomComponent();
    return button.target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function changeColor(){
    let button = document.getElementById("colorButton");
    button.addEventListener("click", randomColor);
}

function main(){
    changeColor();
}

main();