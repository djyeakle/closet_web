let notificationCounter = document.querySelector('.notificationCount');
let sendNotifyButton = document.querySelector('.notifyBtn');

let count = 0;

updateDisplay();

sendNotifyButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    notificationCounter.innerHTML = `Notification Counter: ${count}`;
};