function isLeapTest(){

    console.log("bissextile year : 2000 ->"+ isLeap(2000));
    console.log("bissextile year : 2016 ->"+isLeap(2016));
    console.log("bissextile year : 2019 ->"+isLeap(2019));

}

function getNbDayTest(){

    console.log("Number of day of jan 2019 is "+getNbDay(2019,1));
    console.log("Number of day of feb 2019 is "+getNbDay(2019,2));
    console.log("Number of day of mar 2019 is "+getNbDay(2019,3));
    console.log("Number of day of apr 2019 is "+getNbDay(2019,4));
    console.log("Number of day of dec 2019 is "+getNbDay(2019,12));
    console.log("Number of day of nov 2016 is "+getNbDay(2016,11));
    console.log("Number of day of feb 2020 is "+getNbDay(2020,2));
    console.log("Number of day of feb 2016 is "+getNbDay(2016,2));

}

function getDayInWeekTest(){

    console.log("La date 3 fev 2019 est le jour "+getDayInWeek(2019,2,21)+"/7 dans la semaine");
    console.log("La date 9 jun 2019 est le jour "+getDayInWeek(2019,6,9)+"/7 dans la semaine");
    console.log("La date 10 jun 2019 est le jour "+getDayInWeek(2019,6,10)+"/7 dans la semaine");


}
function buildCalendarTest(){
    let calendar = document.getElementById("calendar")
    buildCalendar ( calendar,2020, 2,6);
}
