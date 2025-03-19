const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    //validate that the fields have data results
    if(data.itemid == "" || data.type == "" || data.color == "" || data.season == "" || data.rating == "") {
        $.toaster({priority : 'danger', title : 'Error', message : 'Oops something broke'});
    }
    else {
        fetch('https://closet-app.onrender.com/api/clothes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({priority : 'success', title : 'Item Added', message : 'Awesome Find!'});
    }

});