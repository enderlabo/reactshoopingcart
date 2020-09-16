
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortId = require('shortid');



mongoose.connect( "mongodb://localhost:27017/react-shopping-cart-db ", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then( () => {

    const app = express();
    app.use(bodyParser.json());
    
    app.get("/", ( req, res ) => {
        res.send("updated");
    })
    
    const port = process.env.PORT || 5000;

    app.listen( port, () => console.log(" server at https://localhost:5000 ") );
})

//Find your model
const Product = mongoose.model("products", new mongoose.Schema({
    _id: { type: String, default: shortId.generate },
    image: String,
    title: String,
    description: String,
    availableSizes:[ String ],
    price: Number

}))


app.get("/api/products", async (res, req) => {
    //Get all products from DB.
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {

    const newProduct = new Product( req.body );
    const savedProduct = await newProduct.save();

    res.send(savedProduct);
});


app.delete("/api/products/:id", async (req, res) => {

    const deletedProduct = await Product.findByIdAndDelete( req.params.id );
    res.send(deletedProduct);
})


const port = process.env.PORT || 5000;

app.listen( port, () => console.log(" server at https://localhost:5000 ") );