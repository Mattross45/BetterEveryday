import { transformDataFromListToChart, newDay, getDataFromUser } from "./util";
import { graph1, graph2, graph3, graph4 } from "./Server/testDatabase/testDB";

describe("transformDataFromListToChart", () => {
	it("returns an empty list when empty list is given", () => {
		const list = [];
		expect(transformDataFromListToChart(list)).toEqual([]);
	});

	it("return a list with {x:, y:} object when given a 1 element list", () => {
		const list1 = [3];
		const list2 = [12];
		expect(transformDataFromListToChart(list1)).toEqual([{ x: 0, y: 3 }]);
		expect(transformDataFromListToChart(list2)).toEqual([{ x: 0, y: 12 }]);
	});

	it("return a list with {x:, y:} objects when given a n element list", () => {
		const list1 = [3, 8];
		const list2 = [9, 2, -12, 199.98];
		expect(transformDataFromListToChart(list1)).toEqual([
			{ x: 0, y: 3 },
			{ x: 1, y: 8 },
		]);
		expect(transformDataFromListToChart(list2)).toEqual([
			{ x: 0, y: 9 },
			{ x: 1, y: 2 },
			{ x: 2, y: -12 },
			{ x: 3, y: 199.98 },
		]);
	});
});

describe("newDay", () => {
	it("starts with 1 when list is empty", () => {
		const list = [];
		expect(newDay(list, true)).toEqual([1]);
	});

	it("adds correct value when true is given", () => {
		const list = [1, 2, 3];
		expect(newDay(list, true).slice(-1)[0]).toEqual(3.03);
	});

	it("adds correct value when false is given", () => {
		const list = [1, 2];
		expect(newDay(list, false).slice(-1)[0]).toEqual(1.98);
	});

	it("adds correct value when false is given and different rate", () => {
		const list = [1, 2];
		const rate = 0.1;
		expect(newDay(list, false, rate).slice(-1)[0]).toEqual(1.8);
	});

	it("adds correct value when true is given and different rate", () => {
		const list = [1, 2];
		const rate = 0.1;
		expect(newDay(list, true, rate).slice(-1)[0]).toEqual(2.2);
	});

	it("returns the correct list", () => {
		const list = [1, 45, 1.45];
		expect(newDay(list, true)).toEqual([1, 45, 1.45, 1.46]);
	});
});

describe("fetching from server", () => {
	it("return the data from the server with getDataFromUser", async () => {
		expect(await getDataFromUser("123")).toEqual([graph1, graph3]);
	});
});
