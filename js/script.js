'use strict';

let startTime = new Date();

const runInterval = (fn) => {
	setInterval(fn, 1000);
	fn();
}

const getTime = () => {
	// console.warn('test')
	let time = new Date(2021, 0, 1, 13, 33, 54, 567);
	let diff = new Date() - startTime;
	time.setMilliseconds(time.getMilliseconds() + diff);

	return time;
}

const runAnalogClock = () => {
	const deg = 6;
	const hr = document.querySelector('#hr');
	const min = document.querySelector('#min');

	const interval = () => {
		const time = getTime();

		let hh = time.getHours() * 30;
		let mm = time.getMinutes() * deg;

		hr.style.transform = `rotate(${(hh) + (mm / 12)}deg) translateX(-50%)`;
		min.style.transform = `rotate(${mm}deg) translateX(-50%)`;
	}

	runInterval(interval)
}

const runDigitalClock = () => {

	const interval = () => {
		const time = getTime();

		let hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours(),
			minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes(),
			currentTime = hours + ":" + minutes;

		document.getElementById("item1").innerHTML = currentTime[0];
		document.getElementById("item2").innerHTML = currentTime[1];
		document.getElementById("item3").innerHTML = currentTime[3];
		document.getElementById("item4").innerHTML = currentTime[4];
	}

	runInterval(interval)
}

runAnalogClock();
runDigitalClock();


