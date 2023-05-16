import React from 'react';

const PLACEHOLDER_URL = 'https://via.placeholder.com/300x400?text=No+Poster'

const MovieCard = ({ movie }) => {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : PLACEHOLDER_URL} 
                    alt={movie.Title} 
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
