Math.floor(Math.random())

Math.random


const playerName = "Billy"

let playerHp = 100
let enemyHp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}


console.log(rollDice)


let playerRoll = rollDice()
let enemyRoll = rollDice()

    function fightRound(){

    if (playerRoll > enemyRoll) {
        console.log("player dose not have skill issue")
        let playerHit = playerRoll - enemyRoll
        enemyHp -= playerHit
        console.log(enemyHp)
    }


    else if (playerRoll < enemyRoll) {
        let enemyHit = enemyRoll - playerRoll
        playerHp -= enemyHit
        console.log(playerHp)
    }

    else {
        console.log("you both suck")
    }
}