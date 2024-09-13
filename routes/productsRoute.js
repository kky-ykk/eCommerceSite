const express = require('express');
const router = express.Router();
const Products = require('./../models/products');


// POST route to add a person
router.post('/', async (req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the person data
        console.log(data);

        const  product = new Products(data);
        const response = await product.save();

        console.log(response);

        res.status(200).json({response: response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


module.exports = router;