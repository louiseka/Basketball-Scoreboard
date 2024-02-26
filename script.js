let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

let homeScore = 0
let guestScore = 0

function homeOne() {
    homeScore = homeScore + 1
    homePoints.innerText = homeScore
}

function homeTwo() {
    homeScore = homeScore + 2
    homePoints.innerText = homeScore
}

function homeThree() {
    homeScore = homeScore + 3
    homePoints.innerText = homeScore
}

function guestOne() {
    guestScore = guestScore + 1
    guestPoints.innerText = guestScore
}

function guestTwo() {
    guestScore = guestScore + 2
    guestPoints.innerText = guestScore
}

function guestThree() {
    guestScore = guestScore + 3
    guestPoints.innerText = guestScore
}
