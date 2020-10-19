# LAB: HTTP and REST

## Project: API SERVER

### Author: Lami Beach

---

### Technical Requirements / Notes
Build a working API Server using json-server
Install json-server globally on your computer
Work in your api-server repository
Create a folder called data with a db.json file, with containers for your data models
{ "categories" : [], "products": [] }
Start json-server from within your working folder and “watch” your database file
json-server --watch ./data/db.json
Your api will automatically respond to the following endpoints:
/categories GET, POST
/categories/:id/ PUT, DELETE
/products GET, POST
/products/:id/ PUT, DELETE
Use httpie (command line), Insomnia, Postman, or any other “ReST” testing application to POST some categories and products, using JSON, into your API so that you have some data in there.
Note that json-server does not validate your data, it’ll just save whatever you send it. Be sure that you obey these rules for your data as you create/update it:
Data models should contain the following fields:
categories
id, name, display_name, description
products
id, category, name, display_name, description
Using your ReST testing tool, also confirm that you can UPDATE, DELETE, and GET records for both categories and products from your API using the routes above
GET ALL: GET - http://localhost:3000/categories
GET SOME: GET - http://localhost:3000/categories?category=electronics
GET ONE: GET - http://localhost:3000/categories/1
UPDATE ONE: PATCH or PUT - http://localhost:3000/categories/1
DELETE ONE: DELETE - http://localhost:3000/categories/1
Confirm that your API’s output matches exactly the specifications given in the requirements document

--- 


#### How to initialize/run your application (where applicable)




#### Tests

- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

#### UML

Link to an image of the UML for your application and response to events



## Author: Lami Beach