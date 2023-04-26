const fs = require("fs");
const express = require("express");
const app = express();


const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));


app.use(express.json());
app.get("/api/v1/products/:id", (req, res)=>{
    const product = products.find((el)=> el.id ===Number(req.params.id));
    if(!product){
        return res.status(404).json({
            status: "fail",
            message: "Product not found!",
        });
    }
    res.status(200).json({
       status: "success",
       message: "Product fetched successfully",
       data: {
        product,
       }, 
    });
});



module.exports = app;
