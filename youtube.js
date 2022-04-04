var channelInput = document.getElementById("channel-input");
var savedVideoCardEl = document.getElementById("video-container");
var searchBtn = document.getElementById("search-button");
// if we need a client id add here
// discovery doc, scopes, authorizeButton
var contentEl = document.getElementById("content");
var channelFormEl = document.getElementById("channel-form");
var channelInput = document.getElementById("channel-input");

var videoContainer = document.getElementById("video-container");



//this connects to the array and saves any artist looked at right now and allow us to pull that artist back up
var savedArray = JSON.parse(window.localStorage.getItem("savedArray")) || [];


  
  $(document).ready(function () {
    $('.carousel').carousel();
  });

  //gathers the info if users search
  searchBtn.on("click", function() {
    var userSearch = channelInput.value(); 
    channelInput.value("").trim();
    searchByKeyword(userSearch);
  })  
  
  //takes the artist card and saves it, (drag and drop function)?
  function makeSavedGroup(text) {
    var li = document.createElement("<li>").addClass("list-group-item").textContent(text);
    savedVideoCardEl.appendChild(li);
  }
  
  
  //this grabs saved the videos to watch again later, 
  savedVideoCardEl.on("click", "li", function() {
    searchByKeyword($(this).textConent());
 
    if (savedArray.length < 0) {
      searchForVideo(savedArray[savedArray.length -1]);
    }

    for (var i = 0; i < savedArray.length; i++) {
      makeSavedGroup(searchForVideo[i]);
    }
  })
  

