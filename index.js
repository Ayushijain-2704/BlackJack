let cards=[]
let sum=0
let hasBlackJack = false
let isAlive =false
let message=""



let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")


let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 )+1//1-13
    if (randomNumber===1){
        return 11

    }else if (randomNumber>10 ){
    return 10

} else {
    return randomNumber
}
}

function startGame(){
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
if (sum <=20) {
    message="Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message="Wohoo! You've got Blackjack! 🥳"
    hasBlackJack=true
} else  {
    message="You're out of the game! 😭"
    isAlive=false

}
// render out firstCard and secondCard
//cardEl.textContent="Card :"+cards[0] +" "+cards[1] 
// render out all the cards

    cardEl.textContent ="Cards :"
    for (let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
}
sumEl.textContent="Sum :"+sum
messageEl.textContent=message
console.log(messageEl)}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }




}