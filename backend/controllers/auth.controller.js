const User = require('../models/user.model.js');
const jwt = require("jsonwebtoken");

const signUp = async(req,res) => {
    let check = await User.findOne({email: req.body.email});
    if(check){
        return res.status(400).json({success: false, error: "User Already exists"});
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;   
    }
    const user = new User({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();
    
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true, token});
};

const login = async(req,res) => {
    let user = await User.findOne({email: req.body.email});
    if (user) {
        const PwMatch = req.body.password === user.password;
        if (PwMatch) {
            const data = {
                user: {
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true, token});
        }else{
            res.json({success:false, error:"Wrong Password!"});
        }  
    }else{
        res.json({success:false, error:"Email is Wrong!"})
    }
};

module.exports = {
    signUp,
    login,
};