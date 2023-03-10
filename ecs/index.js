const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status', (req, res) => {
  return res.send({ message: "Demo service is fancy"});
})

app.get('/env', (req, res) => {
  return res.send({ message: process.env.ACCESS_KEY_ID})
})

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});