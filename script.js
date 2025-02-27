// Live Clock
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock(); // Initial Call

// Timer Functionality
let timerInterval;
function startTimer() {
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;
    let totalTime = minutes * 60 + seconds;
    
    if (totalTime <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    clearInterval(timerInterval);
    updateTimerDisplay(totalTime);

    timerInterval = setInterval(() => {
        totalTime--;
        updateTimerDisplay(totalTime);

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function updateTimerDisplay(timeLeft) {
    let displayMinutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    let displaySeconds = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `${displayMinutes}:${displaySeconds}`;
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timerDisplay').innerText = "00:00";
    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
}

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);
