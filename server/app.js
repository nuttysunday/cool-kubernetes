const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

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

const serviceB = async () => {
    console.log("Service B triggered");
    await delay(1000);
    return "Service B response";
};

app.get("/serviceA", async (req, res) => {
    const response = await serviceA();
    res.send(response);
});

app.get("/serviceB", async (req, res) => {
    const response = await serviceB();
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



