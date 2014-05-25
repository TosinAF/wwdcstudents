require('../models/Student')

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = mongoose.model("Student");

router.get('/', function(req, res) {

  Student.find({},function(err, docs) {

		for (var i = 0; i < docs.length; i++) {
			console.log(docs[i].name, docs[i].twitter);
		}

  		res.send(docs);
    });
});

router.get('/search', function(req, res) {

	Student.find({ name: /tosin/i },function(err, docs) {

		for (var i = 0; i < docs.length; i++) {
			console.log(docs[i].name, docs[i].twitter);
		}

  		res.send(docs);
    });

  //res.render('index', { title: 'Demo 1' });
});


module.exports = router;
