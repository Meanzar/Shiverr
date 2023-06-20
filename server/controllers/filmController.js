const Film = require('../models/Film')
const mongoose = require('mongoose')
// get all film

const getFilms = async (req,res) => {
    const films = await Film.find({}).sort({createdAt: -1})

    res.status(200).json(films)
}

// single film 
const getFilm = async(req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No film with that id'})
    }
    const film = await Film.findById(id)
    if (!film) {
        return res.status(404).json({error:'No film selected'})
    }
    res.status(200).json(film)

}
// create film 

const createFilm = async (req,res) => {
    delete req.body._id;
    const film = new Film(
        {...req.body}
    )
    film.save()
        .then(() => res.status(201).json(film))
        .catch(() => res.status(400).json({ error: 'Bad input ' }))
}


// delete

const deleteFilm = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: error.message})
    }
    const film = await Film.findOneAndDelete({_id: id})
    if (!film) {
        return res.status(404).json({error:'No film selected'})
    }
    res.status(200).json(film)
}

// update

const updateFilm = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: error.message})
    }
    const film = await Film.findOneAndUpdate({_id : id}, {...req.body})

    if (!film) {
        return res.status(404).json({error:'No film selected'})
    }
    res.status(200).json(film)

}


module.exports =  {
    getFilms,
    getFilm,
    createFilm,
    deleteFilm,
    updateFilm
}