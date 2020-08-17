const transformDataFromListToChart = (list) => {
	try {
		return list.map((value, key) => {
			return { x: key, y: value };
		});
	} catch (e) {
		throw e;
	}
};

const newDay = (list, positiveDay, rate = 0.01) => {
	let multiplier = positiveDay ? 1 : -1;
	return list.length
		? list.concat(
				Math.round(list.slice(-1)[0] * (1 + multiplier * rate) * 100) / 100
		  )
		: [1];
};

export { transformDataFromListToChart, newDay };
