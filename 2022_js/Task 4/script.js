/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const outputDiv = document.getElementById("output");
outputDiv.style.padding = "40px 0";
document.addEventListener("DOMContentLoaded", async () => {
	const data = fetch("./cars.json")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.forEach((post) => {
				const divEl = document.createElement("div");
				divEl.style.maxWidth = "800px";
				const brandEl = document.createElement("h2");
				const modelsEl = document.createElement("h3");
				const modelsArr = post.models;
				brandEl.textContent = post.brand;
				modelsEl.textContent = modelsArr;
				divEl.append(brandEl);
				divEl.append(modelsEl);
				outputDiv.append(divEl);
			});
		});
});
