console.log("Pick a option:");
//returns a random choice
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    var randChoice = Math.floor((Math.random() * 3));
    return choices[randChoice];
}

function getUserChoice(){
    return new Promise(function (resolve){
    window.addEventListener("click",function(e){
        //console.log(e);
        const selected =document.querySelector(`button[id="${e.target.id}"]`);
       let userSelected = selected.innerHTML;
        
       resolve(userSelected);
      
    });
   
    });
}
//decides who wins the current round and returns the winner
function decideWinner(userChoice, computerChoice){
    

    if(computerChoice === "Rock"){
        if(userChoice === "rock")
            return "draw";
        if(userChoice === "paper")
            return "user";
        if(userChoice === "scissor")
            return "computer";
        


    }
    if(computerChoice === "Paper"){
        if(userChoice === "paper")
            return "draw";
        if(userChoice === "rock")
            return "computer";
        if(userChoice === "scissor")
            return "user";

        
        
    }
    if(computerChoice === "Scissor"){
        
        if(userChoice === "scissor")
        return "draw";
        if(userChoice === "rock")
        return "user";
        if(userChoice === "paper")
        return "computer";
        
    }

}

//used to output the winner of the current round;
function outputWinner(){
    const divWinner = document.querySelector("#winner-display");

    if(userPoint > computerPoint){
        divWinner.innerHTML = "You won!!!";
        console.log("You Won!!!");
    }
    else if (userPoint < computerPoint){ 
        console.log("You Lost")
        divWinner.innerHTML = "You Lost, loser";   

    }
    else if(userPoint === computerPoint){
        divWinner.innerHTML = "It is a Draw";  
    }
    }

var userPoint = 0, computerPoint = 0;
var highestPoint = 0;
function playGame(userChoice){
    if(userChoice)
        userChoice = userChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    
    const divUser = document.querySelector("#userDecision");
    divUser.innerHTML = userChoice;

    const divComp = document.querySelector("#computerDecision");
    divComp.innerHTML = computerChoice;

    const divUserScore = document.querySelector("#user-points");

    const divCompScore = document.querySelector("#computer-points");
    divComp.innerHTML = computerChoice;
    
    console.log("Computer chose : " + computerChoice);
    console.log("User Chose : " + userChoice);

    let winner = decideWinner(userChoice, computerChoice);

    if(winner === "user"){
    
        userPoint++;
        divUserScore.innerHTML = userPoint;
    }
    else if(winner === "computer"){
   
        computerPoint++;
        divCompScore.innerHTML = computerPoint;
    }
    
    if(userPoint > computerPoint) highestPoint = userPoint;
    else highestPoint = computerChoice;

    //runMultipleTimes(highestPoint);

}

async function runMultipleTimes(point){
    for(let i = 0; i < 5; i++){
        const userSelected = await getUserChoice();
        playGame(userSelected);
    }
    outputWinner();

}
runMultipleTimes();

//decision board




