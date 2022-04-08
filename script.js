var savedVideoContainerEl = document.getElementById("saved-video-container");
var carouselEl = document.querySelector(".carousel");

var savedVideosArray = [];

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

//have the music albums load upon page loading, have everything embedded in the document.ready function
$(document).ready(function () {
  
 //access the music api for play list items to show on UI
   $('.carousel').carousel();




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
    append(data);
  })

var songTitleArray = ["Loves Me Like a Rock", "Jagged Little Pill"];
localStorage.setItem("songTitleArray", JSON.stringify(songTitleArray));



// Function that grabs the data from the images array // 

function append (data) {
carouselEl.innerHTML = '';
for (var i = 0; i < data.length; i++) {
      var imagesValue = data[i].images[3].url;
      console.log(imagesValue)
      var anchor = document.createElement('a')
      var image = document.createElement('img')

      anchor.setAttribute('class', 'carousel-item')
      anchor.setAttribute("href", "#" + words[i + 1] + "!");
      image.setAttribute('src', imagesValue);

      carouselEl.appendChild(anchor)
      anchor.appendChild(image)
    }
    $('.carousel').carousel();
}


})