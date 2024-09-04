const User = require('../models/user.model.js')

const addToCart = async(req,res) => {
    console.log("added",req.body.itemId)
    let userData = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate(
        {_id:req.user.id}, 
        {cartData:userData.cartData});
}

const removeFromCart = async(req,res) => {
    console.log("removed",req.body.itemId)
    let userData = await User.findOne({_id:req.user.id})
    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
        await User.findOneAndUpdate(
            {_id:req.user.id},
            {cartData:userData.cartData});
    }
};

const getCart = async(req,res) => {
    console.log('getCart');
    let userData = await User.findOne({_id: req.user.id})
    res.json(userData.cartData);
}

module.exports = {
    addToCart,
    removeFromCart,
    getCart,
};