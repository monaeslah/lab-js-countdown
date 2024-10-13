const DURATION = 10 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = null // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBtn = document.querySelector('#start-btn')
let showTime = document.querySelector('#time')
let showToastBtn = document.querySelector('#toast')
const showBtn = showToastBtn.classList
let closetoastBtn = document.querySelector('#close-toast')
let toastMessage = document.querySelector('#toast-message')

// ITERATION 2: Start Countdown
startBtn.onclick = startCountdown
function startCountdown () {
  startBtn.disabled = true
  showTime.innerHTML = remainingTime

  showToast('⏰ Final countdown! ⏰')
  timer = setInterval(() => {
    remainingTime--
    showTime.innerHTML = remainingTime
    if (remainingTime === 5) {
      showToast('Start the engines! 💥')
    } else if (remainingTime <= 0) {
      clearInterval(timer)
      showToast('Lift off! 🚀')
      remainingTime = DURATION
      showTime.innerHTML = remainingTime
      startBtn.disabled = false
    }
  }, 1000)
  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast (message) {
  toastMessage.innerHTML = message

  showBtn.add('show')
  setTimeout(() => {
    showBtn.remove('show')
  }, 3000)
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closetoastBtn.onclick = function closeToast () {
    showBtn.remove('show')
    startCountdown()
  }
  // Your code goes here ...
}
