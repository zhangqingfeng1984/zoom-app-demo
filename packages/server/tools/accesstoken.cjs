var request = require('request');
var your_app_client_id = "DNmtPfzqSVoGL0r6B0Ag"
var your_app_client_secret = "F0cp0Z3wvlySYznXhI6SPh955gyk8Yej"

async function getAccessToken(){
  return new Promise((resolve,reject)=>{
    var options = {
      method: 'POST',
      url: 'https://zoom.us/oauth/token?grant_type=client_credentials',
      headers: {
        /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
         **/
        Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64'),
      },
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      resolve(JSON.parse(body).access_token)
    });
  })
}

function me(token){
  var options = {
    method: 'GET',
    // Use the `me` keyword for the request below.
    url: 'https://api.zoom.us/v2/users/me',
    headers: {
      authorization: `Bearer ${token}`, // Do not publish or share your token with anyone.
    },
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log("me", body);
  });
}

const main = async ()=>{
  const token = await getAccessToken()
  console.log("token:", token)
  await me(token)
}

main();