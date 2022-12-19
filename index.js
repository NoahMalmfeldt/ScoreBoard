let scoreHome = 0
let scoreGuest = 0 

homeScore.textContent = scoreHome

guestScore.textContent = scoreGuest

function increment1Home() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function increment2Home() {
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function increment3Home() {
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function increment1Guest() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function increment2Guest() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function increment3Guest() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    homeScore.textContent = scoreHome
    guestScore.textContent = scoreGuest
}



console.log(scoreHome)