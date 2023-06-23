const express = require('express')
const {
    getFilms,
    getFilm,
    createFilm,
    deleteFilm,
    updateFilm
} = require('../controllers/filmController')
const router =  express.Router()


router.get('/', getFilms)

router.get('/:id', getFilm)

router.post('/', createFilm)

router.patch('/:id', updateFilm)
router.delete('/:id', deleteFilm)


module.exports = router