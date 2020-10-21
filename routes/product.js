"use strict";


const express = require('express');

const productRouter = express.Router();

const products = [];



productRouter.get("/products", (req, res) =>{
    res.status(200).send(products);
})

productRouter.post("/products", (req, res) => {
    products.push(req.body);
    res.json(req.body);
})

productRouter.put('/products/:id', (req, res) => {
for(let i = 0; i < products.length; i++){
    if(products[i].id === res.body.id){
        products[i] = req.body;
    }
}
})

productRouter.delete('/products/:id', (req, res) => {
    for(let i = 0; i < products.length; i++){
        if(products[i].id === res.body.id){
            products[i] = null;
        }
    }
})


module.exports = productRouter;