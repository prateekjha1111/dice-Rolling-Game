
var btn = document.querySelector(".role");
var random1;  
var random2; 

btn.addEventListener("click", function(){
    func1();
    func2();
});

// dice1
function func1(){
    var dice1 = document.querySelectorAll(".dice")[0];
    var image1 = document.querySelectorAll(".img1")[0];
    random1 = Math.floor((Math.random()*6)+1); 
    var randomImage1 = "images/dice"+random1+".png";
    image1.setAttribute("src", randomImage1);
}

// dice2
function func2(){
    var dice2 = document.querySelectorAll(".dice")[1];
    var image2 = document.querySelectorAll(".img2")[0];
    random2 = Math.floor((Math.random()*6)+1); 
    var randomImage2 = "images/dice"+random2+".png";
    image2.setAttribute("src", randomImage2);
}

// Check the result
btn.addEventListener("click", function(){
    if(random1 > random2) {
        document.querySelector("h1").innerHTML = "Player 1 wins."
    }
    else if(random2 > random1) { 
        document.querySelector("h1").innerHTML = "Player 2 wins."
    }
    else { 
        document.querySelector("h1").innerHTML = "It's a tie."
    }
});