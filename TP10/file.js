function isLeap(date){
    return ((date % 4 === 0 && date%100 !== 0 ) || date%400 === 0);
}

function getNbDay(year,month){
    if(month === 2){
        if( (year%4 === 0 && year%100 !== 0) || year%400 === 0){
            return 29 ;
        }else{
            return 28 ;
        }
    }else if (month === 4 || month ===6 || month ===9 || month ===11){
        return 30 ;
    }else{
        return 31 ;
    }
}

function getDayInWeek(year,month,day){
    let date = new Date(''+year+'-'+month+'-'+(day)+'');
    let jour = date.getDay();
    if(jour === 0){
        return 7;
    }
    return jour ;
}

function buildCalendar (element, year, month,day = undefined){

    let input = document.createElement("input");
    element.appendChild(input);
    input.setAttribute("type","date");

    let table = document.createElement("table");
    element.appendChild(table);
    table.style.border = "1px solid black ";
    table.style.borderCollapse = "collapse";

    let thead = document.createElement("thead");
    table.appendChild(thead);

    let trDate = document.createElement("tr");
    thead.appendChild(trDate);

    let thDate = document.createElement("th");
    trDate.appendChild(thDate);
    thDate.setAttribute("colspan", "7");

    switch (month) {
        case 1 : thDate.textContent="Janvier "+year;
            break;
        case 2 : thDate.textContent="Février "+year;
            break;
        case 3 : thDate.textContent="Mars "+year;
            break;
        case 4 : thDate.textContent="Avril "+year;
            break;
        case 5 : thDate.textContent="Mai "+year;
            break;
        case 6 : thDate.textContent="Juin "+year;
            break;
        case 7 : thDate.textContent="Juillet "+year;
            break;
        case 8 : thDate.textContent="Aout "+year;
            break;
        case 9 : thDate.textContent="Septembre "+year;
            break;
        case 10 : thDate.textContent="Octobre "+year;
            break;
        case 11 : thDate.textContent="Novembre "+year;
            break;
        case 12 : thDate.textContent="Decembre "+year;
            break;
        default : break;
    }

    let trDay = document.createElement("tr");
    thead.appendChild(trDay);

    for(let i = 0; i < 7 ; i++){
        let day = document.createElement("th");
        trDay.appendChild(day);
        switch (i) {
            case 0 : day.textContent="lun";
                break;
            case 1 : day.textContent="mar";
                break;
            case 2 : day.textContent="mer";
                break;
            case 3 : day.textContent="jeu";
                break;
            case 4 : day.textContent="ven";
                break;
            case 5 : day.textContent="sam";
                break;
            case 6 : day.textContent="dim";
                break;
            default : break;
        }
        day.style.border = "1px solid black";
    }


    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    tbody.setAttribute("id","body");

    let nbrlines = (getDayInWeek(year,month,1)+getNbDay(year,month)-1)/7;

    for(let j = 0 ; j < nbrlines; j++){
        let trd = document.createElement("tr");
        tbody.appendChild(trd);
        for(let k = 0 ; k< 7; k++){
            let td = document.createElement("td");
            trd.appendChild(td);
            td.setAttribute("id", "day"+(j*7+k));
            td.style.border = "1px solid black";

        }
    }

    fileTable(year,month);

    if(day !== undefined){
        let caseColored = document.getElementById("day"+(day+getDayInWeek(year,month,1)-2));
        caseColored.style.backgroundColor = "blue" ;
    }

    document.getElementById("body").addEventListener("mouseover",changecolor);
    document.getElementById("body").addEventListener("mouseout",changecolor2);

}

function fileTable(year,month){
    let jour = 1 ;
    for(let l = getDayInWeek(year,month,1)-1 ; l < getNbDay(year,month)+getDayInWeek(year,month,1)-1 ; l++ ){
        let file = document.getElementById("day"+l);
        file.textContent = ""+jour+"";
        jour++;
    }
}

function changecolor(event){

    if(event.target.textContent !== "") {

        event.target.style.cursor = "pointer";
        if (event.target.style.backgroundColor !== "blue") {
            event.target.style.backgroundColor = "cyan";
        }

    }

}


function changecolor2(event){

    if(event.target.style.backgroundColor !== "blue") {
        event.target.style.backgroundColor = "white";
    }

}