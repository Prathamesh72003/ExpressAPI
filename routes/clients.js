const express = require('express')
const router = express.Router();
const Client = require('../models/client');

//getting all the clients

router.get('/', async(req, res) => {
    try {
        const clients = await Client.find(); 
        res.send(clients);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//getting one client

router.get('/:id', getClientById ,(req,res)=>{
    res.send(res.client.name);
})

//creating a client

router.post('/', async(req,res)=>{
    const client = new Client({
        name: req.body.name,
        department: req.body.department
    })
    
    try {
        const addClient = await client.save();
        res.status(201).json(addClient);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

//updating a client

router.patch('/:id', getClientById ,async(req,res)=>{
    if(req.body.name != null){
        res.client.name = req.body.name;
    }
    
    if(req.body.department != null){
        res.client.department = req.body.department;
    }

    try {
        const updatedClient = await res.client.save();
        res.status(200).json({message: 'Client Updated'}) 
    } catch (error) {
        res.status(500).json({message: error.message})         
    }

})

//deleting a client

router.delete('/:id', getClientById, async(req,res)=>{
    try {
        await res.client.deleteOne();
        res.json({message: 'Deleted Client'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

async function getClientById (req,res,next){
    let client;
    try {
        client = await Client.findById(req.params.id);
        if (client == null) {
            return res.status(404).json({message: 'Client not found!'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.client = client;
    next();
}

module.exports = router;