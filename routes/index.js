require('../models/Student')

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = mongoose.model("Student");

router.get('/', function(req, res) {

  Student.find({},function(err, docs) {

		if (err) console.log(err);

		console.log(docs[0].username);

  		res.render('index', {submissions: docs});

    });
});

router.get('/:username', function(req, res) {

	Student.findOne({ username: req.params.username }, function(err, doc) {
		
		//console.log(typeof(doc));
		
		console.log(doc);
		//console.log(doc.apps[0].device);
		//res.send(doc);
  		res.render('detail', {submission : doc});
  		console.log(doc);
    });
});

router.get('/search', function(req, res) {

	Student.find({ name: /tosin/i }, function(err, docs) {

		for (var i = 0; i < docs.length; i++) {
			console.log(docs[i].name, docs[i].twitter);
		}

  		res.send(docs);
    });
});


module.exports = router;
