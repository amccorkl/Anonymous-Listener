var apiKey = AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg

//search by keyword
function searchByKeyword(userSearch) {
    var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + apiKey +
    "&part=snippet,contentDetails,status";
    var results = YouTube.Search.list('id,snippet', {q: 'userSearch', maxResults: 25
    });
    for(var i in results.items) {
      var item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
  }    

  //search by video content details
  function getVideoChannel(userSearch) {
    var results = YouTube.Search.list('id,snippet,contentDetails', {})
  }

    //search by topic    
  function searchByTopic(userSearch) {
      var mid = '/m/0gjf126';
      var results = YouTube.Search.list('id,snippet', {topicId: mid, maxResults: 25});
      for(var i in results.items) {
        var item = results.items[i];
        Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
      }
  }

    $.ajax({
      method: 'GET',
      url: 'https://https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&key=[AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg]', 
      dataType: 'json',
      // --header 'Authorization: Bearer '
      success: function (data) {
      }
   })

   .then(response => {
    console.log(response);
    //should grab a video
    var channel = response.result.items[0];
    var outputUlEl = document.createElement("ul").setAttribute("class", "collection");
    var outputLiTitle = document.createElement("li").setAttribute("class", "collection-item").textContent = "Title: " + channel.snippet.title;
    var outputLiId = document.createElement("li").setAttribute("class", "collection-item").textContent = "Id: " + channel.snippet.id;
    
    outputUlEl.appendChild(outputLiTitle, outputLiId);
    var aLink = document.createElement("a").setAttribute("class", "btn grey darken-2", "target=_blank");
    aLink  href="https://youtube.com/watch?v="channel.snippet.customUrl"
  })
  .catch(error => {alert("No video available")
  })