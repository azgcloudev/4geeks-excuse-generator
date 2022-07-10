const initialLoad = () => {
	// eslint-disable-next-line no-console
	console.log("JS connected to HTML");

	let who = ["The dog", "My grandma", "His turtle", "My bird"];
	let action = ["ate", "peed", "crushed", "broke"];
	let what = ["my homework", "the keys", "the car"];
	let when = [
		"before the class",
		"right on time",
		"when I finished",
		"during my lunch",
		"while I was praying"
	];

	let excuseOptions = [who, action, what, when];

	const randomNumber = max => Math.floor(Math.random() * max);

	const generatExcuse = () => {
		let displayPhrase = []; // array to store the created excuse phrase
		let excuseOptionslength = excuseOptions.length;

		//Loop to create a excuse from the arrays
		for (let i = 0; i < excuseOptionslength; i++) {
			let excuseOptionLen = excuseOptions[i].length;
			displayPhrase.push(excuseOptions[i][randomNumber(excuseOptionLen)]);
		}

		return displayPhrase;
	};

	let stringArray = generatExcuse();

	let finalResult = stringArray.join(" ");

	document.getElementById("excuse").innerText = finalResult;
};

window.addEventListener("DOMContentLoaded", initialLoad);