var d = document;

var handColor;
var handContainerColor;

var flash = false;

var task = null;

function startFlash() {
	task = setInterval(function() {
	    if(flash = !flash) {
	        d.body.style.backgroundColor = handContainerColor;
	        d.getElementById('hand').style.color = handColor;
	    } else {
	        d.body.style.backgroundColor = handColor;
	        d.getElementById('hand').style.color = handContainerColor;
	    }
	}, 1000);
}

function stopFlash() {
	clearInterval(task);
}

function load() {
	chrome.storage.local.get({'handColor': '#000000', 'handContainerColor': '#FFFFFF'}, function (results) {
		handColor = results.handColor;
		handContainerColor = results.handContainerColor;

		document.getElementById('hand').style.color = handColor;
		document.body.style.backgroundColor = handContainerColor;

		startFlash();
	});
}

load();