(function () {

  var mongoose = require('mongoose');
  var Q = require('q');
  var Issue = require('./issue').Issue;

  module.exports = {
    findById: function (id) {
      var defer = Q.defer();

      Issue.findById(id, function (err, doc) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(doc);
        }
      });

      return defer.promise();
    },
    save: function (issue) {

      var defer = Q.defer();

      issue.save(function (err, issue) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(issue);
        }
      });

      return defer.promise();
    }
  };

}());
