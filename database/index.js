const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: Number,
  user_id: Number,
  repo_name: String,
  repo_description: String,
  repo_url: String,
  forks: Number,
  watchers: Number
});

// making a model Repo from repoSchema

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  repos = Array.prototype.slice.call(repos);
  for (var i = 0; i < repos.length; i++) {
    // console.log('you made it')
    currRepo = repos[i]
    var newRepo = new Repo({
      repo_id: currRepo.id,
      user_id: currRepo.owner.id,
      repo_name: currRepo.name,
      repo_description: currRepo.description,
      repo_url: currRepo.url,
      forks: currRepo.forks,
      watchers: currRepo.watchers
    });
    Repo.find({repo_id: newRepo.id}, function(err,query){
      if(query === undefined){
        newRepo.save(function(err, data){
          if (err){
            return console.error('Error: ', err);
          }
        });
      }
    });
  }
}

var getRepos = function() {
  Repo.find(function(err, query) {
    if (err) {
      console.log('Error in retrieving repo') 
    }
    res.send(query);
  }).limit(25).sort({forks:-1})
}


module.exports.save = save;
module.exports.getRepos = getRepos;

