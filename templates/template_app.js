$(document).ready(function() {

// ---------------------------------- Global Variables -------------------------------------

var aString = "This is a string";
var aNumber = 10; // This is a number, but I can't really say that.
var anArray = ["This", "is", "an", "Array"];

var Anobject = {
    aKeyString: "a string value",
    bKeyArray: ["an", "array", "of",b "strings"],
    cKeyFunction: function(){
    }
    dKeyObject:  {
      secondLevelKeyString : "this is just to show you can nest these bad boys",
      secondLevelKeyArray: [etc, etc1]
    }
  }
})



// ------------------------------------------ Functions -----------------------------------------
var aBasicFunction = function bob(){

};

// call a function and get a return
var aVarWithReturnedValue= WithParamenter(2,3)

function WithParameters(p1, p2){
  var px2 = parameter2;
  return p2
  // If you want to return multiple values you need to turn them into and array or object
};


// --------------------- after your functions, your start commands and listeners ------------------

$("#thisID").click(function(){}):
$("#thisID").on("click",function(){}):
$("#thisID").on("change",function(){}): // any change to the element, including load, I think.


// -------------------------- the rest is all reference below. make sure to delete ----------------------------



















// --------------------------------------- Basic JavaScript Operations ----------------------------------
console.log("this goes to the console");
console.log (typeof x)  // gives you the type of item it is.

// ----------for loop
for (var i = 0, i < theArrayYouWant.length, i++){

}

// ---------- if statement
if( x === that){

}else if{

}else{

};

// ------------------------------------------ jQuery Tricks -----------------------------------------
// ---- Get the value of things -------
$("#anElementID").attr("class") // get the value of the class for an element whose ID is at the front
$("#anElementID").attr("class", "theClass") // puts theClass in the class.
$(".anElementClass").html() // gets all of the html within the element that an element at the front
$(".anElementClass").html("<p>I can type html in here</p>")  puts the html in the the element with the class
$(".anElementClass").append("some stuff") //adds to the html within  the element at the end.
$(".anElementClass").prepend("some stuff"); // adds it to the beginning
$("div") // gets all divs or whatever element you choose.
$( "form :input" )    // Gets all of the inputs, textareas, etc1
$(selector).val()  // get the value of an inputs
$(selector).val("Shawn Fielding") // gives the value.

// --------------------------  a timeout ----------------------
setTimeout(function(){ alert("Hello"); }, 3000);

// ----------------------- randomnumber -------------
function randomNumber(hi, low) {
  var x = Math.floor(Math.random() * (hi - low) + low);
  console.log(x);
  console.log(typeof x);
  return x;
}

// --------------------- Ajax call (also with an each loop and stringify)---------------------
var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";



$.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response){
            var theMovie = response
            var theMovieInString = JSON.stringify(response)
            $.each(theMovie,function(k,v){
                          console.log("Key: "+k+" Value: "+v);
                          if(k == "Poster"){
                          $("#movie-view").append("<p><strong>"+k+"</strong>: <img src='"+v+"'</p>");
                          }else{
                          $("#movie-view").append("<p><strong>"+k+"</strong>: "+v+"</p>");
                          }
                        })
          }

// ------------------------- play a tune -----------
function playSong() {
  x = new Audio(urlifhosted locallocation if local);
  x.play();
}
