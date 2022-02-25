var lat_bg;
var long_bg;
var hasRecentPosition_bg = false;
var watchId_bg;
var mostRecentPos_bg;


function atLocation_bg(lati, longi, nxtFunc){
 atLocationWithRadius_bg(lati, longi, 0.0004, nxtFunc);

}

function atLocationWithRadius_bg(lati, longi, rad, nxtFunc){

if(!hasRecentPosition_bg){
startPositionWatching_bg(lati);
} else {
var atPosition_bg;

if(lat_bg > (lati - rad) && lat_bg < (lati + rad) && long_bg > (longi - rad) && long_bg < (longi + rad)){
atPosition_bg = true;
} else {
atPosition_bg = false;
}


nxtFunc(atPosition_bg);
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
  alert("Sorry, er heeft zich een fout voor gedaan bij het ophalen van de locatie. Controleer of alle toestemmingen goed staan. Gebruik bij voorkeur Chrome.");
}

function storePosition_bg(position) {
var time = position.timestamp;
lat_bg = position.coords.latitude;
long_bg = position.coords.longitude;
mostRecentPos_bg = time;
hasRecentPosition_bg = true;
setTimeout('positionExpired_bg(' + time + ')', 1500);
}

function positionExpired_bg(timestamp){
 if(timestamp == mostRecentPos){
hasRecentPosition = false;}
}