import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

// bdf32c8

const API_URL = 'https://www.omdbapi.com?apikey=bdf32c8'

const App = (title) => {

    const [movies, setMovies ] = useState([])
    const [searchTerm, setSearch] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies()
    }, [])
    
    return (
        <div className="app">
            <h1>Movie search</h1>
            <div className="search">
                <h2>Search for movies</h2>
                <div>
                    <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearch(e.target.value)} />
                    <img src= { SearchIcon } alt="search Icon" onClick={() => searchMovies(searchTerm)} />
                </div>
                {
                    movies?.length > 0 ?  
                   ( <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))
                        }
                    </div>) :
                    (
                        <div className="empty"><h2>No movies found</h2></div>
                    )
                }
               
            </div>
        </div>
    )
}

export default App