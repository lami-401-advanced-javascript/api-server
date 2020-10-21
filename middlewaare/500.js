"use strict";

function serverError(req, res, err){
    res.status(404).json({error: err})
}

module.exports = serverError;