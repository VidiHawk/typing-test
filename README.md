// import Result from "components/Result"

const wpm = 10
const numberOfCorrectWords = 48
const numberOfIncorrectWords = 50
const ratioCorrectWords = Math.round(numberOfCorrectWords/(numberOfIncorrectWords+numberOfCorrectWords)\*100)

const today = new Date().toLocaleDateString(undefined, {
day: '2-digit',
month: 'long',
year: 'numeric',
})

// Defining new data to be added
let newData = {
date: 'June 3, 2022',
wpm: 199,
accuracy: 4,
correct: 3,
incorrect: 2
}

const fs = require('fs');
var data = fs.readFileSync('src/scores/scores.json');
var allScores = JSON.parse(data);

if (newData.wpm > allScores.highest.wpm) {
allScores.highest = newData;
allScores['scores'].push(newData);
fs.writeFileSync('src/scores/scores.json', JSON.stringify(allScores));
} else {

};

console.log("existing scores: ", allScores);

// var dataArray = [];
// dataArray.push(myObject);
// dataArray[0].push(newScore);

// var newJason = JSON.stringify(dataArray);
// fs.writeFileSync("src/scores/data2.json", newJason)

// console.log(dataArray.scores);
