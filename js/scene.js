/* 
	Scene object
	------------

	Get scene's div: 		scene.getDiv()
	Remove scene's div: 	scene.remove()
*/
function mkScn(caption, color, textColor) {
	let scn = {
		"caption"   : caption,
		"color"	    : color,
		"textColor" : textColor
	};

	/* Return a new div for this scene. */
	scn.getDiv = function() {
		let div = document.createElement("div");

		div.style.background     = this.color;
		div.style.display        = "flex";
		div.style.justifyContent = "center";
		div.style.alignItems = "center";
		
		div.style.width  = "100%";
		div.style.height = "100%";

		let text = document.createElement("p");
		text.innerHTML   =   this.caption;
		text.style.color = this.textColor;

		div.appendChild(text);
		this.div = div;
		return this.div;
	}

	scn.destroy = function() {
		if (!!this.div) {
			/* Remove the div. */
			$(this.div).remove();
		}
	}

	return scn;
}

