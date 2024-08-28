const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");

const port = 4000;

app.use(express.json());
app.use(cors());

dotenv.config();

//Database connection

const mongoUrl = "mongodb://localhost:27017/WearMe";
mongoose.connect(mongoUrl).then(() =>{
    console.log("Database Connected Successfully!");
}).catch((error) =>{
    console.log(error);
});

//API creation

app.get("/", (req,res) =>{
    res.json("successfully Connected")
});

//image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});
//create upload endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload", upload.single('product'), (req,res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
});

//creating products;
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    new_price:{
        type:Number,
        required: true,
    },
    old_price:{
        type:String,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now,
    },
    available:{
        type:Boolean,
        default: true,
    },
})

app.post('/addproduct', async(req,res) =>{
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
        id: req.body.id,
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
});

// creating API for removeProduct
app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// creating API for removeProduct
app.get('/allproducts', async(req,res) => {
    let products = await Product.find({});
    console.log("all Product fetched");
    res.send(products);
})

app.listen(port, (error) =>{
    if (!error) {
        console.log("Server is running on port"+port);
    }else{
        console.log("error"+error);
    }
});
