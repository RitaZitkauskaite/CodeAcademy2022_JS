/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */

const audi = {
	make: "audi",
	model: "A6",
	year: 2005,
	color: "white",
};

function showObjectKeys(obj) {
	return console.log(Object.keys(obj));
}
showObjectKeys(audi);
