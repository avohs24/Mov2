$(document).ready(function() {
 // ------------------------------ DB Configulatorizer
 var config = {
   apiKey: "AIzaSyB3cKe_KGVOsgTIkr6lSiszMiczU0PNYSM",
   authDomain: "movme-92cb7.firebaseapp.com",
   databaseURL: "https://movme-92cb7.firebaseio.com",
   storageBucket: "movme-92cb7.appspot.com",
   messagingSenderId: "314238857658"
 };

 firebase.initializeApp(config); // revs the firebase engine.

// ---------------------------------- Global (sorta) Variables
 var database = firebase.database();  // shortcut into firebase's guts.
 var dbObjecto;  // This gobal array for working with data.
 var userEmoSig; //  calculated off from users words  by getEmoUserSig




// ------------------------------------------ Functions
// ------- Working with the User's emosig
// this changes any emoSig to an object.  Not sure how to return it though.
  function emoToOb(emostr){
  emoSig = JSON.parse(emostr);
  console.log(emoSig)
  }

function fixEmoSigNumbers(){


}


//-------
// This just the ajax call to get the userEmoSig and set it.
function getEmoUserSig(){
  var mood = $("#input-style").val().trim();
  $.post(
      'https://apiv2.indico.io/emotion',
    JSON.stringify({
      'api_key': "95e533107e58da7a19292c6f27340659",
      'data': mood,
    })
  ).then(function(res){
    userEmoSig = emoToOb(res);
    console.log(userEmoSig)
    console.log(typeof userEmoSig)

    // if (userEmoSig["anger"] <= 1){
    //   userEmoSig = fixEmoSigNumbers();

    //controlCompareOrder();
  })
}


// -------  Working with the movie emosigs
// -------
//This controls the order of operation for getting movies to compare against, so locking it down.
function controlCompareOrder(){
  resetdbObjecto().then(grabMovies())
}

// -------
//This empties the universal db and then resets it.
function resetdbObjecto(){
  dbObjecto = []
  database.ref().on('value', function emotionSignature(snapshot){
  var localMovies = snapshot.val().Movies;
  for(var property in localMovies){
      var movOb = localMovies[property];
      dbObjecto.push(movOb);
    }
  })
}

// This gets random movies from the database and passes them to compare.
function grabMovie(){
  if (dbObjecto.length >= 1){
  var randomNumber = Math.floor(Math.random()*dqObjecto.length);
  var theMovie = dbObjecto.splice(randomNumber);
  CompareMovies(theMovie);
  }
}

// This compares the emotional signatures of the user and the movies.  The first 20
// matches get sent to the interface.  Stop after that.
function CompareMovies(dbemo){
  var emoTest = ((abs(dbemo["anger"] - userEmoSig["anger"])), (abs(dbemo["joy"] - userEmoSig["joy"])), (abs(dbdemo["sadness"] - userEmoSig["sadness"])), (abs(dbdemo["fear"] - userEmoSig["fear"])), (abs(dbemo["surprise"] - userEmoSig["surprise"])));
  var Matchcounter = 1;
  while (matchCounter < 20){
    if ((movType == 0 && emoTest.every(x => x <= 10)) || (movtype  == 1 && emoTest.every(x => x >= 15))){
      displayMatched(dbemo);
      Matchcounter = Matchcounter+1
    }
    grabMovie()
    }
  }


// ------------- Working with the indico's objects.
//-------------
// I don't think we need these.  We have them other places.
  // var genre = {
  //   genreId: 0,
  //   genreName: ""
  // };
  //
  // var theMovie = {
  //   movieId : 0,
  //   movieName: "",
  //   movieDescription: "",
  //   movieGenres: [],
  //   movieImage: "",
  // }


// --------- This function queries the movie site and gets all possible genres and their id's
// --------- It loops through them and puts them into our database.
// --------- It then makes an array of them and sends it to the function that gets the movies associated.
// ----------This code can potentially be used to get more movies to query.
  function getObjectGenresId() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=9e47aea3d7ab855ced2fcc031863b928",
      "method": "GET",
      "headers": {},
      "data": "{}"
    }
    $.ajax(settings).done(function(response) {
      var genreObjectArray = response.genres;
      // this part pushes the genres to the database
      $.each(genreObjectArray, function(x) {
        genre.genreId = genreObjectArray[x].id;
        genre.genreName = genreObjectArray[x].name;
        database.ref('genres').push({genre});
      });
      var theArrayGenreIds = [];
      for (var i = 0; i < genreObjectArray.length; i++) {
        theArrayGenreIds.push(genreObjectArray[i]["id"]);
      }
    getMoviesfromArrayIDs(theArrayGenreIds)
  })
}
//    --------- Listeners
$("button").on("click", function() {
  event.preventDefault();
  getEmoUserSig();
})
})
