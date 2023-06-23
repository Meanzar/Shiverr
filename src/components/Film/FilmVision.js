import React from 'react'

export default function FilmVision({film}) {
     const {title ,imageUrl, videoUrl, _id} = film
     console.log(videoUrl)
  return (
    <>
    <h1 style={{textAlign:'center'}}>{title}</h1>
    <video key={_id} controls poster={imageUrl} width={'35%'}>
        <source src={videoUrl} type='video/mp4'></source>
    </video>
    </>
  )
}
