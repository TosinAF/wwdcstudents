var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ContentType = {
	CONTENT_TYPE_APPIO: "appio",
  	CONTENT_TYPE_VIDEO: "video",
  	CONTENT_TYPE_OTHER: "other",
};

var Student = new Schema({

  name:  			String,
  age: 				Number,
  website: 			String,
  username: 		String,
  twitterUsername: 	String,
  facebookUsername: String,

  apps: [{

  	year: 			Number,
  	accepted: 		Boolean,
    videoLink: 		String, 
    source: 		String,
    likes: 			Number,

    appIOLink: 		String,
    orientation: 	String,
    device: 		String,

    contentType: 	String

  }],

  date: { type: Date, default: Date.now }

});

mongoose.model('Student', Student);