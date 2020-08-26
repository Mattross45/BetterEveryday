const express = require("express");
const db = require("./testDatabase/testDB");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4001;

app.use(bodyParser());

app.get("/:id", async (req, res) => {
	res.send(await db.getByUserId(req.params.id));
});

app.put("/:id/:name", async (req, res) => {
	await db.addDatapoint(req.body.number, req.params.id, req.params.name);
	res.send(await db.getGraphByIdAndName(req.params.id, req.params.name));
});

app.listen(PORT);

module.exports = app;
