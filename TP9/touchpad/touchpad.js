// function relativePosition(touchpad){
//     let r = touchpad.target.getBoundingClientRect();
//     let left = touchpad.clientX - r.left;
//     let top = touchpad.clientY - r.top;
//     console.log(left, top - 0.79999542236328);
// }
//
// function leftPosition(touchpad){
//     let r = touchpad.target.getBoundingClientRect();
//     return touchpad.clientX - r.left;
// }
//
// function topPosition(touchpad) {
//     let r = touchpad.target.getBoundingClientRect();
//     return touchpad.clientY - r.top;
// }
//
// function drawBlackDot(context, size) {
//     context.beginPath();
//     context.save();
//     context.arc(, , size, 0, 2*Math.PI);
//     context.closePath();
//     context.fill();
//     context.restore();
// }
//
// function main(){
//     let touchpad = document.getElementById("touchpad");
//     let screen = document.getElementById("screen");
//     touchpad.addEventListener("mousemove", relativePosition);
//
// }
//
// main();

function mousedraw(event) {
    let r = event.target.getBoundingClientRect();
    let relX = event.clientX - r.left;
    let relY = event.clientY - r.top;
    let screen = document.getElementById("screen");
    let r2 = screen.getBoundingClientRect();
    relX = relX * r2.width / r.width;
    relY = relY * r2.height / r.height;
    let ctx = screen.getContext("2d");
    ctx.clearRect(0, 0, r2.width, r2.height);
    drawCircle(ctx, relX, relY);
}

function drawCircle(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function mouseErase() {
    let screen = document.getElementById("screen");
    let r2 = screen.getBoundingClientRect();
    let ctx = screen.getContext("2d");
    ctx.clearRect(0, 0, r2.width, r2.height);
}

function main(){
    let tchpad = document.getElementById("touchpad");
    tchpad.addEventListener("mousemove", mousedraw);
    tchpad.addEventListener("mouseout", mouseErase)
}

main();