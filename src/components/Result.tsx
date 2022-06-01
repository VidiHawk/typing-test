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
	const ratioCorrectWords = Math.round(numberOfCorrectWords/(numberOfIncorrectWords+numberOfCorrectWords)*100);

	// const wpm = 10
	// const numberOfCorrectWords = 48
	// const numberOfIncorrectWords = 50
	// const ratioCorrectWords = Math.round(numberOfCorrectWords/(numberOfIncorrectWords+numberOfCorrectWords)*100)

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

	// const fs = require('fs');
	// var data = fs.readFileSync('src/scores/scores.json');
	// var allScores = JSON.parse(data);
	// let brokenRecord = false;

	// if (newData.wpm > allScores.highest.wpm) {
	// 	brokenRecord = true;
	// 	allScores.highest = newData;
	// 	allScores['scores'].push(newData);
	// 	fs.writeFileSync('src/scores/scores.json', JSON.stringify(allScores));
	// } else {}

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
							<h1>{ratioCorrectWords + "% correct"}</h1>
						</td>
					</tr>
					<tr>
						<th>Correct Words:</th>
						<td>{numberOfCorrectWords}</td>
					</tr>
					<tr>
						<th>Incorrect Words:</th>
						<td>{numberOfIncorrectWords}</td>
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
