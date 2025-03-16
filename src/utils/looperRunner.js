const https = require('https');

const runLooper = () => {
  setInterval(() => {
    https.get("https://pothoczuto-backend.onrender.com/");
    https.get("hhttps://gazi-tanvir-portfolio.onrender.com/");
  }, 45 * 1000);
};

module.exports = {runLooper};
