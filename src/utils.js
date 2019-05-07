export function wait(delay) {
	return new Promise(function(resolve) {
		setTimeout(resolve, delay);
	});
}

export function formatDate(date) {
	let dd = date.getDate();
	if (dd < 10)
		dd = '0' + dd;
	let mm = date.getMonth() + 1;
	if (mm < 10)
		mm = '0' + mm;
	let yyyy = date.getFullYear();
	return `${dd}.${mm}.${yyyy}`;
}
