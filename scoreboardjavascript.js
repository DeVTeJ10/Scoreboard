let homeCount = 0
let awayCount = 0
let homeCounts = document.getElementById("home-scores")
let awayCounts = document.getElementById("away-scores")


function add1(){
   homeCount = homeCount + 1
   homeCounts.innerText = homeCount
}
function add2(){
   homeCount = homeCount + 2
   homeCounts.innerText = homeCount
}
function add3(){
   homeCount = homeCount + 3
   homeCounts.innerText = homeCount
}

function add1a(){
    awayCount = awayCount + 1
    awayCounts.innerText = awayCount
}
function add2a(){
    awayCount = awayCount + 2
    awayCounts.innerText = awayCount
}
function add3a(){
    awayCount = awayCount + 3
    awayCounts.innerText = awayCount
}

function newgame(){
    homeCount = 0
    awayCount = 0
    homeCounts.innerText = homeCount
    awayCounts.innerText = awayCount
}
    