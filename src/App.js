import React, { useEffect,useState } from 'react'
import searchIcon from  './search.svg'
import './App.css'
import Movies from './Movies';


function App() { 
    // const movies1={
    //     'Poster': "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     'Title': "Batman Begins",
    //     'Type': "movie",
    //     'Year': "2005",
    //     'imdbID': "tt0372784"
    // };

    const[movies,setMovies]=useState([]);

    const [searchTerm,setSearchTerm]=useState('');

    const api_url="https://www.omdbapi.com?apikey=ea09b74"


    async function searchMovies(title){
        const response=await fetch(`${api_url}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
        setSearchTerm('');
    }
    useEffect(()=>{
        searchMovies();
    },[]);

    return(
      <div className='app'>
        <h1>Movies card</h1>

        
        <div className='search'>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search for movies...'/>
        <img src={searchIcon} alt="search" onClick={()=>{searchMovies(searchTerm)}}/>
        </div>


        {
            movies?.length>0 ?(
                <div className="container">               
                    {movies.map((movie)=>{return <Movies movie={movie}/>})}
                </div>
            ):(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }
        

        

      </div>
    );
}

export default App;
