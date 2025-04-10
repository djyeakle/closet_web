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

        } else if(data.accountID == 1 && data.username == "djyeakle" && data.password == "vbnmrno4") {
            window.open(`https://closetoutfitters.netlify.app/${data.username}login`);

        } else if(data.accountID == 11 && data.username == "aperenovich" && data.password == "bagel444") {
            window.open(`https://closetoutfitters.netlify.app/${data.username}login`);

        } else if(data.accountID == 28 && data.username == "amhalbleib" && data.password == "fleeber") {
            window.open(`https://closetoutfitters.netlify.app/${data.username}login`);

        } else {
            $.toaster({priority : 'danger', title : 'Error', message : 'Oops something broke'});
        }
    })});