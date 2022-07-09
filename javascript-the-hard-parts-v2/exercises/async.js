/* CHALLENGE 1 */

function sayHowdy() {
	console.log('Howdy');
}

function testMe() {
	setTimeout(sayHowdy, 0);
	console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?
// first 'Partnah' then 'Howdy'

/* CHALLENGE 2 */

function delayedGreet() {
	setTimeout(() => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
	console.log('hello');
	setTimeout(() => console.log('good bye'), 3000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
	setInterval(() => console.log('hi again'), 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
	const interval = setInterval(() => console.log('hi for now'), 1000);
	setTimeout(() => clearInterval(interval), 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
	const intervalToRun = setInterval(func, interval * 1000);
	setTimeout(() => clearInterval(intervalToRun), duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
	console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 1, 5); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
	let counter = 0;
	const innerFunc = () => {
		const interval = setInterval(() => {
			counter++;
			console.log(counter);
		}, wait);

		setTimeout(() => clearInterval(interval), target * wait);
	};
	return innerFunc;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
	return new Promise((resolve) => setTimeout(() => resolve(val), 2000));
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
	constructor(cb) {
		this.cb = cb;
		this.seconds = 0;
		this.interval;
	}

	start() {
		this.interval = setInterval(() => {
			this.seconds++;
			this.cb(this.seconds);
		}, 1000);
	}

	reset() {
		clearInterval(this.interval);
		this.seconds = 0;
	}
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
	console.log(val);
});
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
	let timeSinceLastRun = interval;
	setInterval(() => (timeSinceLastRun += 100), 100);

	const innerFunc = () => {
		// const flag  = timeSinceLastRun >= interval;
		// timeSinceLastRun = 0;															METHOD 1
		// return flag ? callback() : undefined;

		if (timeSinceLastRun >= interval) {
			timeSinceLastRun = 0;
			return callback(); //																METHOD 2
		}
		timeSinceLastRun = 0;
	};
	return innerFunc;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
	return 'hi';
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
	console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
	console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
	console.log(giveHiSometimes());
}, 8000); // -> 'hi'
