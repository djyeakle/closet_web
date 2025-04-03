var notificationCount = 0;

document.getElementById("notifyBtn").addEventListener("click", () => {
    const message = document.getElementById("message").value.trim();
    const title = document.getElementById("title").value.trim();

    if(!message || !title) {
        alert("Please enter a message before clicking the button.");
        return;
    }

    if(!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
        return;
    }

    if(Notification.permission === "granted") {
        showNotification(title, message);
    } else if(Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if(permission === "granted") {
                showNotification(title, message);
            }
        });
    }
});

function showNotification(title, message) {
    new Notification(title, {
        body: message,
        icon: "./images/coatHanger.png"
    });   
    
    notificationCount++;
    document.getElementById("notificationCount").textContent(`Notification Count: ${notificationCount}`);
}