"use strict"
const productRouter = require('../../routes/product');


class productModel {
    constructor(){
        this.schema =  require('./products.schema');
    }
    read(id) {
        if (id) {
          return this.schema.find({ _id: id });
        } else {
          return this.schema.find({});
        }
      }
    
      create(newProduct) {
        const newP = new this.schema(newProduct);
        return newP.save();
      }
    
      update(id, product) {
        return this.schema.findByIdAndUpdate(id, product, {new:true})
      }
    
      delete(id) {
        return this.schema.findByIdAndDelete(id);
      }
}

module.exports = productModel;