window.addEventListener('load',calculateTime);

function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm =  hour>=12 ? 'PM' : 'AM';
    var dayNames = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

    

    hour = hour < 10 ? '0'+hour :hour;

    minutes = minutes<10 ? '0'+minutes :minutes;

    seconds = seconds<10 ? '0'+seconds :seconds;

    document.getElementById("day").innerHTML=dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;

    setCounter(calculateTime,200)


}
