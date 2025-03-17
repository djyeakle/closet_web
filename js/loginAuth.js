document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.querySelector('.form');

    if (!formEl) {
        console.error("Form element not found!");
    }


    formEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);

        //validate that the fields have data results
        if(data.accountID == "" || data.username == "" || data.password == "") {
            $.toaster({priority : 'danger', title : 'Error', message : 'Oops something broke'});
        }
            fetch(`https://closet-app.onrender.com/api/login/${data.accountID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    accountID: data.accountID,
                    username: data.username,
                    password: data.password
                })
            })
            .then(response => {
                if (!response.ok) {
                    // If the server responds with an error (status other than 2xx)
                    return Promise.reject("Server error. Please try again later.");
                }
                return response.json();  // Parse response as JSON
            })
            .then(result => {
                if (result.success) {
                    // Redirect the user to their login page if authentication is successful
                    window.open(`http://127.0.0.1:5500/${data.username}Login.html`);
                } else {
                    // Handle invalid credentials or failed login attempt
                    $.toaster({ priority: 'danger', title: 'Error', message: result.message || 'Invalid login credentials.' });
                }
            })
            .catch(error => {
                // Handle fetch errors (network issues, server errors, etc.)
                $.toaster({ priority: 'danger', title: 'Error', message: error || 'An error occurred while logging in.' });
            });
        });
    });