// Arrow Fuction

const rockpaperscissor = (player1,player2)=>{
    if(player1 == "rock"){
        if(player2 == "rock"){
            return "Draw"
        }
        if(player2 == "paper"){
            return "Player2 won"
        }
        if(player2 == "scissor"){
            return "Player1 won"
        }
    }
    if(player1 == "paper"){
        if(player2 == "rock"){
            return "Player 1 Wn"
        }
        if(player2 == "paper"){
            return "Draw"
        }
        if(player2 == "scissor"){
            return "Player2 won"
        }
    }
    if(player1 == "scissor"){
        if(player2 == "rock"){
            return "Player2"
        }
        if(player2 == "paper"){
            return "Player1 won"
        }
        if(player2 == "scissor"){
            return "Draw"
        }
    }
}

console.log(rockpaperscissor("rock","rock"));