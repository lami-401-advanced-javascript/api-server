"use strict";


const express = require('express');

const categoryRouter = express.Router();

const category = [];

categoryRouter.get("/categories", (req, res) =>{
    res.status(200).send(category);
})

categoryRouter.post("/categories", (req, res) => {
    category.push(req.body);
    res.json(req.body);
})

categoryRouter.put('/categories/:id', (req, res) => {
for(let i = 0; i < category.length; i++){
    if(category[i].id === res.body.id){
        category[i] = req.body;
    }
}
res.json(req.body);

})

categoryRouter.delete('/categories/:id', (req, res) => {
    for(let i = 0; i < category.length; i++){
        if(category[i].id === res.body.id){
            category[i] = null;
        }
    }
    res.json(req.body);

})


module.exports = categoryRouter;