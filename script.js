var savedVideoContainerEl = document.getElementById("video-container");
var contentEl = document.getElementById("content");
var carousel = document.querySelector(".carousel");
var carouselTwo = document.getElementsByClassName("carousel")[1];

var makeDraggableOne = document.getElementById("draggable1");
var makeDraggableTwo = document.getElementById("draggable2");
var makeDraggableThree = document.getElementById("draggable3");
var makeDraggableFour = document.getElementById("draggable4");
var makeDraggableFive = document.getElementById("draggable5");

//have the music albums load upon page loading, have everything embedded in the document.ready function




$(document).ready(function () {
  //need an array that saves any artist looked at right now and allow us to pull that artist back up


  //access the music api for play list items to show on UI
//right now the html will only work with those 5 videos - need a js carousel that inserts to an empty html div
  $('.carousel').carousel();


  //function openVideo () {
  //connect with the youtube video aLink; // We need a function with a js "this.value.videoId" <a> tag/onclick function; not sure this is the right syntax for clicking on a video:
  //videoSelected = target.this.value.videoId();


  //takes the artist video and saves it, (drag and drop function)
// save it to local storage as well, then we don't need to reaccess youtube
//function makeSavedGroup()

//need a function that clicks on the saved music image to replay video
});





// $( function() {
//   makeDraggable.draggable();
//   $( "#droppable" ).droppable({
//     drop: function( event, ui ) {
//       $( this )
//         .addClass( "ui-state-highlight" )
//         .find( "p" )
//           .html( "Dropped!" );
//     }
//   });
// } );



$(document).ready(function () {
  $( "#draggable1" ).draggable();
  $( "#droppable1" ).droppable({
    drop: function() {
      alert( "dropped" );
    }});
  })
$(document).ready(function () {
  $( "#draggable2" ).draggable();
  $( "#droppable2" ).droppable({
    drop: function() {
      alert( "dropped" );
    }});
  })
$(document).ready(function () {
  $( "#draggable3" ).draggable();
  $( "#droppable3" ).droppable({
    drop: function() {
      alert( "dropped" );
    }});
  })
$(document).ready(function () {
  $( "#draggable4" ).draggable();
  $( "#droppable4" ).droppable({
    drop: function() {
      alert( "dropped" );
    }});
  })
$(document).ready(function () {
  $( "#draggable5" ).draggable();
  $( "#droppable5" ).droppable({
    drop: function() {
      alert( "dropped" );
    }});
})



carousel.addEventListener('click',function(e){
if (e.target.M_Carousel.images[1]) {
  carouselTwo.appendChild(e.target.M_Carousel.images[1])
}
}
)

// var elem = document.createElement("img");
// elem.setAttribute("src", "images/hydrangeas.jpg");
// elem.setAttribute("height", "768");
// elem.setAttribute("width", "1024");
// elem.setAttribute("alt", "Flower");
// document.getElementById("placehere").appendChild("elem");