import { Database } from "./database";

describe("test database functions", () => {
	describe("getObjectById", () => {
		const id = "123";
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
		let database;
		beforeEach(() => {
			database = new Database();
		});

		it("creates a database", () => {
			expect(database).toBeDefined();
		});

		it("can get the database with get method when database is empty", async () => {
			expect(await database.get()).toEqual([]);
		});

		it("can add an object to database with add method", async () => {
			await database.add(graph1);
			expect(await database.get()).toEqual([graph1]);
		});

		it("can get elements by userId with getByUserId", async () => {
			await database.add(graph1);
			await database.add(graph2);
			expect(await database.getByUserId(id)).toEqual([graph1]);
			await database.add(graph3);
			await database.add(graph4);
			expect(await database.getByUserId(id)).toEqual([graph1, graph3]);
		});

		it("can get element by userId and graphName with getGraphByIdAndName", async () => {
			await database.add(graph1);
			await database.add(graph2);
			expect(await database.getGraphByIdAndName("543", "gains")).toEqual(
				graph2
			);
			await database.add(graph3);
			await database.add(graph4);
			expect(await database.getGraphByIdAndName("123", "pushups")).toEqual(
				graph3
			);
		});

		it("adds a datapoint when addDatapoint(point) is called", async () => {
			await database.add(graph1);
			await database.add(graph2);
			expect(graph2.dataPoints[graph2.dataPoints.length - 1]).toEqual(6.5);
			await database.addDatapoint(5, "543", "gains");
			const newGraph = (
				await database.getGraphByIdAndName("543", "gains")
			);
			expect(newGraph.dataPoints[newGraph.dataPoints.length - 1]).toEqual(5);
		});
	});
});
