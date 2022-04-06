var savedVideoContainerEl = document.getElementById("video-container");
var contentEl = document.getElementById("content");
var carousel = document.querySelector(".carousel");



// button.addEventListener('click', function() {

fetch('https://openwhyd.org/adrien?format=json')
.then(response => response.json())
.then(data => console.log(data));


    
// }