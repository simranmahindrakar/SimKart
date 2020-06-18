//creating a node application 
//create a very simple server which will serve products to the client(browser)
import express from 'express'   //use express module to create a server
import data from './data';

const app = express();
app.get("/api/products", (req,res) => {

    res.send(data.products);  
});
app.listen(5000, () => { console.log("Server started at http://localhost:5000")});