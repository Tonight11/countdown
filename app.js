const birthday = new Date(prompt("Введите через запятую дату вашего ближайщего дня рождения(год,месяц,день==2022,01,21)"));



let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');



if (typeof(birthday) != 'object') {
	alert("Обновите страницу. Напишите дату и ничто другое, соблюдайте правила. C Уважением Баястан");
	window.location.reload();
}

function countdown() {
	const currentDate = new Date();

	let totalSecond = (birthday - currentDate) / 1000;

	let day = Math.floor(totalSecond / 3600 / 24)
	let hour = Math.floor(totalSecond / 3600) % 24;
	let minute = Math.floor(totalSecond / 60) % 60;
	let second = Math.floor(totalSecond % 60);

	days.innerText = day;
	hours.innerText = fullFill(hour);
	minutes.innerText = fullFill(minute);
	seconds.innerText = fullFill(second);

}

function fullFill(item) {
	if (item < 10) {
		return `0${item}`;
	} else {
		return item
	}
}

setInterval(countdown, 1000)
