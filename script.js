// var musicApiKey = 
var youTubeApiKey ="AIzaSyDtZK7v4AhM4wyZDLwKYDslq41EM0i3Gzw"

$(document).ready(function () {
  //button click function


//the way I typed this, the curly brackets will be a searched variable, our key is in there, and it allows for 25 results to appear on a page; "kind":  "id": "youtube#video"
  var requestUrl = "http://www.googleapis.com/youtube/v3/search?part=snippet&q={the weeknd}&key=AIzaSyDtZK7v4AhM4wyZDLwKYDslq41EM0i3Gzw&maxResults=25";
  fetch(requestUrl) 
    .then(
      function (response) {
        return response.json();
      })
    .then(function (data) {
      console.log(data);
      return data;
    })
  
})

$(document).ready(function () {
  $('.carousel').carousel();
});



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

//   // Or with jQuery

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });


// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }


// var instance = M.Carousel.init({
//     fullWidth: true,
//     indicators: true
//   });
$(document).ready(function(){
    $('#demo-carousel').carousel({
        numVisible: 3
    });

  });



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems);
//   });

//Youtube API
