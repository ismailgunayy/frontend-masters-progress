import _ from 'lodash';

_.reduce = function (collection, callback, accumulator) {
	if (Array.isArray(collection)) {
		accumulator = accumulator == undefined ? collection[0] : accumulator
		for (let i = 0; i < collection.length; i++) {
			accumulator = callback(accumulator, collection[i], i);
		}
	} else {
		for (let key in collection) {
			accumulator = callback(accumulator, collection[key], key);
		}
	}
	return accumulator;
};

let result = _.reduce(
	[1, 2],
	function (sum, n) {
		return sum + n;
	},
	0
);

// console.log(result);

// result = _.reduce(
// 	{ a: 1, b: 2, c: 1 },
// 	function (result, value, key) {
// 		(result[value] || (result[value] = [])).push(key);
// 		return result;
// 	},
// 	{}
// );

result = _.reduce(
	{ a: 1, b: 2, c: 1 },
	function (result, value, key) {
		result.push(value)
		return result
	},
	[]
);

console.log(result);
