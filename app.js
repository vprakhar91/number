var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");

var result = Math.floor(Math.random()*10) - 1;
var no_of_guesses = 0;
var guesses_num = [];

function play(){
    var user_guess = document.querySelector("#guess").value;
    if(user_guess < 1 || user_guess > 10){
        alert ("Enter number between 1-100");
    } 
    else{
        guesses_num.push(user_guess);
        no_of_guesses = no_of_guesses + 1;
        if(user_guess < result){
            msg1.textContent = "Your guess is Low";
            msg2.textContent = "Number of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Numbers are : " + guesses_num;
        }else if(user_guess > result){
            msg1.textContent = "Your guess is High";
            msg2.textContent = "Number of Guesses : " + no_of_guesses;
            msg3.textContent = "Gussed Numbers are : " + guesses_num; 
        }else if(user_guess == result){
            msg1.textContent = "You won" ;
            msg2.textContent = "The Number is: " + result;
            msg3.textContent = "You Guessed :" + no_of_guesses + "Guesses";
        }
    }
}