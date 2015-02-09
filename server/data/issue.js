(function () {

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var issueLinkSchema = new Schema({
    linkType : {
      required : true,
      type : String
    },
    uri : {
      required : true,
      type : String
    }
  });

  var commentSchema = new Schema({
    text : {
      required : true,
      type : String
    },
    createdBy : {
      type : String,
      required : true
    },
    created : {
      type : Date,
      required : true,
      default : Date.now
    }
  });

  var issueSchema = new Schema({
    key : {
      required : true,
      type : String
    },
    summary : {
      required : true,
      type : String
    },
    description : {
      type : String
    },
    reporter : {
      type : String,
      required : true
    },
    assignee : {
      type : String
    },
    links : [issueLinkSchema],
    comments : [commentSchema],
    meta : Schema.Types.Mixed,
    created : {
      type : Date,
      required : true,
      default : Date.now
    },
    updated : {
      type : Date,
      required : true,
      default : Date.now
    }
  }, {
    collection : 'issues'
  });

  var issueRepository = {

  };

  module.exports.Issue = mongoose.model('Issue', issueSchema);

}());
