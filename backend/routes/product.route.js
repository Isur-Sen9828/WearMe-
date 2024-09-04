const express = require('express');
const { addProduct, removeProduct, allProduct, } = require('../controllers/product.controller.js')

const router = express.Router();

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', allProduct);

module.exports = router;