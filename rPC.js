console.log("hello world");

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    var randChoice = Math.floor((Math.random() * 3));
    return choices[randChoice];
}


let computerChoice = getComputerChoice();
//returns the winner
function playRound(userChoice, computerChoice){
    

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

var userPoint = 0, computerPoint = 0;
//for(let i = 0; i < 5; i++){
  
    
    let userChoice = prompt("Choose Your Weapon: Rock, Paper or Scissor");
    userChoice = userChoice.toLowerCase();
  //  let computerChoice = getComputerChoice();
    
    console.log("Computer chose : " + computerChoice);
    console.log("User Chose : " + userChoice);
    let winner = playRound(userChoice, computerChoice);

    if(winner === "user"){
     //   console.log("You Won!!!");
        userPoint++;
    }
    else if(winner === "computer"){
     //   console.log("You Lost");
        computerPoint++;
    }
    
    

//}


if(userPoint > computerPoint)
    console.log("You Won!!!");
else if (userPoint < computerPoint)
    console.log("You Lost")
else if(userPoint === computerPoint){
    console.log("It is a Draw");
}
window.addEventListener("click",function(e){
    console.log(e);
   const selectd =document.querySelector(`button[id="${e.target.id}"]`);
    console.log(selectd);
}
);