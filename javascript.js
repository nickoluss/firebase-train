
 var config = {
    apiKey: "AIzaSyBdzrrxdDOPicLwDv8VUHSPL5qmABUNC2o",
    authDomain: "train-6a245.firebaseapp.com",
    databaseURL: "https://train-6a245.firebaseio.com",
    projectId: "train-6a245",
    storageBucket: "",
    messagingSenderId: "824512012127"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  

$('#submit').on('click', function(){

	
	var trainName = $('#trainName').val().trim();
	var destination = $('#destination').val().trim();
	var firstTrain = $('#firstTrain').val().trim();
	var frequency = $('#frequency').val().trim();

	// new train  added
	var newTrain = {
		trainName: trainName,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency
	}

	
	database.ref().push(newTrain);

	$('#trainName').val('');
	$('#destination').val('');
	$('#firstTrain').val('');
	$('#frequency').val('');



	return false;

});


database.ref().on('child_added', function(childSnapshot, prevChildKey) {

	var trainName = childSnapshot.val().trainName;
	var destination = childSnapshot.val().destination;
	var firstTrain = childSnapshot.val().firstTrain;
	var frequency = childSnapshot.val().frequency;


	$('.table > tbody').append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>"
		+ frequency + "</td><td>" + "Delayed" + "</td><td>" + "Unknown" + "</td></tr>");

});

