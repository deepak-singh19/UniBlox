const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const checkout= require('./routes/cart/checkout');
const addToCart= require('./routes/cart/addToCart');
const {generateDiscount, orderStats}= require('./routes/admin/generateDiscount');


// Middleware to parse JSON requests
app.use(bodyParser.json());


// Admin API


app.get('/api/admin/order-stats', orderStats);
app.post('/api/admin/generate-discount', generateDiscount); // This for Admit to create new Coupon code


// Cart API

app.post('/api/cart/add-to-cart', addToCart);
app.get('/api/cart/checkout', checkout);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});