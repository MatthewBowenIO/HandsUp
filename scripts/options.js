var handColor;
var handContainerColor;

function updateForeground(jscolor) {
	handColor = '#' + jscolor;
	document.getElementById('hand').style.color = handColor;
	saveChanges();
}

function updateBackground(jscolor) {
	handContainerColor = '#' + jscolor;
	document.getElementById('handContainer').style.backgroundColor = handContainerColor;
	saveChanges();
} 

function saveChanges() {
	chrome.storage.local.set({'handColor': handColor, 'handContainerColor': handContainerColor}, function() {
		window.console.log('Settings saved');
	});
}

function load() {
	chrome.storage.local.get({'handColor': '#000000', 'handContainerColor': '#FFFFFF'}, function (results) {
		handColor = results.handColor;
		handContainerColor = results.handContainerColor;

		document.getElementById('hand').style.color = handColor;
		document.getElementById('handContainer').style.backgroundColor = handContainerColor;
		document.getElementById('foregroundColor').style.backgroundColor = handColor;
		document.getElementById('backgroundColor').style.backgroundColor = handContainerColor;
	});
}

load();