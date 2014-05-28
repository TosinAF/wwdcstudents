require('../models/Student')

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose-paginate');
var Student = mongoose.model("Student");

router.get('/', function(req, res) {

  	var currentPage = 1;
	var numberOfReultsToShow = 12;
	
	Student.paginate({}, currentPage, numberOfReultsToShow, function(error, pageCount, paginatedResults, itemCount) {
	  
	  if (error) {
	    console.error(error);
	  }

	  res.render('index', {submissions: paginatedResults, currentPage : Number(currentPage), pageCount : pageCount});

	});
});

router.get('/page/:pageNumber', function(req, res) {

	var currentPage = req.params.pageNumber;
	var numberOfReultsToShow = 12;

	if (currentPage == 0) currentPage = 1;
	
	Student.paginate({}, currentPage, numberOfReultsToShow, function(error, pageCount, paginatedResults, itemCount) {
	  
	  if (error) {
	    console.error(error);
	  }

	  res.render('index', {submissions: paginatedResults, currentPage : Number(currentPage), pageCount : pageCount});

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

router.get('/hello', function(req, res){

  res.send('Hey! You found my easter egg :)');

});

router.get('/:username', function(req, res) {

	Student.findOne({ username: req.params.username }, function(err, doc) {

		if (doc == null) {
			res.send("404. No user was found.");
			return;
		}

  		res.render('detail', {submission : doc});
    });
});

module.exports = router;
