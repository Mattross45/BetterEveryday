class Database {
	constructor() {
		this._db = [];
	}

	async get() {
		return this._db;
	}

	async add(graph) {
		this._db.push(graph);
	}

	async getByUserId(id) {
		return this._db.filter((object) => object.userId === id);
	}

	async getGraphByIdAndName(id, name) {
		const idList = await this.getByUserId(id);
		return idList.filter((object) => object.graphName === name)[0];
	}

	async addDatapoint(point, id, name) {
		for (let graphs of this._db) {
			if (graphs.userId === id && graphs.graphName === name) {
				graphs.dataPoints.push(point);
				break;
			}
		}
	}
}
module.exports = {
	Database,
};
