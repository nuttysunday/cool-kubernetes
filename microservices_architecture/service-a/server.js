// serviceA/server.js
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001; // Different internal port

morgan.token("custom", (req, res) => {
    return `${req.method} ${req.url}`;
});

app.use(morgan(":custom - :response-time ms"));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const serviceA = async () => {
    console.log("Service A triggered");
    await delay(1500);
    return "Service A response";
};

app.get("/", async (req, res) => {
    const response = await serviceA();
    res.send(response);
});

app.listen(port, () => {
    console.log(`Service A is running on http://localhost:${port}`);
});