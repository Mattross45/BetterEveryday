const request = require("supertest");
const app = require("./server");
const { Database } = require("./testDatabase/Database");

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
const addGraphs = async () => {
	await db.add(graph1);
	await db.add(graph2);
	await db.add(graph3);
	await db.add(graph4);
};
addGraphs();

describe("server", () => {
	it("get data from specific id with GET  @/:id", async () => {
		const res = await request(app).get("/543");
		expect(res.body[0].graphName).toEqual("gains");
	});

	it("gets data from specific id with GET@:id when 2 ids", async () => {
		const res = await request(app).get("/123");
		expect(res.body).toEqual([graph1, graph3]);
	});

	it("get data from specific id and name with GET  @/:id/:name", async () => {
		const res = await request(app).get("/123/motivation");
		expect(res.body).toEqual(graph1);
	});

	it("updates a graph with PUT@:id/:name", async () => {
		const res = await request(app).put("/543/gains").send({ number: 5 });
		expect(res.body.dataPoints[res.body.dataPoints.length - 1]).toEqual(5);
	});
});
