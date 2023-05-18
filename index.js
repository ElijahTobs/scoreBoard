const home1 = document.getElementById("h-1")
const home2 = document.getElementById("h-2")
const home3 = document.getElementById("h-3")
const guest1 = document.getElementById("g-1")
const guest2 = document.getElementById("g-2")
const guest3 = document.getElementById("g-3")
const reset = document.getElementById("reset")
let hsc = document.getElementById("h-score") 
let gsc = document.getElementById("g-score") 

let initialHomeScore = 0
let initialGuestScore = 0

hsc.textContent = initialHomeScore
gsc.textContent = initialHomeScore


home1.addEventListener("click", function() {
  initialHomeScore += 1
  hsc.textContent = initialHomeScore
} )

home2.addEventListener("click", function() {
  initialHomeScore += 2
  hsc.textContent = initialHomeScore
} )

home3.addEventListener("click", function() {
  initialHomeScore += 3
  hsc.textContent = initialHomeScore
} )

guest1.addEventListener("click", function() {
  initialGuestScore += 1
  gsc.textContent = initialGuestScore
} )

guest2.addEventListener("click", function() {
  initialGuestScore += 2
  gsc.textContent = initialGuestScore
} )

guest3.addEventListener("click", function() {
  initialGuestScore += 3
  gsc.textContent = initialGuestScore
} )

reset.addEventListener("click", function(){
  initialGuestScore = 0
  initialHomeScore = 0

  hsc.textContent = initialHomeScore
  gsc.textContent = initialGuestScore
})


