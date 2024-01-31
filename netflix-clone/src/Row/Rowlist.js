import React from 'react'
import Row from './Row'
import requests from '../utils/request'
const Rowlist = () => {
    return (
      <>
        <Row 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeLayer={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        < Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        
        
      </>
    )
  }
  
  export default Rowlist