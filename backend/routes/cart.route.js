const express = require('express');
const{ addToCart, removeFromCart, getCart,} = require('../controllers/cart.controllers.js')
// const {fetchUser} = require('../index.js')

const router = express.Router();

router.post('/addtocart', addToCart);
router.post('/removefromcart', removeFromCart);
router.post('/getcart', getCart);

module.exports = router;
