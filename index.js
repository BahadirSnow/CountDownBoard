let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeTotal = 0
let guestTotal = 0
const timerDisplay = document.getElementById('timer');
let countdown;

function addHomeOne (){
    homeTotal += 1
    homeScore.innerText = homeTotal
}

function addHomeTwo (){
    homeTotal += 2
    homeScore.innerText = homeTotal
}

function addHomeThree (){
    homeTotal += 3
    homeScore.innerText = homeTotal
}

function addGuestOne (){
    guestTotal += 1
    guestScore.innerText = guestTotal
}

function addGuestTwo (){
    guestTotal += 2
    guestScore.innerText = guestTotal
}

function addGuestThree (){
    guestTotal += 3
    guestScore.innerText = guestTotal
}

function newGame() {
      guestTotal = 0;
      homeTotal = 0;
      homeScore.innerText = homeTotal;
      guestScore.innerText = guestTotal;
      clearInterval(countdown); // Stop the previous countdown if it's running
      timerDisplay.textContent = '00:00';
      const startButton = document.getElementById('startButton');
      startButton.disabled = false;
    }

    function startCountdown(minutes) {
      const startButton = document.getElementById('startButton');
      startButton.disabled = true;

      let seconds = minutes * 60;
      displayTime();

      countdown = setInterval(function() {
        seconds--;
        displayTime();

        if (seconds <= 0) {
          clearInterval(countdown);
          timerDisplay.textContent = "Time's up!";
          startButton.disabled = false;
        }
      }, 1000);

      function displayTime() {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }
    }

    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
      const minutes = parseInt(prompt('Enter the countdown time in minutes:'));
      if (!isNaN(minutes) && minutes > 0) {
        newGame(); // Reset the game before starting a new countdown
        startCountdown(minutes);
      } else {
        alert('Invalid input. Please enter a valid number of minutes.');
      }
    });