import React from 'react'
import { useLocation } from 'react-router-dom'
import FilmVision from '../../components/Film/FilmVision'

export default function FilmPage() {
    const { state }= useLocation()
    
  return (
    <FilmVision film={state.film}></FilmVision>
  )
}
