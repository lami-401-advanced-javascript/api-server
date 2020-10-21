"use strict";

const express = require('express');
const router = express.Router();

const app = express();
const timestamp = require("../middlewaare/timestamp");
const logger = require("../middlewaare/logger");
const notFound = require("../middlewaare/404");
const serverError = require("../middlewaare/500");
const categories = require("../routes/categories");
const products = require("../routes/product");


router.use(express.json());
router.use(logger);
router.use(timestamp);
router.use(categories);
router.use(products);
router.use("*", notFound);
router.use(serverError);


module.exports = {
    server: app,
    start: function(port){
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log("listening on port"));
    }
}