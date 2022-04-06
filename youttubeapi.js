var savedVideoContainerEl = document.getElementById("saved-video-container");
var carouselEl = document.querySelector(".carousel");
var savedVideosArray = [];
var video = item.snippet.resourceId.videoId;


$(document).ready(function() {

  var key = "AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg";
  // var playListId = "url?list=lettersandnumbers "; 
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 1,
    //playListId: playlistId
  }
  loadVideos();

 //connect with the youtube video by clicking on a button or the image of the music provided through the Napster api; 
 // We need a function with a js "this.value.videoId" <a> tag/onclick function; not sure this is the right syntax for clicking on a video:
  //videoSelected = target.this.value.videoId();
  
  function loadVideos () {
  $.getJSON(URL, options, function(dataResult) {
    console.log(dataResult);
    //var id = data.items[0].snippet.resourceId.videoId;
    watchVideo(id);
    savedVideos(id);

    })  
  }  

  //loads the video at a certain size on the UI
  function watchVideo() { //id= would be the song/artist clicked on
    $("#carousel").html(`<iframe width="640" height="360"
    src="https://www.youtube.com/embed/{${id}}?autoplay=1"
    frameborder="0"></iframe>
    `)

    //if the video doesn't load, go back to the carousel screen
    //we need the user to go back to the carousel screen after video finishes playing

    //we need a button that allows the user to save the link to the video

  }

   


  //this would allow the user to click on the prior image/link and play the video again (if we saved it)
  function savedVideos(dataResults) {
    $.each(dataResults.items, function(i, item) {
      var thumbnail = item.snippet.thumbnails.medium.url;

      $(savedVideoContainerEl).append(`
      <div class="target-video data-key="${video}>
        <img src="${thumbnail}" alt=" class=videos>
      </div>`);
    });

    
    
  }

  //whichever video is clicked on will play
  $(savedVideoContainerEl).on("click", "div", function() {
    var id = $(this).att("data-key");
  });

  // fetch ('https://youtube.googleapis.com/youtube/v3/search?q=dog&key=AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg', { 
  //   "Authorization": "Bearer SAPISIDHASH 1649111903_d9d5b3fa092931583e739bac17f09e7c10793478",
  //   "Accept": "application/json"

  // }).then (response => {
  //   return response.json();
    
  // }).then(data => {
  //   console.log(data);
  // })


})


 
 
  
//The following are sample codes from the youtube webpage for reference
// //search by keyword
// function searchByKeyword(userSearch) {
//     var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + apiKey +
//     "&part=snippet,contentDetails,status";
//     var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25
//     });
//     for(var i in results.items) {
//       var item = results.items[i];
//       Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     }
//   }    

//   //search by video content details
//   function getVideoChannel(userSearch) {
//     var results = YouTube.Search.list('id,snippet,contentDetails', {})
//   }

//     //search by topic    
//   function searchByTopic(userSearch) {
//       var mid = '/m/0gjf126';
//       var results = YouTube.Search.list('id,snippet', {topicId: mid, maxResults: 25});
//       for(var i in results.items) {
//         var item = results.items[i];
//         Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//       }
//   }

