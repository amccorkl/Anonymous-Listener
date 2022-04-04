var channelInput = $("#channel-input");
var savedVideoCard = $("#video-container");
var searchBtn = $("#search-button")


$(document).ready(function() {

  //not loading???
  // $(document).ready(function () {
  //   $('.carousel').carousel();
  // });

  

  //gathers the info if users search
  $(searchBtn).on("click", function() {
    var userSearch = $(channelInput).val(); 
    $("search-value").val("").trim();
    searchForVideo(userSearch);
  })  
  
  //takes the artist card and saves it
  function makeSavedGroup(text) {
    var li = $("<li>").addClass("list-group-item").text(text);
    savedVideoCard.append(li);
  }
  
  
  //this grabs saved the videos to watch again
  savedVideoCard.on("click", "li", function() {
    searchForVideo($(this).text());
  })



  
  function searchForVideo(userSearch) {
    var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
    for(var i in results.items) {
          var item = results.items[i];
          Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
      }

  //this saves any artist looked at right now and allow us to pull that artist back up
  var savedArray = JSON.parse(window.localStorage.getItem("savedArray")) || [];
  
  if (savedArray.length < 0) {
    searchForVideo(savedArray[savedArray.length -1]);
  }

  for (var i = 0; i < savedArray.length; i++) {
    makeSavedGroup(searchForVideo[i]);
  }

})