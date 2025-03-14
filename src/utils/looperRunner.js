const https = require('https');

const runLooper = () => {
  setInterval(() => {
    https.get("https://pothoczuto-backend.onrender.com/");
  }, 45 * 1000);
};

module.exports = {runLooper};
