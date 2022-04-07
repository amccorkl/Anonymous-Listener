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
var buttonId = words




//have the music albums load upon page loading, have everything embedded in the document.ready function
$(document).ready(function () {
  //need an array that saves any artist looked at right now and allow us to pull that artist back up


 //access the music api for play list items to show on UI
 //right now the html will only work with those 5 videos - need a js carousel that inserts to an empty html div
  $('.carousel').carousel();


//have the music albums load upon page loading, have everything embedded in the document.ready function

  //function openVideo () {
  //connect with the youtube video aLink; // We need a function with a js "this.value.videoId" <a> tag/onclick function; not sure this is the right syntax for clicking on a video:
  //videoSelected = target.this.value.videoId();




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
  .then(function (button) {
    var saveButtonOne = document.querySelector("#one");
    var saveButtonTwo = document.querySelector("#two");
    var saveButtonThree = document.querySelector("#three");
    var saveButtonFour = document.querySelector("#four");
    var saveButtonFive = document.querySelector("#five");
    var saveButtonSix = document.querySelector("#six");
    var saveButtonSeven = document.querySelector("#seven");
    var saveButtonEight = document.querySelector("#eight");
    var saveButtonNine = document.querySelector("#nine");
    var saveButtonTen = document.querySelector("#ten");
    var saveButtonEleven = document.querySelector("#eleven");
    var saveButtonTwelve = document.querySelector("#twelve");
    var saveButtonThirteen = document.querySelector("#thirteen");
    var saveButtonFourteen = document.querySelector("#fourteen");
    var saveButtonFifteen = document.querySelector("#fifteen");
    var saveButtonSixteen = document.querySelector("#sixteen");
    var saveButtonSeventeen = document.querySelector("#seventeen");
    var saveButtonEighteen = document.querySelector("#eighteen");
    var saveButtonNineteen = document.querySelector("#nineteen");
    var saveButtonTwenty = document.querySelector("#twenty");
    var saveButtonTwentyOne = document.querySelector("#twenty-one");
    var saveButtonTwentyTwo = document.querySelector("#twenty-two");
    var saveButtonTwentyThree = document.querySelector("#twenty-three");
    var saveButtonTwentyFour = document.querySelector("#twenty-four");
    var saveButtonTwentyFive = document.querySelector("#twenty-five");
    var saveButtonTwentySix = document.querySelector("#twenty-six");
    var saveButtonTwentySeven = document.querySelector("#twenty-seven");
    var saveButtonTwentyEight = document.querySelector("#twenty-eight");
    var saveButtonTwentyNine = document.querySelector("#twenty-nine");
    var saveButtonThirty = document.querySelector("#thirty");
    var saveButtonThirtyOne = document.querySelector("#thirty-one");
    var saveButtonThirtyTwo = document.querySelector("#thirty-two");
    var saveButtonThirtyThree = document.querySelector("#thirty-three");
    var saveButtonThirtyFour = document.querySelector("#thirty-four");
    var saveButtonThirtyFive = document.querySelector("#thirty-five");
    var saveButtonThirtySix = document.querySelector("#thirty-six");
    var saveButtonThirtySeven = document.querySelector("#thirty-seven");
    var saveButtonThirtyEight = document.querySelector("#thirty-eight");
    var saveButtonThirtyNine = document.querySelector("#thirty-nine");
    var saveButtonForty = document.querySelector("#forty");
    var saveButtonFortyOne = document.querySelector("#forty-one");
    var saveButtonFortyTwo = document.querySelector("#forty-two");
    var saveButtonFortyThree = document.querySelector("#forty-three");
    var saveButtonFortyFour = document.querySelector("#forty-four");
    var saveButtonFortyFive = document.querySelector("#forty-five");
    var saveButtonFortySix = document.querySelector("#forty-six");
    var saveButtonFortySeven = document.querySelector("#forty-seven");
    var saveButtonFortyEight = document.querySelector("#forty-eight");
    var saveButtonFortyNine = document.querySelector("#forty-nine'");
    var saveButtonFifty = document.querySelector("#fifty");

console.log(saveButtonOne);
console.log(saveButtonTwo);
console.log(saveButtonThree);
  })

  
})

// Function that grabs the data from the images array // 

function append (data) {
carouselEl.innerHTML = '';
for (var i = 0; i < data.length; i++) {
      var imagesValue = data[i].images[3].url;
      console.log(imagesValue)
      var anchor = document.createElement('a')
      var image = document.createElement('img')
      var button = document.createElement('button')

      anchor.setAttribute('class', 'carousel-item')
      anchor.setAttribute("href", "#" + words[i + 1] + "!");
      image.setAttribute('src', imagesValue);
      button.setAttribute('class', 'btn btn-outline-secondary')
      button.setAttribute('type', 'button')
      button.setAttribute('id', buttonId[i + 1])

      carouselEl.appendChild(anchor)
      anchor.appendChild(image)
      anchor.appendChild(button)
    }
    $('.carousel').carousel();
}


carouselEl.addEventListener('click', function(e) {
console.log(e)

})

