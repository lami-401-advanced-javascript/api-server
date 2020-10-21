"use strict";

function notFound(req, res){
    res.status(404).json({error: "Error"})
}

module.exports = notFound;