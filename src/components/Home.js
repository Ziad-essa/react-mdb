import React, { useState, useEffect } from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//component
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
//Hook
import { useMovieFetch } from '../Hooks/useHomeFetch';
//Image
import SmileFace from '../images/no_image.jpg'
const Home = () =>{
    const {
        home, 
        loading, 
        error, 
        setSearchTerm, 
        searchTrem, 
        setIsLoadingMore
    } = useMovieFetch();

    if(error) return <div>error </div>;

    console.log(home)
        return(
            <>
            {!searchTrem && home.results[0] ?  
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${home.results[0].backdrop_path}`}
                title={home.results[0].original_title}
                text={home.results[0].overview}
                 />
            : null
            }
            <SearchBar setSearchTerm ={setSearchTerm} />
            <Grid header={searchTrem ? 'Search Results' : 'Popular Movies'}>
                {home.results.map(movie =>(
                    <Thumb 
                    key={movie.id}
                    clickable={true}
                    image={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : SmileFace
                    }
                    movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {home.page < home.total_pages && !loading &&(
                <Button text="Load More" callback={ () => setIsLoadingMore(true) } />
            )}
            </>
        ) 
}

export default Home;