/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "https://api.github.com/users";

const btnEl = document.getElementById("btn");
const outputDiv = document.getElementById("output");
btnEl.addEventListener("click", async () => {
	try {
		const response = await fetch(ENDPOINT);
		const resp = await response.json();
		const divEl = document.createElement("div");
		divEl.style.textAlign = "center";
		resp.forEach((post) => {
			const placeholder = document.getElementById("message");
			placeholder.textContent = "";
			const h2El = document.createElement("h2");
			const pEl = document.createElement("p");
			h2El.textContent = post.login;
			h2El.style.backgroundColor = "burlywood";

			pEl.textContent = post.avatar_url;
			pEl.style.paddingBottom = "50px";
			pEl.style.marginBottom = "10px";
			pEl.style.backgroundColor = "#FBE6FF";

			divEl.append(h2El);
			divEl.append(pEl);
		});
		outputDiv.append(divEl);
	} catch (e) {
		console.log(e);
	}
});
