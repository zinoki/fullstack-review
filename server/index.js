const express = require('express');
let app = express();
const bodyParser = require('body-parser');
var fromGithub = require('../helpers/github.js');
var displayFromDB = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text())
app.post('/repos', function (req, res) {
  var repos = fromGithub.getReposByUsername(req.body);


  res.send('Success!')


  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/', function (req, res) {
  displayFromDB.getRepos(function(top25) {
    res.send(top25);
  })
});

app.get('/repos', function (req, res) {
  displayFromDB.getRepos(function(top25) {
    res.send(top25);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

