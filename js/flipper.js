
var flippers = document.getElementsByClassName("flip-container");

var classFlip = function() {
	this.classList.toggle("flip");
};

for (var i = 0; i < flippers.length; i++) {
	flippers[i].addEventListener('click', classFlip, false);
}
