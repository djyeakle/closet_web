const API_URL = "https://closet-app.onrender.com/api/abclothes";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(closet => [
        closet.itemid,
        closet.type,
        closet.color,
        closet.size,
        closet.season,
        closet.rating
    ]);

    new gridjs.Grid({
        columns: ["ItemID","Type","Color","Size","Season","Rating"],
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