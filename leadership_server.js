var mongoose = require('mongoose'),
	assert = require('assert');

var Leaderships = require('./models/leadership');

var url = "mongodb://localhost:27017/conFusion";
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	// we're connected!
  console.log("Connected correctly to server");
  Leaderships.create({
	      "name": "Peter Pan",
	      "image": "images/alberto.png",
	      "designation": "Chief Epicurious Officer",
	      "abbr": "CEO",
	      "description": "Our CEO, Peter, . . ."
	}, function(err, leadership) {
		if (err) throw err;
		console.log('Leaderships created');
  		console.log(leadership);

  		db.collection('leaderships').drop(function () {
            db.close();
        });
	})
})