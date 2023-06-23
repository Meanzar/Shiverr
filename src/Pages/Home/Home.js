import React, {useEffect, useState, Fragment} from 'react'
import {Navigation, Pagination, Scrollbar } from 'swiper'

import { Swiper, SwiperSlide} from 'swiper/react'
import FilmDetails from '../../components/Film/FilmDetails'
import FilmCategorie from '../../components/Film/categoriefilm'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function HomePage() {
    const [films, setFilms] = useState(null)
    useEffect(() => {
        const fetchFilms = async () => {
        const response = await fetch('/api/films')
        const json = await response.json()

        if (response.ok) {
            setFilms(json)
        }
        }

        fetchFilms()
    }, [setFilms])
  return (
    <Fragment>
        {films && films.filter((film) => film.category === 'psychopathe').length > 0 && (
        <div>
            <FilmCategorie title='Psychopathe' categorie="psychopathe" />
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={5}  
            navigation={{clickable:true}}
            pagination={{clickable: true}}
            scrollbar={{draggable:true}}
        > 
            {films.filter((film) => film.category === 'psychopathe').map((filteredFilm, index) => (
                <SwiperSlide key={index}>
                    <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                </SwiperSlide>
            ))}
            </Swiper>
         </div>

        )}
        {films && films.filter((film) => film.category === 'thriller').length > 0 && (
        <div>
            <FilmCategorie title='Thriller' categorie="thriller" />
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={5}  
            navigation={{clickable:true}}
            pagination={{clickable: true}}
            scrollbar={{draggable:true}}
        > 
            {films.filter((film) => film.category === 'thriller').map((filteredFilm, index) => (
                <SwiperSlide key={index}>
                    <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                </SwiperSlide>
            ))}
            </Swiper>
         </div>

        )}
        {films && films.filter((film) => film.category === 'paranormal').length > 0 && (
        <div>
            <FilmCategorie title='Paranormal' categorie="paranormal" />
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={5}  
            navigation={{clickable:true}}
            pagination={{clickable: true}}
            scrollbar={{draggable:true}}
        > 
            {films.filter((film) => film.category === 'paranormal').map((filteredFilm, index) => (
                <SwiperSlide key={index}>
                    <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                </SwiperSlide>
            ))}
            </Swiper>
         </div>

        )}
        {films && films.filter((film) => film.category === 'slasher').length > 0 && (
        <div>
            <FilmCategorie title='Slasher' categorie="slasher" />
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={5}  
            navigation={{clickable:true}}
            pagination={{clickable: true}}
            scrollbar={{draggable:true}}
        > 
            {films.filter((film) => film.category === 'slasher').map((filteredFilm, index) => (
                <SwiperSlide key={index}>
                    <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                </SwiperSlide>
            ))}
            </Swiper>
         </div>
)}
    </Fragment>
  )
}
