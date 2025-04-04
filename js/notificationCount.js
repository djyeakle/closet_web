let notificationCounter = document.querySelector('.notificationCount');
let sendNotifyButton = document.querySelector('.notifyBtn');

let count = 0;

updateDisplay();

sendNotifyButton.addEventListener("click", () => {
    count++;
    setTimeout(updateDisplay(), 5000);
});

function updateDisplay() {
    notificationCounter.innerHTML = `Notification Counter: ${count}`;
};