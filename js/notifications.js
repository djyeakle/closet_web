let notificationCount = 0;

document.getElementById("notifyBtn").addEventListener("click", async () => {
    const message = document.getElementById("message").value.trim();
    const title = document.getElementById("title").value.trim();

    if(!message || !title) {
        alert("Please enter a title and message before clicking the button.");
        return;
    }

    if(!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
        return;
    }

    let permission = Notification.requestPermission();

    if(permission === "default") {
        permission = await Notification.requestPermission();
    } 

    if(permission === "granted") {
        setTimeout(() => showNotification(title, message), 5000);
    } else {
        alert("You need to allow notifications to receive them.")
    }
});

function showNotification(title, message) {
    if(Notification.permission === "granted") {
            new Notification(title, {
            body: message,
            icon: "./images/coatHanger.png"
        });     
    
        notificationCount++;
        document.getElementById("notificationCount").textContent = `Notifications Sent: ${notificationCount}`;
    }
    
}