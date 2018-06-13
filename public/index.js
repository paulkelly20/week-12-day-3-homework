var app = function(){

    const url = "https://api.punkapi.com/v2/beers"
    makeRequest(url, requestStatus);
}


const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

const requestStatus = function(){
  if(this.status !== 200) return;
  const beers = JSON.parse(this.response);
  addBeerToList(beers);
}


var addBeerToList= function (beers) {
  var ul = document.querySelector('#list-of-beers');
  beers.forEach(function(beer){
  const listItem = document.createElement('li');
  listItem.textContent = beer.name;
  var imageTag = document.createElement("img");
  imageTag.width = "50";
  imageTag.src = beer.image_url;
  listItem.appendChild(imageTag);
  console.log(listItem);
  ul.appendChild(listItem);})
}

// var catImg = function(inputtedImg){
//   var img = document.createElement("li");
//
//   // adding tag using innerHTML but not advised
//   // img.innerHTML = "<img src=\"" + inputtedImg + "\"/>";
//
//   var imageTag = document.createElement("img");
//   imageTag.width = "500";
//   imageTag.src = inputtedImg;
//   img.appendChild(imageTag);
//   return img
// };


window.addEventListener('load', app);
