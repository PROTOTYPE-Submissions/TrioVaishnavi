let credits = 0;

function incrementCredit() {
    credits++;
    updateCreditDisplay();
}

function updateCreditDisplay() {
    document.getElementById('creditCount').textContent = credits;
}

let progress = 0;

function incrementProgress() {
    progress = Math.min(progress + 10, 100); // Increment by 10% up to a maximum of 100%
    updateProgressDisplay();
}

function updateProgressDisplay() {
    document.getElementById('progressCount').textContent = `${progress}%`;
}
