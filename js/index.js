function clamp(a, b, c) {
	// inclusive clamp
	if (a < b) { return b; }
	if (a > c) { return c; }
	return a;
}


const state = {
	"row" : 2,
	"col" : -1,
	"maxRow" : 4,
	"maxCol" : 4,
	"transition" : false
};

state.currentScene = function() {
	return scenes[this["col"]][this["row"]];
}

/* Changing states */
state.onUp = function() {
	let old = this["col"];
	this["col"] = clamp(this["col"] + 1, 0, this["maxCol"]);
	if (this["col"] != old) {
		this.didMutate("up");
	}
}

state.onDown = function() {
	let old = this["col"];
	this["col"] = clamp(this["col"] - 1, 0, this["maxCol"]);
	if (this["col"] != old) {
		this.didMutate("down");
	}
}

state.onLeft = function() {
	let old = this["row"];
	this["row"] = clamp(this["row"] - 1, 0, this["maxRow"]);
	if (this["row"] != old) {
		this.didMutate("left");
	}
}

state.onRight = function() {
	let old = this["row"];
	this["row"] = clamp(this["row"] + 1, 0, this["maxRow"]);
	if (this["row"] != old) {
		this.didMutate("right");
	}
}

state.didMutate = function(dir) {
	console.log("State: " + this["row"] + "," + this["col"]);
	animate(state.currentScene(), dir);
}

/* Animating Scene Changes */

	function animate(nextScene, fromDir) {

		if (!state["transition"]) {

			let previousDiv = $("#contents").children()[0];

			let div = nextScene.getDiv();
			div.style.position = "absolute";
			
			switch (fromDir) {
				case "up":
					div.style.top = -5000;
				break;

				case "down":
					div.style.left = 0;
					div.style.top = 5000;
				break;

				case "left":
					div.style.left = -5000;
					div.style.top = 400;
				break;

				case "right":
					div.style.left = 5000;
					div.style.top = 400;
				break;
			}

			$("#contents").append(div);
			div.present = 1;

			state["transition"] = true;
			$(div).animate({
				left: 0,
				top: 0,
			}, {
				complete: function() {
					/* Remove all other divs.  (?) */
					state["transition"] = false;
				}
			});

			if (!!previousDiv) {
				previousDiv.present = 0;
				$(previousDiv).animate({
					opacity: 0,
					duration: 200,
				}, {
					complete: function() {
						$(previousDiv).remove();
					}
				});
			}

		}
	}


$(document).ready(function() {
	initialize();
	start();
});


function initialize() {
	state["position_x"] = 2;
	state["position_y"] = 2;

	/* adapted from: http://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery */
	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
		        state.onLeft();
		        break;
	        case 38: // up
		        state.onUp();
		        break;
	        case 39: // right
		        state.onRight();
		        break;
	        case 40: // down
		        state.onDown();
		        break;
	        default: return;
	    }
	    e.preventDefault();
	});
}

function start() {
	console.log("[main] Starting...");

	// Show first scene. 
	state.onUp();
	animate(state.currentScene(), "up");
}

/* 
var laughTrack = new Pizzicato.Sound({ 
    source: 'file',
    options: {path: ['sound/laugh.wav', 'sound/laugh.mp3'], loop: true}
}, function() {
    console.log('sound file loaded!');
	laughTrack.play();
	textDidChange("");
});
*/


