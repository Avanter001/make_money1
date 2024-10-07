const fetch = require('node-fetch'); // Import node-fetch
const keep_alive = require('./keep_alive.js')
const url = "https://api.adsgram.ai/event?type=reward&trackingtypeid=14&record=IiQ4NDdmNzg2ZS0zMGVlLTQwNDYtOGQ4Ny03MWU3MWM4ZTMwODEqAzE0NzIDMTU0OgY2MTQwMzVAjP6PuAZKCjEwNzk1MDM0MjFSBDM4NTJaGmh0dHBzOi8vYm90LnRvbmNpcmNsZS5vcmcvYgExagR3ZWJhcgJlbooBAjE0kgEENzI2NJoBDTMwNzAxNy41MDAwMDCqAQgxLjAwMDAwMLIBATa6AQs5NC4yNDIuNTAuOcIBAnJ1";

function makeMoney() {
  fetch(url)
    .then((res) => {
      console.log(res.status === 200 ? "Success" : "Failed");
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

setInterval(makeMoney, 60 * 1000);
console.log("Started..");
makeMoney();
client.login(process.env.TOKEN);
