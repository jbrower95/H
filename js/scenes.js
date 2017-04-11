
/* 5x5 array of scenes to display. */
const scenes = [];

// define a 5x5 grid of scenes.
const NUM_ROWS = 5;
const NUM_COLS = 5;

const writing = [
	["Off in the distance, a basset hound wipes his buttocks on the grass.", "The smell of red camel cigarettes blows in from the east.", "It is a calm summer day in Duluth, Minnesota.", "Two young people share a picnic on a red plaid blanket. One of them has forgotten the sour cream.", "Nearby, a school releases its students for the day. It is 3pm. I confirm this on my cell phone."],
	["\"Let's play a game\", says Shaun. Shaun is an asshole. Shaun wears blue shorts and a white t-shirt, with a small stain near the neck. Shaun's sweat creates a harsh gradient near his armpits.", "\"What are you doing?\" I ask. I know what they are doing, but this is a good way to start the conversation.", "A pair of birds scream from the top of a tree. Sunlight cuts through the branches.", "My legs strain. I have been sitting for a while.", "I recall earlier days, when Shaun's mother left him to play at my house. Shaun loved my collection of legos. Shaun is an asshole now."],
	["\"What kind of game?\" I ask.", 	"There is a large, round, orange ball on the ground. I have not seen a ball in many years. When I was younger, my mother drove me to register for the basketball team, but crashed into a pole on the way. I never played sports again.", "The hot gravel *stinks* of scraped knees and elbows. I haven't worn a band-aid in many years.", "I admit to playing. \"Let's go.\"", "I become awfully aware of a large floater within my right eye. I assume that my eye is leaking, and that I will no longer be able to see by the end of this game."],
	["\"Horse.\" The least creative of games crafted for this field, I reckon.", 	"I notice that I have not had water in many hours. I throw Shaun's ball into the air, missing the hoop.", "\"I've got it.\". I run after the ball, my hands in my pockets, grasping my phone. Shorts of this type are not made for running with things in your pocket. It would be awfully cool, I reckon, if you could tape your phone to your arm.", 	"I have never been an accurate shot, before.", "I suppose that I could have left."],
	["\"H\"", 	"I am sitting in a white cot, my hands at my side. A periodic beeping alerts me of my consciousness.", "I am told that I am struck by a seafoam green '72 ford pickup running a red light.",  "My left foot touches ground, striking asphalt with resolve. A tear of sweat touches my nose. I am very thirsty.", "Near the street I observe a fire hydrant. To avoid painfully colliding with it, I change course."]
];

/* bg colors */
const colors = [
	["#ff", "#ff", "#ff", "#ff", "#ff"],
	["#ff", "#ff", "#ff", "#ff", "#ff"],
	["#ff", "#ff", "#ff", "#ff", "#ff"],
	["#ff", "#ff", "#ff", "#ff", "#ff"],
	["#ff", "#ff", "#000000", "#ff", "#ff"]
];

const textColors = [
	["#00", "#00", "#00",     "#00", "#00"],
	["#00", "#00", "#00",     "#00", "#00"],
	["#00", "#00", "#00",     "#00", "#00"],
	["#00", "#00", "#00",     "#00", "#00"],
	["#00", "#00", "#28F3AC", "#00", "#00"],
];

console.log("[scenes] Building scenes...");

for (let i = 0; i < NUM_ROWS; i++) {
	scenes.push([]);
	for (let j = 0; j < NUM_COLS; j++) {
		scenes[i].push(mkScn(writing[i][j], colors[i][j], textColors[i][j]));
	}
}

console.log("[scenes] Done.");
