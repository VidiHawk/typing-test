var testObject = {
	highest: {
		date: "June 3, 2022",
		wpm: 199,
		accuracy: 4,
		correct: 3,
		incorrect: 2,
	},
	scores: [
		{
			date: "May 31, 2022",
			wpm: 34,
			accuracy: 58,
			correct: 23,
			incorrect: 16,
		},
		{
			date: "June 1, 2022",
			wpm: 45,
			accuracy: 46,
			correct: 30,
			incorrect: 21,
		},
		{
			date: "June 2, 2022",
			wpm: 99,
			accuracy: 4,
			correct: 3,
			incorrect: 2,
		},
		{
			date: "June 3, 2022",
			wpm: 199,
			accuracy: 4,
			correct: 3,
			incorrect: 2,
		},
	],
};

// Put the object into storage
localStorage.setItem("testObject", JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem("testObject");

// var allScores = JSON.parse(retrievedObject)

console.log("retrievedObject: ", retrievedObject);
