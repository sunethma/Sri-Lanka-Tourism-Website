document.getElementById("editButton").style.display = 'none';
document.getElementById("sendButton").style.display = 'none';
let cars = [];

function showInput() {

    //validation===============
    var fName1= document.getElementById("fname").value;
    var eMail= document.getElementById("E-mail").value;


    var details= document.getElementById("Details").value;

    let subject1;

    if(document.getElementById('html').checked){
        subject1 = document.getElementById('html').value;
    } else if(document.getElementById('css').checked){
        subject1 = document.getElementById('css').value;
    } else if(document.getElementById('javascript').checked){
        subject1 = document.getElementById('javascript').value;
    }




    if (fName1==""){
        alert("Please Enter Your Name");
    }
   else if (eMail==""){
        alert("Please Enter Your Email");
    }
    else if (subject1==null){
        alert("Please Select Rsdio Buttons");
    }
    else if (details==""){
        alert("Please Enter Your Details");
    }else {
        //Set To textArea===================================

        document.getElementById('display').innerHTML = ("Name:"+ document.getElementById("fname").value);
        document.getElementById('display3').innerHTML = ("E-mail:"+ document.getElementById("E-mail").value);
        document.getElementById('display2').innerHTML = document.getElementById("display2").innerHTML = "Subject:"+subject1;
        document.getElementById('display4').innerHTML = ("Details:"+ document.getElementById("Details").value);
        //document.getElementById('display5').innerHTML = ("Subject:"+ document.getElementById("user_input5").value);



        //set To Array====================================
         var fName= document.getElementById("fname").value;
        var eMail= document.getElementById("E-mail").value;
        var subject= subject1;
        var details= document.getElementById("Details").value;

        cars.push(fName);
        cars.push(eMail);
        cars.push(subject);
        cars.push(details);

        //Emty to the input feild=================================
        document.getElementById("fname").value = "";
        document.getElementById("E-mail").value = "";

        document.getElementById("Details").value = "";
        document.getElementById("editButton").style.display = 'inline';
        document.getElementById("sendButton").style.display = 'inline';
    }

}

function edit(){

    //Again set to the text feild=====================
    document.getElementById("fname").value = cars[0];
    document.getElementById("E-mail").value = cars[1];
    //document.getElementById("Subject").value = cars[2];
    document.getElementById("Details").value = cars[3];
    //emty array
    cars = [];

    //Emty to the textArea=============================
    document.getElementById('display').innerHTML="";
    document.getElementById('display3').innerHTML="";
    document.getElementById('display2').innerHTML="";
    document.getElementById('display4').innerHTML="";

    document.getElementById("editButton").style.display = 'none';
    document.getElementById("sendButton").style.display = 'none';

}

 function showAlert() {
   /*  document.getElementById('form').submit();*/

     alert("Your Query Form Has Sent to Your Email:-"+ cars[1]);
     document.getElementById('form').submit();
    //After click send button cleaar the textArea===================
     document.getElementById('display').innerHTML="";
     document.getElementById('display3').innerHTML="";
     document.getElementById('display2').innerHTML="";
     document.getElementById('display4').innerHTML="";
     document.getElementById("editButton").style.display = 'none';
     document.getElementById("sendButton").style.display = 'none';

 }



/*////Student2 page*/


var i1 = 0;
var txt1 = 'Hi!' +
    'Please Fill The Query Form';
var speed1 = 100;

function myStudent() {
    if (i1 <txt1.length) {
        document.getElementById("queryForm1").innerHTML += txt1.charAt(i1);
        i1++;
        setTimeout(myStudent, speed1);
    }
}

