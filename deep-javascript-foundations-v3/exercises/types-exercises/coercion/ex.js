// TODO: write the validation functions

function isValidName(name) {
	if (typeof name !== 'string') {
		return false;
	}

	name = name.trim();

	if (name.length < 3) {
		return false;
	}

	return true;
}

function hoursAttended(attended, length) {
	var attendedTypeIsValid = isValidType(attended);
	var lengthTypeIsValid = isValidType(length);

	if (!(attendedTypeIsValid && lengthTypeIsValid)) {
		return false;
	}

	attended = Number(attended);
	length = Number(length);

	if (!(isGreaterThanZero(attended) && isGreaterThanZero(length))) {
		return false;
	}

	if (!(isNumberWhole(attended) && isNumberWhole(length))) {
		return false;
	}

	if (attended > length) {
		return false;
	}

	return true;

	/* ---------- */

	function isNumberWhole(x) {
		return x == Math.floor(x);
	}

	function isGreaterThanZero(x) {
		return x > 0;
	}

	function isValidType(x) {
		return typeof x === 'string' || typeof x === 'number';
	}
}

// tests:
console.log(isValidName('Frank') === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, '10') === true);
console.log(hoursAttended('6', 10) === true);
console.log(hoursAttended('6', '10') === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName('') === false);
console.log(isValidName('  \t\n') === false);
console.log(isValidName('X') === false);
console.log(hoursAttended('', 6) === false);
console.log(hoursAttended(6, '') === false);
console.log(hoursAttended('', '') === false);
console.log(hoursAttended('foo', 6) === false);
console.log(hoursAttended(6, 'foo') === false);
console.log(hoursAttended('foo', 'bar') === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, '6') === false);
console.log(hoursAttended('10', 6) === false);
console.log(hoursAttended('10', '6') === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, '10.1') === false);
console.log(hoursAttended('6.1', 10) === false);
console.log(hoursAttended('6.1', '10.1') === false);
