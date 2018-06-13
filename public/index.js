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
  beerDropDown(beers);

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
  ul.appendChild(listItem);})
}

const beerDropDown = function(beers){
  const select = document.querySelector("#beer-list")
  beers.forEach(function(beer){
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = JSON.stringify(beer);
    select.appendChild(option);
    select.addEventListener('change', handleSelectChange);
  })
}


  const handleSelectChange = function(){
  let beer = JSON.parse(this.value)
  var ul = document.querySelector('#list-of-beers');
  ul.parentNode.removeChild(ul);
  displayBeerInfo(beer);
};
const displayBeerInfo = function(beer){
  let pTag = document.querySelector('#beer-info')
  pTag.textContent = `Name: ${beer.name} Description: ${beer.description} `;
  var imageTag = document.createElement("img");
  imageTag.width = "250";
  imageTag.src = beer.image_url;
  pTag.appendChild(imageTag);

}


window.addEventListener('load', app);
