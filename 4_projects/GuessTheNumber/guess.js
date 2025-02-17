let randomNumber= parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

let p=document.createElement('p')
let prevGuess=[]
let numGuess=0
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a valid number')
    }
    else if(guess>100){
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage('Number is low')
    }
    else if(guess>randomNumber){
        displayMessage('Number is high')
    }
}

function displayGuess(guess){
    userInput.value=''
    if(numGuess<10){
        guessSlot.innerHTML+=`${guess},`
    }
    else{
        guessSlot.innerHTML+=`${guess}`
    }
    numGuess++;
    if(10-numGuess>=1){
        remaining.innerHTML=`${10-numGuess}`
    }
    else{
        remaining.innerHTML='0'
    }
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','') //to stop user from entering input
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start new game</h2>'
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber= parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=0
        guessSlot.innerHTML=''
        remaining.innerHTML=10
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}



