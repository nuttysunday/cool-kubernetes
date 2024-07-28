const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use('/serviceA', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/serviceB', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});