//Creating form and meme list variable
document.addEventListener("DOMContentLoaded", function () {
	let mForm = document.getElementById("memeform");
	let memeList = document.getElementById("collection");

	// TITLE STYLING
	function randomRGB() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return `rgb(${r}, ${g}, ${b})`;
	}

	const letters = document.querySelectorAll(".title");

	setInterval(function () {
		for (let letter of letters) {
			letter.style.color = randomRGB();
		}
	}, 1000);

	// FORM VALIDATION
	function validForm() {
		let a = document.forms["memeform"]["tt"].value;
		let b = document.forms["memeform"]["bt"].value;
		let c = document.forms["memeform"]["i"].value;

		if (a == "" || b == "" || c == "") {
			alert(
				"It seems like the form was not completed. :( Please review your input and provide a response for every portion of the form!"
			);
		} else {
			return alert("Your meme is being generated! ");
		}
	}

	// MEME GENERATION
	mForm.addEventListener("submit", function (e) {
		e.preventDefault();
		validForm();

		//creating list variable for meme images
		let list = document.createElement("li");
		list.classList.add("image");

		let url = document.querySelector("#image").value;
		let img = document.createElement("img");
		img.src = url;

		let tText = document.createElement("div");
		tText.classList.add("text", "top");
		tText.innerText = document.getElementById("topText").value;

		let bText = document.createElement("div");
		bText.classList.add("text", "bottom");
		bText.innerText = document.getElementById("bottomText").value;

		let remove = document.createElement("div");
		remove.classList.add("red-cross");
		remove.innerText = "X";

		memeList.appendChild(list);
		list.appendChild(img);
		list.appendChild(tText);
		list.appendChild(bText);
		list.appendChild(remove);

		mForm.reset();
	});

	// remove button
	function remove(e) {
		e.target.parentNode.remove();
	}

	memeList.addEventListener("click", remove, false);
});
