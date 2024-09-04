const express = require('express');
const{signUp, login} = require("../controllers/auth.controller.js") 

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);

module.exports = router;