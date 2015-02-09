(function () {

  var issueRepository = require('../data/issueRepository');
  var Issue = require('../data/issue').Issue;
  var morgan = require('morgan')

  module.exports = function (app) {

    app.get('/issue/:id', function (req, res) {
      issueRepository.findById(req.params.id).then(function (doc) {
        if (doc) {
          res.status(200).send(doc);
        } else {
          res.sendStatus(404);
        }
      }, function(error) {
        res.status(500).send(error);
      });
    });

    app.post('/issue', function (req, res) {
      var issue = new Issue(req.body);

      issueRepository.save(issue).then(function (doc) {
        if (doc) {
          res.status(200).send(doc);
        } else {
          res.sendStatus(404);
        }
      }, function(error) {
        res.status(500).send(error);
      });
    });

    app.put('/issue/:id', function(req, res) {

    });

    app.delete('issue/:id', function (req, res) {

    });
  };

}());
