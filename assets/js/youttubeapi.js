var savedVideoContainerEl = document.getElementById("saved-video-container");
var carouselEl = document.querySelector(".carousel");
var songTitleArray = JSON.parse(localStorage.getItem("songTitleArray")) || [];
console.log(songTitleArray);
// var video = item.snippet.resourceId.videoId;


$(document).ready(function() {

  function getVideo() {
    var youTubeKey = "AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg";
    // var playListId = "url?list=lettersandnumbers "; 
    var URL = `https://youtube.googleapis.com/youtube/v3/videos?q=${songTitleArray[0]}&origin=*&part=snippet&chart=mostPopular&fields=items(id%2Csnippet(title))`;


    // fetch ('https://youtube.googleapis.com/youtube/v3/search?q=dog&key=AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg', { 
    //   "Authorization": "Bearer SAPISIDHASH ",
    //   "Accept": "application/json"

    // }).then (response => {
    //   return response.json();
      
    // }).then(data => {
    //   console.log(data);
    // })


    var options = {
      // part: "snippet, id",
      key: youTubeKey,
      maxResults: 3,
      dataType: "jsonp"
      //playListId: playlistId# 
    }
    loadVideos(options, URL);

  } 
  
    
    function loadVideos (options, URL) {
    $.getJSON(URL, options, function(dataResult) {
      console.log(dataResult);
      //var id = data.items[0].snippet.resourceId.videoId;
      // watchVideo(id);
      // savedVideos(id);

      })  
    }  

    //loads the video at a certain size on the UI
    // function watchVideo() { //id= would be the song/artist clicked on
    //   $("#carousel").html(`<iframe width="640" height="360"
    //   src="https://www.youtube.com/embed/{${id}}?autoplay=1"
    //   frameborder="0"></iframe>
    //   `)

    
    // }


  getVideo();
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

