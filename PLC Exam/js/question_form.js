// TIMEBAR
const totalDuration = 2 * 60 * 60 * 1000; // 2 hours
const progressBar = document.getElementById('progress-bar');
const timeRemainingText = document.getElementById('minute');

function startCountdown() {
    const startTime = Date.now(); // Start time
    const endTime = startTime + totalDuration; // End time

    const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeLeft = endTime - currentTime; // Current time

        const percentage = (timeLeft / totalDuration) * 100;
        progressBar.style.width = percentage + '%';

        // Update minute (p tag)
        updateTimeDisplay(timeLeft);

        // Stop the time
        if (timeLeft <= 0) {
            clearInterval(interval);
            progressBar.style.width = '0%';
            timeRemainingText.textContent = "00:00";
        }
    }, 1000); // update every second
}

function updateTimeDisplay(timeLeft) {
    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timeRemainingText.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}


window.onload = startCountdown;







// FOR CHOOSING ANSWERS
document.querySelectorAll('.answer').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.answer').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        option.querySelector('input[type="radio"]').checked = true;
    });
});