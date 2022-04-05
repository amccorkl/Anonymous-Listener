
fetch ('https://youtube.googleapis.com/youtube/v3/search?q=dog&key=AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg', { 
  "Authorization": "Bearer SAPISIDHASH 1649111903_d9d5b3fa092931583e739bac17f09e7c10793478",
  "Accept": "application/json"

}).then (response => {
  return response.json();
  
}).then(data => {
  console.log(data);
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

