require('newrelic');
require('dotenv').config();

const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3100;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/items/:id', createProxyMiddleware({
  target: 'http://54.237.29.86:3001/',
  changeOrigin: true,
}));

app.use('/items/:id', createProxyMiddleware({
  target: 'http://52.9.30.123:3002/',
  changeOrigin: true,
}));

app.use('/api/related_products/:id', createProxyMiddleware({
  target: 'http://54.210.181.99:3003/',
  changeOrigin: true,
}));

app.use('/api/allreviews/:id', createProxyMiddleware({
  target: 'http://54.160.94.240:3004/',
  changeOrigin: true,
}));

app.listen(port);
