import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
	console.log("Exercise week 1");
	document.querySelector("#button-1a").addEventListener("click", function () {
		/* console.log("test"); */
		document.querySelector("#content-1").innerHTML =
			"<p>Hallo, dit is de oefening van Hamza</p>";
	});

	document.querySelector("#button-1b").addEventListener("click", function () {
		/* console.log("test"); */
		document.querySelector("#section-1").style.background = "lightblue";
	});

	document.querySelector("#button-1c").addEventListener("click", function () {
		/* console.log("test"); */
		const newElement = document.createElement("div");
		newElement.innerHTML = "<h1>Ik ben er klaar voor</h1>";

		document.querySelector(".content").append(newElement);
	});
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
