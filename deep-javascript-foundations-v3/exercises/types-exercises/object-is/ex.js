// TODO: define polyfill for `Object.is(..)`

function ObjectIs(x, y) {
	const xNegativeZero = isNegativeZero(x);
	const yNegativeZero = isNegativeZero(y);

	if (xNegativeZero || yNegativeZero) {
		return xNegativeZero && yNegativeZero;
	} else if (x !== x && y !== y) {
		return true;
	} else if (x === y) {
		return true;
	}

	return false;

	function isNegativeZero(x) {
		return x === 0 && 1 / x === -Infinity;
	}
}

if (!Object.is /* || true */) {
	Object.is = ObjectIs;
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
