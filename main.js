import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();

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
	let scores = getRandomScores(10);

	document.querySelector("#button-2a").addEventListener("click", function () {
		// TODO: sort
		scores = scores.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});

		const sum = scores.reduce(function (total, current) {
			return total + current;
		});

		console.log(sum);

		// TODO: ul toevoegen
		let html = "<ul></ul>";

		// TODO: li per scroe
		scores.forEach(function (score) {
			console.log(score);
			//TODO: li toevoegen
			html += `<li>${score}</li>`;
		});
		// TODO: toevoegen aan html
		document.querySelector("#content-2").innerHTML = html;
	});
}

function warmup3() {
	let student = getStudentJSON();
	// TODO: A omzetten naar JS object en loggen
	const studentObject = JSON.parse(student);
	document.querySelector("#button-3a").addEventListener("click", function () {
		console.log(studentObject);
	});

	// TODO: B html renderen om webpagina
	document.querySelector("#button-3b").addEventListener("click", function () {
		document.querySelector(
			"#content-3"
		).innerHTML = `<h2>${studentObject.firstname}`;
		document
			.querySelector("#content-3")
			.insertAdjacentHTML("beforeend", `${studentObject.age}`);
	});
}

function warmup4() {
	let main, min, max;

	const URL =
		"http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric";

	fetch(URL)
		.then(function (response) {
			console.log("First part of response received...");
			console.log(response);
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			renderHTML(data.main.temp, data.main.temp_min, data.main.temp_max);
		});

	function renderHTML(main, min, max) {
		document.querySelector("#button-4b").addEventListener("click", function () {
			document.querySelector("#content-4").innerHTML = `
			<h2>Temp: ${main}°C</h2>
			<h2>Min temp: ${min}°C</h2>
			<h2>Max temp: ${max}°C</h2>`;
		});
	}
}

function warmup5() {}
