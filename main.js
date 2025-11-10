playerName=prompt()






const playButton = document.querySelector("#play-button")
const playerNameChanger= document.querySelector("#playerName")
const playerHpChanger = document.querySelector("#playerHp")
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
    "are just better and you deal :" ,
   //nope 
]



const enemy =  {
    "name": "goblin",
    "hp": 40,
    "attack":0.5
}




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

    playerHpChanger.textContent= playerHp
    enemyHpChanger.textContent= enemy.hp

    if (playerHp < 1 || enemy.hp < 1){
        playButton.disabled = true

    }
    else if (playerHp < 30)
        playerHpChanger.classList.add("hp-low")

    playerHpChanger.textContent = playerHp < 1 ? 0 : playerHp
    enemyHpChanger.textContent = playerHp < 1 ? 0 : enemy.hp
}



playButton.addEventListener("click", fightRound)