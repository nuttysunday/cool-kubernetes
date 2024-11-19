// serviceB/server.js
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3002; // Different internal port

morgan.token("custom", (req, res) => {
    return `${req.method} ${req.url}`;
});

app.use(morgan(":custom - :response-time ms"));

const delay = (ms) => new Promise((resolve) => 
setTimeout(resolve, ms));

const serviceB = async () => {
    console.log("Service B triggered");
    await delay(1000);
    return "Service B response";
};

app.get("/", async (req, res) => {
    const response = await serviceB();
    res.send(response);
});

app.listen(port, () => {
    console.log(`Service B is running on http://localhost:${port}`);
});
