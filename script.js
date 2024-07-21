//your JS code here. If required.
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth()+1);
// console.log(date.getFullYear());

let clockSection = document.getElementById("timer");
function addZero(n){
    if(n < 10){
        return "0"+n;
    }
    return n;
}
function currentTime(){
    let date = new Date();

    //time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPM

    if(hours > 12){
        hours -= 12;
        amPM = "PM"
    }else if(hours == 0){
        hours = 1;
    }else if(hours < 12){
        amPM = "AM";
    }else if(hours == 12){
        amPM = "PM";
    }
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    //Date

    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();

    // console.log(day+"/"+month+"/"+year,hours+":"+minutes+":"+seconds,amPM);
    clockSection.innerHTML = day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+seconds+" "+amPM;
}

setInterval(currentTime, 1000);


