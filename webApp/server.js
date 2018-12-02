"use strict"

const express = require("express");

const port = 8080;
const host = "0.0.0.0"

const app = express();
app.get("/", (req, res) => {
	res.send("Hello World\n");
});

app.listen(PORT, HOST);
console.log("Running on http://${HOST}:${PORT}"); 
