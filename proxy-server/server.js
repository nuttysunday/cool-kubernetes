const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use('/service_a', createProxyMiddleware({ target: 'http://service_a:3001', changeOrigin: true }));
app.use('/service_b', createProxyMiddleware({ target: 'http://service_b:3002', changeOrigin: true }));

app.get("/", async (req, res) => {
    res.send("Hi, this is your proxy server");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});