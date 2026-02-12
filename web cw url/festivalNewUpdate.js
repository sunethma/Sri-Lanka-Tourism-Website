
var i = 0;
var txt = 'Hello...!' +
    'Welcome To Sri Lanka Festival';

var speed = 100;

function myFestival() {


    if (i < txt.length) {
        document.getElementById("festivalH1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(myFestival, speed);
    }
}

