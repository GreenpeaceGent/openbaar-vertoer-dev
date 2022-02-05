
function showBusRoute(){
document.getElementById("bus-route-overlay").style.display = "block";
}

function showBikeRoute(){
document.getElementById("bike-route-overlay").style.display = "block";
}

function closeBusRouteOverlay(){
document.getElementById("bus-route-overlay").style.display = "none";
}

function closeBikeRouteOverlay(){
document.getElementById("bike-route-overlay").style.display = "none";
}

function showEindeFaseOverlay(){
document.getElementById("einde-fase-overlay").style.display = "block";
}

function closeEindeFaseOverlay(){
document.getElementById("einde-fase-overlay").style.display = "none";
}

function triggerEindeFase(){
document.getElementById("einde-fase-overlay").style.display = "block";
var aantalJuist = 0;

for( i = 0; i < locations.length; i++){
var location = locations[i];
if(location.found){
aantalJuist++;
}
location.unlocked = true;
}
window.localStorage.setItem(stageId, JSON.stringify(locations));
document.getElementById("aantal-juist").innerHTML = aantalJuist;
document.getElementById("default-footer").style.display = "none";
document.getElementById("won-footer").style.display = "block";
}

function areWeNearTheEnd(weAre){
if(weAre){
clearInterval(locInterval);
triggerEindeFase();
}
}