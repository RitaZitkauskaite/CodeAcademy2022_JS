/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(first, second) {
	this.first = first;
	this.second = second;
}
Calculator.prototype.sum = function () {
	return this.first + this.second;
};
Calculator.prototype.subtraction = function () {
	return this.first - this.second;
};
Calculator.prototype.multiplication = function () {
	return this.first * this.second;
};
Calculator.prototype.division = function () {
	return this.first / this.second;
};

const testCalc = new Calculator(3, 5);

console.log(testCalc.sum());
console.log(testCalc.subtraction());
console.log(testCalc.multiplication());
console.log(testCalc.division());
