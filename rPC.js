console.log("Pick a option:");

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    var randChoice = Math.floor((Math.random() * 3));
    return choices[randChoice];
}

function getUserChoice(callback){
    return new Promise(function (resolve){
    window.addEventListener("click",function(e){
        //console.log(e);
        const selected =document.querySelector(`button[id="${e.target.id}"]`);
       let userSelected = selected.textContent;
        
       resolve(userSelected);
      
    });
   
    });
}

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

function outputWinner(){
    if(userPoint > computerPoint)
        console.log("You Won!!!");
    else if (userPoint < computerPoint)
        console.log("You Lost")
    else if(userPoint === computerPoint){
        console.log("It is a Draw");
    }
    }

var userPoint = 0, computerPoint = 0;
function playGame(userChoice){
//var userPoint = 0, computerPoint = 0;


    if(userChoice)
        userChoice = userChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    
    console.log("Computer chose : " + computerChoice);
    console.log("User Chose : " + userChoice);
    let winner = decideWinner(userChoice, computerChoice);

    if(winner === "user"){
     //   console.log("You Won!!!");
        userPoint++;
    }
    else if(winner === "computer"){
     //   console.log("You Lost");
        computerPoint++;
    }
    
    

}

async function runMultipleTimes(){
    for(let i = 0; i < 5; i++){
        const userSelected = await getUserChoice();
        playGame(userSelected);
    }
    outputWinner();

}
runMultipleTimes();





