require ('dotenv').config()
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const Film = require('./models/Film')
const filmRoute = require('./routes/film')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('réussis'))
.catch((error) => console.log('not'))


app.use(express.json());

// middleware

app.use((req,res, next) => {
    res.setHeader('Acces-control-Allow-Origin' , '*')
    res.setHeader('Acess-control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS ')
    next()
})
// routes
app.use('/api/films',filmRoute)

module.exports = app