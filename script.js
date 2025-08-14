let paperImg = document.querySelector('.paper-img')
let rockImg = document.querySelector('.rock-img')
let secciorImg = document.querySelector('.seccior-img')
let userInput = document.querySelector('.user-input')
let result = document.querySelector('.result')
let choose;
let choices = ['Rock', 'Paper', 'Scissors']
let computerChoose;

paperImg.addEventListener('click', () => {
    paperImg.name = 'Paper'
    userInput.value = paperImg.name
    choose = userInput.value
    console.log(choose)
    showResult()
})
rockImg.addEventListener('click', () => {
    rockImg.name = 'Rock'
    userInput.value = rockImg.name
    choose = userInput.value
    console.log(choose)
    showResult()
})
secciorImg.addEventListener('click', () => {
    secciorImg.name = 'Scissors'
    userInput.value = secciorImg.name
    choose = userInput.value
    console.log(choose)
    showResult()
})

const showResult = () => {
    let yourTurn = document.createElement('h2')
    yourTurn.innerHTML = `You choose ${choose}`
    let choicesIndex = Math.floor(Math.random() * choices.length)
    console.log(choicesIndex)
    let computerChoice = choices[choicesIndex]

    let computerTurn = document.createElement('h2')
    computerTurn.innerHTML = `Computer Choose is ${computerChoice}`


    result.appendChild(yourTurn)
    result.appendChild(computerTurn)

    if (choose === computerChoice) {
        alert('Draw')
        setTimeout(() => {
            location.reload()
        }, 2000)

    } else if (
        (choose === 'Paper' && computerChoice === 'Rock') ||
        (choose === 'Rock' && computerChoice === 'Scissior') ||
        (choose === 'Scissior' && computerChoice === 'Paper')
    ) {
        result.style.backgroundColor === 'yellow'
        alert('you win')
        setTimeout(() => {
            location.reload()
        }, 2000)

    } else {
        alert('Computer wins')
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
}


