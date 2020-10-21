"use strict"

function timestamp(request, res, next){
    request.requestTime = new Date();
    
    var month = request.requestTime.getMonth() + 1;
    var day = request.requestTime.getDate();
    
    
    var output = request.requestTime.getFullYear() + "/" + (month < 10 ? " 0" :"" ) + ((day < 10 ? "0" : ""));
    next();
}

module.exports = timestamp;