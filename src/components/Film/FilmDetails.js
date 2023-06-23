import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
export default function FilmDetails({film, category}) {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    
    
  return (
    <Fragment>
        {film.category === category && <div className='film-carrousel'> <div><img src={film.imageUrl} 
            alt='affiche du film' 
            width={'150px'} 
            height={'220px'}
            onClick={() => setOpen(o => !o)}
            /></div>
        </div>}
        <Popup open={open} closeOnDocumentClick onClose={closeModal} position='center center' className='popup-container'>
            <div className='film-zoom'>
                <p className='film-title'>{film.title}</p>
                <img src={film.imageUrl} alt='affiche du film' width={'310px'} height={'240px'}/>
                <div className='film-text'>
                    <div className='zoom-details'>
                        <p className='film-category'>Genre:<br/> {film.category}</p>
                        <p className='film-year'>Release date:<br/> {film.year}</p>
                        <p>Durée : <br/>2h01</p>
                    </div>
                    <p className='film-synopsis'>{film.synopsis}</p>
                    <div className='film-actor'>
                        <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png' className='film-actor' alt='visage du personnage' width={30} height={30}></img>
                        <p className='film-actor-texte'>{film.actor}</p>
                    </div>
                    <p className='film-realisator'>{film.realisator}</p>
                    <Link className='film-link' to={`/${film._id}`} state={{
                        film 
                    }}>Voir le film</Link>
                    </div>
                </div>
        </Popup>
    </Fragment>
  )
}
