playerName="addwa"


const playButton = document.querySelector("#play-button")
const stopButton = document.querySelector("#stop-button")
const playerNameChanger= document.querySelector("#playerName")
const playerHpChanger = document.querySelector("#playerHp")
const enemyNameChanger= document.querySelector("#enemyName")
const enemyHpChanger = document.querySelector("#enemyHp")


playerNameChanger.textContent=playerName

let playerHp = 100


const combatLogElement = document.querySelector("#combat-log")

function log(msg,type){
    const li = document.createElement("li")

    if(type){
        li.classList.add(type)
    }

    li.textContent = msg
    combatLogElement.appendChild(li)

    if(combatLogElement.childNodes.length>10){
        combatLogElement.removeChild(combatLogElement.firstChild)
    }
}



const playerAttack = [
    "just better and you deal: " ,
   //nope 
]


function spawnEnemy() {
    debugger

    const enemyNames = ["Goblin", "Orc", "Troll", "SANS", "ECIN"]
    const name = enemyNames[Math.floor(Math.random() * enemyNames.length)]
    const attack = Math.ceil(Math.random() * 2)
    const hp = Math.ceil(Math.floor(Math.random() * 10 + 10)/attack)
    
    return new Enemy(name, hp, attack)
}

class Enemy {
    constructor(name, hp,attack) {
        this.name = name
        this.hp = hp
        this.attack= attack
    }
}


let enemy = spawnEnemy()


enemyNameChanger.textContent=enemy.name

function rollDice() {
    return Math.ceil(Math.random() * 6)
}


function fightRound(){
    const playerRoll = rollDice()
    const enemyRoll = rollDice()

    if (playerRoll > enemyRoll) {
        log( " have hit the enemy because your just better", "player")
        const playerHit = playerRoll - enemyRoll
        enemy.hp -= playerHit
        log(playerHit)
    }


    else if (playerRoll < enemyRoll) {
        log("enemy has skill", "enemy")
        const enemyHit = enemyRoll - playerRoll
        playerHp -= enemyHit*enemy.attack
        log(enemyHit)
    }

    else {
        log("you both suck","pain")
    }



    if (playerHp < 1 || enemy.hp < 1){
        playButton.disabled = true
    }

    else if (playerHp < 30)
        playerHpChanger.classList.add("hp-low")

    playerHpChanger.textContent = playerHp < 1 ? 0 : playerHp
    enemyHpChanger.textContent = playerHp < 1 ? 0 : enemy.hp
}


let last = 0
function gameLoop(timestamp) {
    if (timestamp >= last + 500) {
        fightRound()
        last = timestamp;
    }

 if (playerHp < 1) {
        playButton.disabled = true
        log(`you have deep skill issue ,and ${enemy.name} has won ???`, "enemy")
        window.cancelAnimationFrame(round)
    } else {
        round = window.requestAnimationFrame(gameLoop)
    }

    if (enemy.hp < 1) {
        log(` you have slain ${enemy.name}! wow im so impress :/` , "player")
        enemy = spawnEnemy()
        enemyNameChanger.textContent=enemy.name
        log(`well you need more to kill her you have ${enemy.name} go kill him yea`, "enemy")
        const heal = Math.floor(Math.random() * 20 + 10)
        log(`you scream MEDIC! and the medic heal you ${heal} hp! yup so true`, "player")
        playerHp += heal
    } else if (playerHp < 30) {
        playerHpElement.classList.add("low-hp")
    }

}





function stop() {
    console.log("stop")
    window.cancelAnimationFrame(round)
}


playerHpChanger.textContent= playerHp
enemyHpChanger.textContent= enemy.hp
playButton.addEventListener("click", gameLoop)
stopButton.addEventListener("click", stop)


