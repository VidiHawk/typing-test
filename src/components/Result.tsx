import { resetTest } from "helpers/resetTest";
import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Result.scss";


export default function Result() {
	const {
		word: { wordList, typedHistory, currWord },
		preferences: { timeLimit },
	} = useSelector((state: State) => state);
	const spaces = wordList.indexOf(currWord);
	let correctChars = 0;
	const result = typedHistory.map(
		(typedWord, idx) => typedWord === wordList[idx]
	);
	result.forEach((r, idx) => {
		if (r) correctChars += wordList[idx].length;
	});
	const wpm = ((correctChars + spaces) * 60) / timeLimit / 5;
	const numberOfCorrectWords = result.filter((x) => x).length;
	const numberOfIncorrectWords = result.filter((x) => !x).length;
	const accuracy = Math.round(numberOfCorrectWords/(numberOfIncorrectWords+numberOfCorrectWords)*100);
	const today = new Date().toLocaleDateString(undefined, {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	})

	// Defining new scores to be added
	let todayScore = {
		date: today,
		wpm: wpm,
		accuracy: accuracy,
		correct: numberOfCorrectWords,
		incorrect: numberOfIncorrectWords
	}

	// Retrieve the object from storage

	if (localStorage.getItem('allScores') === null) {
		let newObct = {"highest": today,"scores":[todayScore]};
		localStorage.setItem('allScores', JSON.stringify(newObct));
	} 

	let allScores = {
		"highest": {
			"date": "June 3, 2022",
			"wpm": 2,
			"accuracy": 4,
			"correct": 3,
			"incorrect": 2
		},
		"scores": [
			{
				"date": "May 31, 2022",
				"wpm": 1,
				"accuracy": 58,
				"correct": 23,
				"incorrect": 16
			}
		]
	}

	// let allScores = JSON.parse(JSON.stringify(localStorage.getItem('allScores')));
	// console.log('retrievedObject: ', allScores);
	// console.log('wpm: ', wpm);

	// let brokenRecord = false;

	// if (todayScore.wpm > allScores.highest.wpm) {
	// 	let brokenRecord = true;
	// 	allScores.highest = todayScore;
	// 	allScores['scores'].push(todayScore);
	// 	localStorage.setItem('allScores', JSON.stringify(allScores));
    // }

	// console.log("allScores: ", allScores)

	const bestWpm = allScores.highest.wpm;
	const bestAccuracy = allScores.highest.accuracy;
	const bestDate = allScores.highest.date;


	return (
		<div className="result">
			<table>
				<tbody>
					<tr>
						<td colSpan={2} align="center">
							<h1>{"Typing speed: " + Math.round(wpm) + " wpm"}</h1>
						</td>
					</tr>
					<tr>
						<td colSpan={2} align="center">
							<h1>{accuracy + "% accuracy rate"}</h1>
						</td>
					</tr>
					<tr>
						<th>Correct Words: {numberOfCorrectWords}</th>
					</tr>
					<tr>
						<th>Incorrect Words: {numberOfIncorrectWords}</th>
					</tr>
						<br></br>
					<tr>
						<th>your previous fastest speed of {bestWpm} wpm and accuracy of {bestAccuracy}%</th>
					</tr>
					<tr>
						<th>was recorded on {bestDate}</th>
					</tr>
						<br></br>
					<tr>
						<td colSpan={2} align="center">
							<button onClick={() => resetTest()}>Restart</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
