var NowDate = new Date();
var y = getParameterByName("y");
if (!y) { y = NowDate.getFullYear(); }
var m = getParameterByName("m");
if (!m) { m = NowDate.getMonth() + 1; }
var d = getParameterByName("d");
if (!d) { d = NowDate.getDate(); }

var UntilDate = new Date(y + "-" + m + "-" + d);

var loop = setInterval(ChangeCountdown, 10);

document.getElementById("timelabelToday").innerHTML = ("Today is " + NowDate.toISOString().split("T")[0])
document.getElementById("timelabeltop").innerHTML = ("Remaining time until " + UntilDate.toISOString().split("T")[0]);
window.document.title = ("Remaining time until " + UntilDate.toISOString().split("T")[0]);

function ChangeCountdown() {
	NowDate = new Date();
	const diffMilli = Math.abs(UntilDate - NowDate);
	const diffSeconds = Math.ceil(diffMilli / 1000);
	const diffMinutes = Math.ceil(diffMilli / (1000 * 60));
	const diffHours = Math.ceil(diffMilli / (1000 * 60 * 60));
	const diffDays = Math.ceil(diffMilli / (1000 * 60 * 60 * 24));
	document.getElementById("DaysLabel").innerHTML = (diffDays + " days");
	document.getElementById("HoursLabel").innerHTML = (diffHours + " hours");
	document.getElementById("MinutesLabel").innerHTML = (diffMinutes + " minutes");
	document.getElementById("SecondsLabel").innerHTML = (diffSeconds + " seconds");
	document.getElementById("MilliLabel").innerHTML = (diffMilli + " milliseconds");
}

function getParameterByName(name, url) {
	url = url || window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}