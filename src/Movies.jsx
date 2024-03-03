import React from 'react'

function Movies({movie}) {
    return(
        <div className="movie">
            <div>
                {movie.Year}
            </div>

            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>    
    );
}

export default Movies;
