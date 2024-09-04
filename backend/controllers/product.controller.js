const Product = require('../models/product.model.js');

const addProduct = async(req,res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id +1;
    }else{
        id = 1;
    }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        date:req.body.date,
        available:req.body.available,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name:req.body.name,
    });
};

const removeProduct = async(req,res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
};

const allProduct = async(req,res) => {
    let products = await Product.find({});
    console.log("all Product fetched");
    res.send(products);
}

module.exports = {
    addProduct,
    removeProduct,
    allProduct,
};