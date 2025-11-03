playerName=prompt("")

const playerNameChanger= document.querySelector("#playerName")
const playerHpChanger = document.querySelector("#playerHp")
const enemyHpChanger = document.querySelector("#enemyHp")

playerNameChanger.textContent=+playerName

let playerHp = 100
let enemyHp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}


function fightRound(){
        
    const playerRoll = rollDice()
    const enemyRoll = rollDice()

    if (playerRoll > enemyRoll) {
        console.log("player hit enemy")
        const playerHit = playerRoll - enemyRoll
        enemyHp -= playerHit
        console.log(enemyHp)
    }


    else if (playerRoll < enemyRoll) {
        console.log("enemy has skill")
        const enemyHit = enemyRoll - playerRoll
        playerHp -= enemyHit
        console.log(playerHp)
    }

    else {
        console.log("you both suck")
    }

    playerHpChanger.textContent= playerHp
    enemyHpChanger.textContent=enemyHp
}


const playButton = document.querySelector("#play-button")

playButton.addEventListener("click", fightRound)