var x = 5; 
var y = 7;
var z = x + y; 
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B; 
console.log(C);
SumNPrint(x, y);
SumNPrint(A, B);

if (C.length>z){
    console.log(C);
} else if (C.length<z){
    console.log(z);
} else {
    console.log("good job!");
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];
//L1.forEach(findTheBanana)
//L2.forEach(findTheBanana)

if (window.location.href.includes("index.html")){
    greetingFunc();
}

if (window.location.href.includes("fun.html")){
    getAdvice();
}

function SumNPrint(x1, x2){
    var x3 = x1+x2
    console.log(x3);
}

function findTheBanana(item){
    if (item == "Banana"){
        alert("We found a banana in the first array");
    }
}

function greetingFunc(){
    var d = new Date();
    var h = d.getHours();

    if (h<5){
        document.getElementById("greetings").innerHTML = "Good night, I am Katherine";
    } else if (h<12){
        document.getElementById("greetings").innerHTML = "Good morning, I am Katherine";
    } else if (h<18){
        document.getElementById("greetings").innerHTML = "Good afternoon, I am Katherine";
    } else if (h<20){
        document.getElementById("greetings").innerHTML = "Good evening, I am Katherine";
    } else {
        document.getElementById("greetings").innerHTML = "Good night, I am Katherine";
    }
}

function addYear(){
    var d = new Date(); 
    var y = d.getFullYear();
    document.getElementById("copyYear").innerHTML = y + " © Katherine Geng";
}

/*function showList(){
    document.getElementById("see-more").style.display = "none";
    document.getElementById("fun-list").style.display = "block";
}*/

$("#read-less").click(function(){
    $("#full-intro").hide();
    $("#read-less").hide();
    $("#read-more").show();
    $("#intro").show();
});

$("#read-more").click(function(){
    $("#full-intro").show();
    $("#read-less").show();
    $("#read-more").hide();
    $("#intro").hide();
});

function validate(){
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("ValidateMsg");

    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()){
        msg.innerHTML = "Please fill out the form correctly so I can get back to you";
    }
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
        console.error("Error fetching advice: ", error);
        document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
    });
}