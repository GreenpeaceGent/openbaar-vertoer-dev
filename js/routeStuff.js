
var locInterval;

window.addEventListener("load",function(event) {
if(weAreCompleted()){
 document.getElementById("default-footer").style.display = "none";
 document.getElementById("won-footer").style.display = "block";
}else{
    locInterval = setInterval('startAreWeThereYet()',1000);
}
});


function weAreCompleted(){
var won = true;
for( i = 0; i < locations.length; i++){
var location = locations[i];
if(!location.unlocked){
won = false;
}
}
return won;
}

function showBusRoute(){
if(document.getElementById("bus-route-overlay").style.display == "none"){
document.getElementById("bike-route-overlay").style.display = "none";
document.getElementById("bus-route-overlay").style.display = "block";
} else {

document.getElementById("bus-route-overlay").style.display = "none";}
}

function showBikeRoute(){
if(document.getElementById("bike-route-overlay").style.display == "none"){
document.getElementById("bus-route-overlay").style.display = "none";
document.getElementById("bike-route-overlay").style.display = "block";
} else {
document.getElementById("bike-route-overlay").style.display = "none";
}
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