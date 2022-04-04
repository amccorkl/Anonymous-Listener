var videoSelected = document.querySelector(".carousel-item");
var savedVideoContainerEl = document.getElementById("video-container");
var contentEl = document.getElementById("content");
var carousel = document.querySelector(".carousel");

//this connects to the array and saves any artist looked at right now and allow us to pull that artist back up
var savedArray = JSON.parse(window.localStorage.getItem("savedArray")) || [];

$(document).ready(function () {
  $('.carousel').carousel();
});

function SaveAVideo (event) {
  event.preventDefault();
  // it isn't the textContent...
  videoSelected = event.target.href;
  console.log(videoSelected);
  //connect with the youtube video aLink
  makeSavedGroup(videoSelected);
}
   
//takes the artist card and saves it, (drag and drop function)?
function makeSavedGroup(videoSelected) {
    pastVideo.push(videoSelected)
    var savedOneVideoEl = document.createElement("div").setAttribute
    //textContent?
    ("class", "list-group-item").href(pastVideo);
    savedVideoContainerEl.appendChild(savedOneVideoEl);
  }
  
  
  //this reconnects with saved videos to watch again later, 
  savedVideoContainerEl.addEventListener("click", function() {
    searchForVideo($(this).href());
 
    if (savedArray.length < 0) {
      searchForVideo(savedArray[savedArray.length -1]);
    }

    for (var i = 0; i < savedArray.length; i++) {
      makeSavedGroup(savedOneVideoEl[i]);
    }
  })
  

