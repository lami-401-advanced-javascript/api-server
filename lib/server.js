"use strict";

const express = require('express');
const app = express();
const timestamp = require("../middlewaare/timestamp");
const logger = require("../middlewaare/logger");
const notFound = require("../middlewaare/404");
const serverError = require("../middlewaare/500");



app.use(express.json());
app.use(logger);
app.use(timestamp);

const category = [];
const products = [];

app.get("/categories", (req, res) =>{
    res.status(200).send(category);
})

app.post("/categories", (req, res) => {
    category.push(req.body);
    res.json(req.body);
})

app.put('/categories/:id', (req, res) => {
for(let i = 0; i < category.length; i++){
    if(category[i].id === res.body.id){
        category[i] = req.body;
    }
}
res.json(req.body);

})

app.delete('/categories/:id', (req, res) => {
    for(let i = 0; i < category.length; i++){
        if(category[i].id === res.body.id){
            category[i] = null;
        }
    }
    res.json(req.body);

})


app.get("/products", (req, res) =>{
    res.status(200).send(products);
})

app.post("/products", (req, res) => {
    products.push(req.body);
    res.json(req.body);
})

app.put('/products/:id', (req, res) => {
for(let i = 0; i < products.length; i++){
    if(products[i].id === res.body.id){
        products[i] = req.body;
    }
}
})

app.delete('/products/:id', (req, res) => {
    for(let i = 0; i < products.length; i++){
        if(products[i].id === res.body.id){
            products[i] = null;
        }
    }
})





app.use("*", notFound);
app.use(serverError);


module.exports = {
    server: app,
    start: function(port){
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log("listening on port"));
    }
}