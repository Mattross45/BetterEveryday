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

const endpoint = "http://localhost:4001/";

const getDataFromUser = async (id) => {
	const response = await fetch(`${endpoint}${id}`, {
		method: "GET",
	});
	return response.json();
};

const getGraphFromUserAndName = async (id, name) => {
	const response = await fetch(`${endpoint}${id}/${name}`, {
		method: "GET",
	});
	return response.json();
};

const updateGraph = async (id, name, addedItem) => {
	const response = await fetch(`${endpoint}${id}/${name}`, {
		method: "PUT",
		body: JSON.stringify({ number: addedItem }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};

export {
	transformDataFromListToChart,
	newDay,
	getDataFromUser,
	getGraphFromUserAndName,
	updateGraph,
};
