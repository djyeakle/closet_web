const API_URL = "https://closet-app.onrender.com/api/login";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(closet => [
        closet.accountID,
        gridjs.html(`<span data-column-id="username" data-account-id="${closet.accountID}">${closet.username}</span>`),
        closet.password,
        gridjs.html(`<input type='password' id='pass-${closet.accountID}' placeholder='New Password'> <button onclick='updatePassword(${closet.accountID})'>Update</button>`)
    ]);

    new gridjs.Grid({
        columns: ["AccountID", "Username", "Password", "Actions"],
        data: formattedData,
        search: true,
        sort: true,
        pagination: {
            enabled: true,
            limit: 5
        },
        resizable: true,
        style: {
            table: {
                border: "1px solid #ccc"
            },
            th: {
                "background-color": "#f4f4f4",
                "text-align": "left"
            },
            td: {
                "padding": "8px",
                "border-bottom": "1px solid #ddd"
            }
        }
    }).render(document.getElementById("grid-container"));
})
.catch(error => console.error('Error fetching data', error));

function updatePassword(accountID) {
    const newPassword = document.getElementById(`pass-${accountID}`).value;
    if (!newPassword) {
        alert("Please enter a new password.");
        return;
    }

    const usernameCell = document.querySelector(`span[data-column-id="username"][data-account-id="${accountID}"]`);
    const currentUsername = usernameCell ? usernameCell.textContent.trim() : null;

    if (!currentUsername) {
        alert("Username not found for this account.");
        return;
    }

    fetch(`https://closet-app.onrender.com/api/login/${accountID}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
            username: currentUsername,
            password: newPassword 
        }),
        mode: 'cors'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to update password");
        }
        return response.json();
    })
    .then(data => {
        alert("Password updated successfully");
        location.reload(); // Refresh to show updated password
    })
    .catch(error => alert("Error updating password: " + error));
}