const {server} = require("../lib/server");
const supertest = require('supertest');
const fauxTests = supertest(server);


describe("this is my server", () => {
    
    it("Adds an item when called to do so", () => {
        const categoryOption = {name : "option", id: 1}
        return fauxTests
        .post("/categories")
        .send(categoryOption)
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.body.name).toEqual("option")
        })
    })
    it("can GET requests", () => {
        return fauxTests
        .get("/categories")
        .then(results => {
            expect(results.status).toBe(200)
        })

        .catch(console.error)
    })
    it("updates upon request", () => {
        return fauxTests
        .put("/categories/:1")
        .send({name: "shabooyah", id:1})
        .then(results => {
            console.log(results.status)
            expect(results.status).toBe(200)
            expect(results.body.body.name).toEqual("shabooyah")
        })
    })
    it("deletes the option requested", () => {
        return fauxTests
        .delete("/categories/1")
        .then(results => {
            expect(results.body).toEqual(null)
            expect(results.status).toBe(200)
        })
    })


    // /PRODUCTS///

    it("Adds an item when called to do so", () => {
        const categoryOption = {name : "option", id: 1}
        return fauxTests
        .post("/products")
        .send(categoryOption)
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.body.name).toEqual("option")
        })
    })
    it("can GET requests", () => {
        return fauxTests
        .get("/products")
        .then(results => {
            expect(results.status).toBe(200)
        })

        .catch(console.error)
    })
    it("updates upon request", () => {
        return fauxTests
        .put("/products/1")
        .send({name: "shabooyah", id:1})
        .then(results => {
            console.log(results.body)
            expect(results.status).toBe(200)
            expect(results.body.name).toEqual("shabooyah")
        })
    })
    it("deletes the option requested", () => {
        return fauxTests
        .delete("/products/1")
        .then(results => {
            expect(results.body).toEqual(null)
            expect(results.status).toBe(200)
        })
    })

})


