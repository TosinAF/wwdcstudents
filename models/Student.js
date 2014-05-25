var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Auctual Links not Usernames
// Youtube Links only for videos
// Orientation & Device Fields needed to 
// construct the iframe url to embed the app from app.io

var Student = new Schema({

  name:  			String,
  website: 			String,
  twitter:  		String,
  facebook: 		String,

  apps: [{

  	year: 			Number,
  	accepted: 		Boolean,
    video_link: 	String, 
    source: 		String,
    likes: 			Number,

    app_io_link: 	String,
    orientation: 	String,
    device: 		String

  }],

  date: { type: Date, default: Date.now }
  
});

mongoose.model('Student', Student);