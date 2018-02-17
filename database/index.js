const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  size: Number,
  name: String,
  repos_url: String
});

// making a model Repo from repoSchema
let Repo = mongoose.model('Repo', repoSchema);

// let save = (/* TODO */) => {
//   var newRepo = new Repo();
//   newRepo.save(function(err, newRepo) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(newRepo);
//   })
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

module.exports.save = save;