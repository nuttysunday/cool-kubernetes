const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();


// k8 internal dns
app.use('/service_a', createProxyMiddleware({ target: 'http://service-a:3001', 
changeOrigin: true }));
app.use('/service_b', createProxyMiddleware({ target: 'http://service-b:3002', 
changeOrigin: true }));

app.get("/", async (req, res) => {
    res.send("Hi, this is your proxy server");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});