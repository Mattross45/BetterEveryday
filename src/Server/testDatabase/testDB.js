import { Database } from "./database";

const db = new Database();

const graph1 = {
	userId: "123",
	graphName: "motivation",
	color: "hsl(178, 79%, 10%)",
	dataPoints: [1, 2, 2.4, 4.5],
};
const graph2 = {
	userId: "543",
	graphName: "gains",
	color: "hsl(179, 70%, 50%)",
	dataPoints: [1, 7, 2.1, 6.5],
};
const graph3 = {
	userId: "123",
	graphName: "pushups",
	color: "hsl(60, 43%, 90%)",
	dataPoints: [1, 2, -2.4, 1.5],
};
const graph4 = {
	userId: "1029",
	graphName: "pull-ups",
	color: "hsl(23, 92%, 50%)",
	dataPoints: [1, 2.4, 2.4, -4.5],
};

db.add(graph1);
db.add(graph2);
db.add(graph3);
db.add(graph4);


module.exports = db;