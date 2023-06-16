const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/clients', {useNewURLParser: true});
const db = mongoose.connection;

db.on('error', (error)=>{console.error(error)});
db.once('open', ()=>{console.log("Connected to the database")});

app.use(express.json());

const clientRouter = require('./routes/clients');

app.use('/clients', clientRouter);


app.listen(3000, () => {
    console.log("Server started!");
});
