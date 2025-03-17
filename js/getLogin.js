const API_URL = "https://closet-app.onrender.com/api/login";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(closet => [
        closet.accountID,
        closet.username,
        closet.password
    ]);

    new gridjs.Grid({
        columns: ["AccountID","Username","Password"],
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
                border: "1px solic #ccc"
            },
            th:{
                "background-color": "#f4f4f4",
                "text-align": "left"
            },
            td: {
                "padding": "8px",
                "border-bottom": "1px solid #ddd"
            }
        }
    }).render(document.getElementById("grid-container"))
    
})
.catch(error => console.error('Error fetching data', error))