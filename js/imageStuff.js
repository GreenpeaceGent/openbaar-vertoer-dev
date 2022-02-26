var checkingLocationIndex;
window.addEventListener("load",function(event) {
var imageGrid =     document.getElementById("imageGrid")

for( i = 0; i < locations.length; i++){
var location = locations[i];
var divNode = document.createElement("div");
var imgNode = document.createElement("img");
divNode.id = location.id;
if(location.found){
divNode.style.borderColor = "lime";
}
imgNode.setAttribute("onclick","enlargeImage(" + i + ")");
imgNode.className  = "template";
imgNode.src = location.image;
divNode.appendChild(imgNode);
imageGrid.appendChild(divNode);
}

    });

function enlargeImage(i){
window.onbeforeunload = function() { return "Gebruik de vorige knop om de afbeelding te sluiten."; };
var location = locations[i];
document.getElementById("resultImage").style.display = "none";
if(location.unlocked){
document.getElementById("locationChecker").style.display = "none";
document.getElementById("overlayImage").style.display = "none";
document.getElementById("info-message").innerHTML = location.message;
document.getElementById("informatie").style.display = "block";
} else {
document.getElementById("informatie").style.display = "none";
document.getElementById("overlayImage").src = location.image;
document.getElementById("overlayImage").style.display = "block";
document.getElementById("locationChecker").setAttribute("onclick","checkImageLocation(" + i + ",event)");
document.getElementById("locationChecker").style.display = "block";
}
document.getElementById("imageOverlay").style.display = "block";
}

function closeImageOverlay(){
document.getElementById("imageOverlay").style.display = "none";
window.onbeforeunload = null;
}

function checkImageLocation(i, event){
event.stopPropagation();
var location = locations[i];
checkingLocationIndex = i;
atLocation(location.coords.lat,location.coords.long, areWeAtImage)

}

function areWeAtImage(weAre){
document.getElementById("overlayImage").style.display = "none";
document.getElementById("locationChecker").style.display = "none";
document.getElementById("resultImage").style.display = "block";
if(weAre){
var location = locations[checkingLocationIndex];
location.found = true;
location.unlocked = true;
window.localStorage.setItem(stageId, JSON.stringify(locations));
document.getElementById(location.id).style.borderColor = "lime";
document.getElementById("resultImage").src = "images/correct.jpg";
document.getElementById("info-message").innerHTML = location.message;
document.getElementById("informatie").style.display = "block";

} else{
document.getElementById("resultImage").src = "images/wrong.jpg";
}
}

