console.log("hello world");

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    var randChoice = Math.floor((Math.random() * 3));
    return choices[randChoice];
}
let userChoice = prompt("Choose Your Weapon: Rock, Paper or Scissor");
userChoice = userChoice.toLowerCase();

let computerChoice = getComputerChoice();

function playRound(userChoice, computerChoice){
    

    if(computerChoice === "Rock"){
        if(userChoice === "rock")
            return "It is a draw";
        if(userChoice === "paper")
            return "You Won";
        if(userChoice === "scissor")
            return "You Lost";
        


    }
    if(computerChoice === "Paper"){
        if(userChoice === "paper")
            return "It is a draw";
        if(userChoice === "Rock")
            return "You Lost";
        if(userChoice === "scissor")
            return "You Won!!!";

        
        
    }
    if(computerChoice === "Scissor"){
        
        if(userChoice === "scissor")
        return "It is a draw";
        if(userChoice === "rock")
        return "You Won!!!";
        if(userChoice === "paper")
        return "You Lost";
        
    }

}
console.log(computerChoice);
console.log(playRound(userChoice, computerChoice));