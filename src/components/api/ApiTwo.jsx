import React, { useEffect, useState } from 'react'

//there is 3 errors on this page right off the bat
// there is one error that you wont see until you launch it and start trying to fix it

const ApiTwo = () => {
  const [stuff, setStuff] = useState([])
  const [title, setTitle] = useState('')
  const [actors, setActors] = useState('')
  const [awards, setAwards] = useState('')
  const [boxoffice, setBoxOffice] = useState('')
  const [director, setDirector] = useState('')
  const [genre, setGenre] = useState('')
  const [plot, setPlot] = useState('')
  const [posterurl, setPosterUrl] = useState('')
  const [rating, setRating] = useState('')
  const [released, setReleased] = useState('')
  const [imbdrating, setImbdRating] = useState('')
  const [morerating, setMoreRating] = useState([])
  //want to be displaying title, actors, awards, boxoffice, director, genre, plot, posterurl, rating, released, imdbrating, and morerating so 12 properties
  const apikey = 'd4a805b3'
  //there is a limit of 1000 calls per day i think so that shouldnt be the error
  const url = `http://www.omdbapi.com/?apikey=${apikey}&t=Avatar`

  const OMDBFetch = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTitle(data.Title)
        setActors(data.Actors)
        setAwards(data.Awards)
        setBoxOffice(data.BoxOffice)
        setDirector(data.Director)
        setGenre(data.Genre)
        setPlot(data.Plot)
        setPosterUrl(data.Poster)
        setRating(data.Rated)
        setReleased(data.Released)
        setImbdRating(data.imdbRating)
        setMoreRating(data.Ratings)
      })
  }

  useEffect(() => {
    OMDBFetch()
  }, [])

  return (
    <div>
      <h1>OMDB</h1>
      <br />
      <p>{title}</p>
      <p>{actors}</p>
      <p>{awards}</p>
      <p>{boxoffice}</p>
      <p>{director}</p>
      <p>{genre}</p>
      <p>{plot}</p>
      <img src={posterurl} />
      <p>{rating}</p>
      <p>{released}</p>
      <p>{imbdrating}</p>
      {morerating.map((item, index) => (
        <div key={index}>
          <p>{item.Source}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiTwo
