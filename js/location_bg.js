var latitude_bg;
var longitude_bg;
var radius_bg;
var nextFunction_bg;
var lat_bg;
var long_bg;
var hasRecentPosition_bg = false;
var watchId_bg;
var mostRecentPos_bg;
var posWaiter_bg;


function atLocation_bg(lati, longi, nxtFunc){
 atLocationWithRadius_bg(lati, longi, 0.0004, nxtFunc);

}

function atLocationWithRadius_bg(lati, longi, rad, nxtFunc){
  latitude_bg = lati;
  longitude_bg = longi;
  radius_bg = rad;
  nextFunction_bg = nxtFunc;
if(!hasRecentPosition_bg){
startPositionWatching_bg();
}
posWaiter_bg = setInterval('waitForPosition_bg()',1000);
}

function waitForPosition_bg(){
if(hasRecentPosition_bg){
var atPosition_bg;

if(lat_bg > (latitude_bg - radius_bg) && lat_bg < (latitude_bg + radius_bg) && long_bg > (longitude_bg - radius_bg) && long_bg < (longitude_bg + radius_bg)){
atPosition_bg = true;
} else {
atPosition_bg = false;
}


nextFunction_bg(atPosition_bg);
clearInterval(posWaiter_bg);
}
}


function startPositionWatching_bg(){
if(watchId_bg != null){
navigator.geolocation.clearWatch(watchId_bg);
}
var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 0,
  timeout           : Infinity
};
watchId_bg = navigator.geolocation.watchPosition(storePosition_bg, geo_error_bg, geo_options);
}

function geo_error_bg() {
  alert("Sorry, no position available.");
}

function storePosition_bg(position) {
var time = position.timestamp;
lat_bg = position.coords.latitude;
long_bg = position.coords.longitude;
mostRecentPos_bg = time;
hasRecentPosition_bg = true;
setTimeout('positionExpired_bg(' + time + ')', 5000);
}

function positionExpired_bg(timestamp){
 if(timestamp == mostRecentPos){
hasRecentPosition = false;}
}