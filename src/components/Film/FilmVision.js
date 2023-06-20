import React from 'react'

export default function FilmVision({film}) {
     const {title ,imageUrl, videoUrl, _id} = film
     console.log(videoUrl)
  return (
    <>
    <h1>{title}</h1>
    <video key={_id} controls poster={imageUrl} width={'70%'} height={'40%'} >
        <source src={videoUrl} type='video/mp4'></source>
    </video>
    </>
  )
}
