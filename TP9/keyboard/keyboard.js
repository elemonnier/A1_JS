function pressedKey(){
    let codeKey = event.key;
    let a = document.getElementById("key-" + codeKey);
    a.classList.remove("released");
    a.classList.add("pressed");
}

function releasedKey(){
    let codeKey = event.key;
    let a = document.getElementById("key-" + codeKey);
    a.classList.remove("pressed");
    a.classList.add("released");
}

function main(){
    document.addEventListener("keydown", pressedKey);
    document.addEventListener("keyup", releasedKey);
}

main();