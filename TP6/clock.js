function drawClock(continuousMove = false)
{
    setInterval(drawClock, 1000);

    let canvas = document.getElementById("clock");
    let context = canvas.getContext("2d");

    fillRoundedRectangle(context);
    drawBackground(context);

    for (let counter = 1; counter < 13; counter++)
    {
        drawNumber(context, counter);
    }
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    drawHourHand(context, hours);
    drawMinuteHand(context, minutes);
    drawSecondHand(context, seconds);
    drawBlackDot(context, 15);
}

function drawBackground(context)
{
    context.save();
    context.beginPath();
    context.fillStyle = "white";
    context.arc(300, 300, 225, 0, Math.PI*2);
    context.fill();
    context.closePath();
    context.restore();
}

function drawNumber(context, number)
{
    context.save();
    context.beginPath();
    context.fillStyle = "black";
    context.font = 'bold 50px Arial';
    if (number == 1)
    {
        context.fillText(number, 380, 160);
    }
    if (number == 2)
    {
        context.fillText(number, 445, 225);
    }
    if (number == 3)
    {
        context.fillText(number, 475, 320);
    }
    if (number == 4)
    {
        context.fillText(number, 450, 410);
    }
    if (number == 5)
    {
        context.fillText(number, 380, 480);
    }
    if (number == 6)
    {
        context.fillText(number, 285, 510);
    }
    if (number == 7)
    {
        context.fillText(number, 200, 480);
    }
    if (number == 8)
    {
        context.fillText(number, 120, 410);
    }
    if (number == 9)
    {
        context.fillText(number, 100, 320);
    }
    if (number == 10)
    {
        context.fillText(number, 115, 230);
    }
    if (number == 11)
    {
        context.fillText(number, 180, 160);
    }
    if (number == 12)
    {
        context.fillText(number, 270, 135);
    }
    context.closePath();
    context.restore();
}

function drawHourHand(context, hours)
{
    context.save();
    context.beginPath();
    context.translate(300, 300);
    context.rotate(-Math.PI/3);
    for (let counter = 1; counter < hours; counter++) 
    {
        context.rotate(Math.PI/6);
    }
    context.rect(0, 0, 150, 5);
    context.fill();
    context.translate(0, 0);
    
    context.closePath();
    context.restore();
}

function drawMinuteHand(context, minutes)
{
    context.save();
    context.beginPath();
    context.translate(300, 300);
    context.rotate(-15*Math.PI/30);
    for (let counter = 0; counter < minutes; counter++) 
    {
        context.rotate(Math.PI/6);
    }
    context.rect(0, 0, 190, 5);
    context.fill();
    context.closePath();
    context.restore();
}

function drawSecondHand(context, secondes)
{
    context.save();
    context.beginPath();
    context.translate(300, 300);
    context.rotate(-15*Math.PI/30);
    for (let counter = 0; counter < secondes; counter++) 
    {
        context.rotate(Math.PI/30);
    }
    context.rect(0, 0, 210, 5);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.restore();
}

function fillRoundedRectangle(context)
{
    context.save();
    context.beginPath();
    context.moveTo(150, 50);
    context.lineTo(450, 50);
    context.arcTo(550, 50, 550, 150, 100);
    context.lineTo(550, 450);
    context.arcTo(550, 550, 450, 550, 100);
    context.lineTo(150, 550);
    context.arcTo(50, 550, 50, 450, 100);
    context.lineTo(50, 150);
    context.arcTo(50, 50, 150, 50, 100);
    context.stroke();
    context.fill();
    context.closePath();
    context.restore();
}

function drawBlackDot(context, size)
{
    context.beginPath();
    context.save();
    context.arc(300, 300, size, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.restore();
}

drawClock();