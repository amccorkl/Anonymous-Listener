var savedVideoContainerEl = document.getElementById("video-container");
var contentEl = document.getElementById("content");
var carousel = document.querySelector(".carousel");



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












