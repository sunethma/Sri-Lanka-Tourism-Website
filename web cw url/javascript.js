var imageSources = ["students3/additional-assests/images/market.jpg", "students3/additional-assests/images/variety.jpg","students3/additional-assests/images/beverages.jpg","students3/additional-assests/images/TamilFood.jpeg","students3/additional-assests/images/spices3.jpg",
    "students3/additional-assests/images/spices_1.jpg","students3/additional-assests/images/tea1.jpg"]

var index = 0;
document.getElementById("class").width="1505"
document.getElementById("class").height="665"

setInterval (function(){
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("class").src = imageSources[index];
    index++;
} , 2000);

