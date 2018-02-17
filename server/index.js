const express = require('express');
let app = express();
const bodyParser = require('body-parser');
var helpers = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text())
app.post('/repos', function (req, res) {
  
  // res.send(req.body);
  // res.send(req.body)
  var repos = helpers.getReposByUsername(req.body);
  res.send(repos)


  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  res.send('hi')
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

