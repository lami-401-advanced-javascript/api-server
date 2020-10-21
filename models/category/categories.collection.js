"use strict"


class categoryModel {
    constructor(){
        this.schema = require ('./categories.schema');

    }
    read(id) {
        if (id) {
          return this.schema.find({ _id: id });
        } else {
          return this.schema.find({});
        }
      }
    
      create(newCategory) {
        const newCat = new this.schema(newCategory);
        return newCat.save();
      }
    
      update(id, category) {
        return this.schema.findByIdAndUpdate(id, category, {new:true})
      }
    
      delete(id) {
        return this.schema.findByIdAndDelete(id);
      }
}

module.exports = categoryModel;