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

		setWidthAndHeight();

		document.getElementById('hand').style.color = handColor;
		document.body.style.backgroundColor = handContainerColor;
		document.getElementById('foregroundColor').style.backgroundColor = handColor;
		document.getElementById('backgroundColor').style.backgroundColor = handContainerColor;

		startFlash();
	});
}

function updateForeground(jscolor) {
	handColor = '#' + jscolor;
	document.getElementById('hand').style.color = handColor;
	saveChanges();
}

function updateBackground(jscolor) {
	handContainerColor = '#' + jscolor;
	document.body.style.backgroundColor = handContainerColor;
	saveChanges();
} 

function saveChanges() {
	chrome.storage.local.set({'handColor': handColor, 'handContainerColor': handContainerColor}, function() {
		window.console.log('Settings saved');
	});
}

function setWidthAndHeight() {
	var width = screen.width;
	var scaledWidth = 20 / 100 * width;
	var scaledHeight = scaledWidth - (30 / 100 * scaledWidth);

	document.body.style.width = scaledWidth + 'px';
	document.body.style.height = scaledHeight + 'px';
	document.getElementById('hand').style.fontSize = scaledHeight + 'px'
}

load();