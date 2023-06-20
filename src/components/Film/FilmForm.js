import React from 'react'
import { useState } from 'react'
export default function FilmForm() {
    const [title, setTitle] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [category, setCategory] = useState('')
    const [realisator, setRealisator] = useState('')
    const [actor, setActor] = useState('')
    // const [imageActor, setImageActor] = useState('https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png')
    // const [imageRealisator, setImageRealisator] = useState('https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png')

    const [year, setYear] = useState(2000)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const film = {title, synopsis, imageUrl, videoUrl, category, realisator, actor, year}

        const response = await fetch('/api/films', {
            method:'POST',
            body: JSON.stringify(film),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)                
        }
        if(response.ok) {
            setTitle('')
            setSynopsis('')
            setImageUrl('')
            setVideoUrl('')
            setCategory('')
            setRealisator('')
            setActor('')
            setYear(2000)
            setError(null)
            console.log('new film added')
        }
    }
    return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a film</h3>

        <label>Title</label>
        <input 
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value= {title} 

        />
        <label>Synopsis</label>
        <input 
        type='text'
        onChange={(e) => setSynopsis(e.target.value)}
        value= {synopsis} 

        />
        <label>Affiche</label>
        <input 
        type='url'
        onChange={(e) => setImageUrl(e.target.value)}
        value= {imageUrl} 

        />
        <label>Film</label>
        <input 
        type='url'
        onChange={(e) => setVideoUrl(e.target.value)}
        value= {videoUrl} 

        />
        <label>Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
            <option value="psychopathe"> Psychopathe </option>
            <option value="thriller"> Thriller  </option>
            <option value="slasher"> Slasher  </option>
            <option value="paranormal"> Paranormal </option>
        </select>

        <label>Realisator</label>
        <input 
        type='text'
        onChange={(e) => setRealisator(e.target.value)}
        value= {realisator} 

        />
        <label>Actor</label>
        <input 
        type='text'
        onChange={(e) => setActor(e.target.value)}
        value= {actor} 
        />
        <label>Year</label>
        <input 
        type='number'
        onChange={(e) => setYear(e.target.value)}
        value= {year} 

        />
        <button type='submit' className='create__button'>Add a film</button>
        {error && <div>{error}</div>}
    </form>
    
  )
}
