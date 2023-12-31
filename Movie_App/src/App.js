import React, { useEffect, useState} from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=407f7a20';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log( data.Search);
        setMovies(data.Search);
    }

    const searchEnterKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm)
        }
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                type="text"
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                onKeyDown={searchEnterKey}
                />
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={()=> searchMovies(searchTerm)}
                />
            </div>
            { 
                movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                
                </div>
                ) : (
                    <div className ="empty">
                        <h2>No Movies found</h2>
                    </div>
                )

            }
            
        </div>
        
    );
}

export default App;