let requestBody = {
  grant_type: "client_credentials",
  client_id: process.env.API_KEY,
  client_secret: process.env.API_SECRET,
};

let bearerToken = "";

const fetchToken = async () => {
  const result = await fetch(`https://api.petfinder.com/v2/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      bearerToken = response.access_token;
    });
};
fetchToken();

module.exports = {
  API_BASE_URL: "https://api.petfinder.com/v2/animals/",
  bearerToken: bearerToken,
};
