var savedVideoContainerEl = document.getElementById("saved-video-container");
var carouselEl = document.querySelector(".carousel");
var namePromises = []

//
// var songTitleArray = JSON.parse(localStorage.getItem("songTitleArray")) || [];
// console.log(songTitleArray);
//

var saved = document.querySelector(".saved");
var videosArray = [];

//array for href//
var words = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
  'twenty-six',
  'twenty-seven',
  'twenty-eight',
  'twenty-nine',
  'thirty',
  'thirty-one',
  'thirty-two',
  'thirty-three',
  'thirty-four',
  'thirty-five',
  'thirty-six',
  'thirty-seven',
  'thirty-eight',
  'thirty-nine',
  'forty',
  'forty-one',
  'forty-two',
  'forty-three',
  'forty-four',
  'forty-five',
  'forty-six',
  'forty-seven',
  'forty-eight',
  'forty-nine',
  'fifty',
]

//array for button ID

var buttonId = words

var savedItems = []




//have the music albums load upon page loading, have everything embedded in the document.ready function
$(document).ready(function () {
  //need an array that saves any artist looked at right now and allow us to pull that artist back up


 //access the music api for play list items to show on UI
 //right now the html will only work with those 5 videos - need a js carousel that inserts to an empty html div
  // $('.carousel').carousel();

  //function openVideo () {
  //connect with the youtube video aLink; // We need a function with a js "this.value.videoId" <a> tag/onclick function; not sure this is the right syntax for clicking on a video:
  //videoSelected = target.this.value.videoId();


  //takes the artist video and saves it, (drag and drop function)
  // save it to local storage as well, then we don't need to reaccess youtube
  //function makeSavedGroup()

  //need a function that clicks on the saved music image to replay video










//https://api.napster.com/v2.2/genres/g.397/playlists/
//"https://api.napster.com/v2.2/search?type=playlist&query=todays top hits "
//'https://api.napster.com/v2.2/playlists/mp.258490786/tracks?limit=40'

//submitButton.addEventListener('click', function (event) {
//event.preventDefault();

var requestUrl = 'https://api.napster.com/v2.2/search?type=playlist&query=2022 top hits"limit=40';
var NapsterAPIKey = "Nzc0MDQxYTEtZWRlMC00NTk4LTg0MjktMmFiYjUzYTM2ZmI2";


fetch(requestUrl, { headers: { apikey: NapsterAPIKey } })
  .then(
    function (response) {
      return response.json();
    })
  .then(function (data) {
    console.log(data.search.data.playlists[0]);
    var trackURL = data.search.data.playlists[0].links.tracks.href;
    return fetch(trackURL + "?limit=50", { headers: { apikey: NapsterAPIKey } })

  })

  .then(
    function (response) {
      return response.json();
    })
  .then(function (data) {

    console.log(data);
    var albumPromises = []
    for (var i = 0; i < data.tracks.length; i++) {
      var albumURL = data.tracks[i].links.albums.href;
      var albumPromise = fetch(albumURL, { headers: { apikey: NapsterAPIKey } }).then(
        function (response) {
          return response.json();
        });
      albumPromises.push(albumPromise)
    }
    return Promise.all(albumPromises)
    
  })

  .then(function (data) {
    //tracks
    console.log(data);
    var imagesPromises = []
    for (var i = 0; i < data.length; i++) {
      var imageURL = data[i].albums[0].links.images.href;      
      var imagePromise = fetch(imageURL, { headers: { apikey: NapsterAPIKey } }).then(
        function (response) {
          return response.json();
        });
      imagesPromises.push(imagePromise)
    }
    return Promise.all(imagesPromises)

  })
  .then(function (data) {
    //images
    console.log(data);
    dataCopy = data;
    console.log(dataCopy , "this is the one i'm grabbing images from");    
    append(carouselEl, data, "napster");
  })
  


// var songTitleArray = ["Loves Me Like a Rock", "Jagged Little Pill"];
// localStorage.setItem("songTitleArray", JSON.stringify(songTitleArray));

// fetch(requestUrl, { headers: { apikey: NapsterAPIKey } })
//   .then(
//     function (response) {
//       return response.json();
//     })
//   .then(function (data) {
//     console.log(data.search.data.playlists[0]);
//     var trackURL = data.search.data.playlists[0].links.tracks.href;
//     return fetch(trackURL + "?limit=50", { headers: { apikey: NapsterAPIKey } })

//   })

//   .then(
//     function (response) {
//       return response.json();
//     })
//   .then(function (data) {
    
//     console.log(data);
//     var albumPromises = []
//     for (var i = 0; i < data.tracks.length; i++) {
//       var albumURL = data.tracks[i].links.albums.href;
//       var albumPromise = fetch(albumURL, { headers: { apikey: NapsterAPIKey } }).then(
//         function (response) {
//           return response.json();
//         });
//       albumPromises.push(albumPromise)
//     }
//     return Promise.all(albumPromises)
    
//   })

//   .then(function (data) {
//     //tracks
//     console.log(data);
//     var artistsPromises = []
//     for (var i = 0; i < data.length; i++) {
//       var artistsURL = data[i].albums[0].links.artists.href;      
//       var artistPromise = fetch(artistsURL, { headers: { apikey: NapsterAPIKey } }).then(
//         function (response) {
//           return response.json();
//         });
//       artistsPromises.push(artistPromise)
//     }
//     return Promise.all(artistsPromises)

//   })

//   .then(function (data) {
//     //tracks
//     console.log(data);
//     var namesPromises = []
//     for (var i = 0; i < data.length; i++) {
//       var name = data[i].artists[0].name[''];      
//       var namePromise = fetch(name, { headers: { apikey: NapsterAPIKey } }).then(
//         function (response) {
//           return response.json();
//         });
//       namesPromises.push(namePromise)
//     }
//     return Promise.all(namesPromises)
//   })
//   .then(function (data) {
//     //images
//     console.log(data);
//     dataCopy = data;
//     console.log(dataCopy , "this is the one i'm grabbing artist's from");    
//     append(carouselEl, data, "napster");
//   })








// Youtube stuff //


// function getVideo() {
//   var youTubeKey = "AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg";
//   // var playListId = "url?list=lettersandnumbers "; 
//   var URL = `https://youtube.googleapis.com/youtube/v3/videos?q=${musicvideos}&origin=*&part=snippet&chart=mostPopular&fields=items(id%2Csnippet(title))`;

//   $(document).on("click", '.saveBtn', function(e){
//     e.preventDefault();
//     var value = e.target.value;
//     youtubeFunction(value);
//   });

//   function youtubeFunction(value) {
//     fetch(`myurl${value}`);
//   }
//   for (let i = 0; i < 10; i++) {
//     videosArray.push(`<iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/${response[i].id}"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>`);
//   }



//   // fetch ('https://youtube.googleapis.com/youtube/v3/search?q=dog&key=AIzaSyBws4RKAUJpj7LklbC4kujH7CujSgNAOKg', { 
//   //   "Authorization": "Bearer SAPISIDHASH 1649111903_d9d5b3fa092931583e739bac17f09e7c10793478",
//   //   "Accept": "application/json"

//   // }).then (response => {
//   //   return response.json();
    
//   // }).then(data => {
//   //   console.log(data);
//   // })


//   var options = {
//     // part: "snippet, id",
//     key: youTubeKey,
//     maxResults: 10,
//     dataType: "jsonp"
//     //playListId: playlistId# 
//   }
//   loadVideos(options, URL);

// } 

  
//   function loadVideos (options, URL) {
//   $.getJSON(URL, options, function(dataResult) {
//     console.log(dataResult);
//     //var id = data.items[0].snippet.resourceId.videoId;
//     // watchVideo(id);
//     // savedVideos(id);

//     })  
//   }  

// getVideo();
// // Youtube stuff //



// });



// var artistName = [];
// for (let i = 0; i < 10; i++) {
//   videoLink.push(`<iframe
// width="560"
// height="315"
// src="https://www.youtibe.com/embed/${response[i].id}"
// title="YouTube video player"
// frameborder="0"
// allow="accelarometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowfullscreen
// ></iframe>`);
// }


// Function that grabs the data from the images array // 

function append (el,data,location) {
el.innerHTML = '';
for (var i = 0; i < data.length; i++) {
      var imagesValue = data[i].imgSrc
      if (location === "napster") {
      imagesValue = data[i].images[3].url;
      }
      console.log(imagesValue)
      var anchor = document.createElement('a')
      var image = document.createElement('img')
      var button = document.createElement('button')
      
      anchor.setAttribute('class', 'carousel-item')
      anchor.setAttribute("href", "#" + words[i + 1] + "!");
      image.setAttribute('src', imagesValue);
      button.setAttribute('class', 'saveBtn btn btn-flat')
      button.setAttribute('type', 'button')
      button.setAttribute('id', buttonId[i + 1])
      button.setAttribute('style', 'color: #DA4453')
      
      button.textContent = "save" 
      el.appendChild(anchor)
      anchor.appendChild(image)
      anchor.appendChild(button)
    }
    if (data) {
          $('.carousel').carousel();
    }
}



$(document).on("click", ".saveBtn", function(){

var imgsrc = $(this).prev().attr("src")

savedItems.push({imgSrc: imgsrc})
localStorage.setItem("saved-img", JSON.stringify(savedItems));
console.log(savedItems);
append(saved, savedItems, "saved");
})

var getStorage = JSON.parse(localStorage.getItem("saved-img")) || [];
append(saved, getStorage, "saved");



})


// img.attribute('value', 'theWeekend');

      
      // addEventListener('click', function (e) {
      //   e.preventDefault();
      //   var value = e.target.value;
      //   youtubeFunction(value);
      // });

  


    // })
