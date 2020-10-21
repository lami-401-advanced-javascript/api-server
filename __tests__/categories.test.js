"use strict";

const Categories = require('../models/category/categories.collection');
require('@code-fellows/supergoose')

const categories = new Categories()

describe("categories", () => {
    it("can create a new category", () => {
        const newCat = {
            category: "food",
            name: "burger",
            display_name: "fat burger",
            description: "fatty burger"
        }
        return categories.create(newCat)
        .then(results => {
            Object.keys(newCat).forEach(item => {
                expect(results[item]).toEqual(newCat[item])
            })
        })
    
    })
    it("can GET", () => {
        const newCat = {
            _id: "5f90bdcb10ab3455b7e05a11",
            category: "food",
            name: "burger",
            display_name: "fat burger",
            description: "fatty burger"
        }

        return categories.read()
        .then(results => {
            expect(results).toEqual(newCat)
        })
    })
})