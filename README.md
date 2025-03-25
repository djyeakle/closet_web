# 👕 Closet Outfitters
### Makes the backend database accessible to users, provides logins for individual access to personal databases.


## Installation and Setup
### Prerequisites:
- Node.js
- npm

### Steps:
```bash
git clone https://github.com/djyeakle/closet_web.git
cd closet_web
npm install
npm start
```

## Usage Instructions
- navigate to https://closetoutfitters.netlify.app
- login on the main page
  - <img width="987" alt="Screenshot 2025-03-25 at 10 13 32 AM" src="https://github.com/user-attachments/assets/0d02931f-e136-46ce-bd93-a63bce2acc17" />
- click on the "My Clothes" button to view users database
  - <img width="453" alt="Screenshot 2025-03-25 at 10 14 56 AM" src="https://github.com/user-attachments/assets/44824d0f-5ace-4701-856d-9c769880c25a" />
  - <img width="1466" alt="Screenshot 2025-03-25 at 10 15 40 AM" src="https://github.com/user-attachments/assets/e5cf8c07-e300-452a-863c-fe55da4b6bcd" />
- home button directs back to user's personal welcome page
- logout button directs back to the login page
- click on the "Add Clothing" button to add clothes to the user's database
  - <img width="885" alt="Screenshot 2025-03-25 at 10 17 41 AM" src="https://github.com/user-attachments/assets/75c5ff4d-d60a-4b5b-94ef-7106daea70d1" />
- if logged in as an administrator, more buttons are available
  - <img width="1462" alt="Screenshot 2025-03-25 at 10 19 11 AM" src="https://github.com/user-attachments/assets/2e228d66-8bf8-46d3-8b3d-c96dcd673381" />
- "All User Information" shows all usernames and passwords in the database
- "Create New Login" adds a login to the database
- "Change Login Information" will allow usernames and passwords to be changed

## API Integration
### Multiple endpoints are used, API_URL is different on each page
```bash
const API_URL = "https://closet-app.onrender.com/api/abclothes";
const API_URL = "https://closet-app.onrender.com/api/lainclothes";
const API_URL = "https://closet-app.onrender.com/api/clothes";

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

const API_URL = "https://closet-app.onrender.com/api/login";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(closet => [
        closet.accountID,
        closet.username,
        closet.password
    ]);
```
## Contributing Guidelines
- create a new branch for any contributions
- commit changes to that branch and submit a pull request

## License
- this project is licensed under the MIT license
