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
L1.forEach(findTheBanana)
L2.forEach(findTheBanana)

if (window.location.href.includes("index.html")){
    greetingFunc();
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