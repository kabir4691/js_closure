//
function nonsense(string) {
	var blab = function() {
		alert(string);
	};
	setTimeout(blab, 2000);
}
nonsense("hello");

//
function nonsense(string) {
	var blab = function() {
		alert(string);
	};
	return blab;
}
let blabLater = nonsense("hello");
let blabAgainLater = nonsense("bye");

//
let outer = function(firstName) {
	let inner = function(lastName) {
		console.log(`${firstName} ${lastName}`);
	};
	return inner;
};
let namePrinter = outer("Kabir");
namePrinter("Nazir");

//
function storyWriter() {
	return (storyObject = {
		story: "",
		addWords: function(words) {
			return (this.story += " " + words);
		},
		erase: function() {
			this.story = "";
			return this.story;
		}
	});
}

let testStory = storyWriter();
testStory.addWords("Naino mein sapna");
testStory.addWords("Sapna mein sajna");
testStory.erase();
