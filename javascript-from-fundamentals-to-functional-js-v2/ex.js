import _ from 'lodash';

const newDevelopment = [
	{
		name: 'Miss Scarlet',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: true },
			{ 'dining room': true },
			{ 'billiard room': false },
			{ library: true },
		],
	},
	{
		name: 'Reverend Green',
		present: true,
		rooms: [
			{ kitchen: true },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': true },
			{ library: false },
		],
	},
	{
		name: 'Colonel Mustard',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: true },
			{ 'dining room': false },
			{ 'billiard room': true },
			{ library: false },
		],
	},
	{
		name: 'Professor Plum',
		present: true,
		rooms: [
			{ kitchen: true },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': true },
			{ 'billiard room': false },
			{ library: false },
		],
	},
];

// const notInRoom = (suspect) => {
// 	const emptyRooms = _.reduce(
// 		suspect.rooms,
// 		(room, memo) => {
// 			if ((room = false)) memo.push(room);
// 			return memo;
// 		},
// 		[]
// 	);

// 	console.log(emptyRooms);
// 	return emptyRooms;
// };

// const notInRooms = _.map(newDevelopment, notInRoom);

// console.log(notInRooms);
// console.log(_.intersection(...notInRooms));

// const myAlert = () => {
//   const x = 'Help! I think I found a clue!';
//   let count = 0
// 	const alerter = () => {
// 		console.log(`${x} ${++count}`);
// 	};

//   return alerter;
// };

// const funcAlert = myAlert();
// const funcAlert2 = myAlert();
// funcAlert();
// funcAlert();
// funcAlert();
// funcAlert2();
// funcAlert2();

const compose = function (fn1, fn2) {
	return function (arg) {
		return fn1(fn2(arg));
	};
};

var greet = function (name) {
	return 'hi: ' + name;
};
var exclaim = function (statement) {
	return statement.toUpperCase() + '!';
};
var welcome = compose(greet, exclaim);
console.log(welcome('moe'));
