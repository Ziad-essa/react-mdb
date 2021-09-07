import React from 'react';
import { useParams } from 'react-router';
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
//components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
//hooks
import { useMovieFetch } from '../Hooks/useMovieFetch';
//Img
import SmileFace from '../images/no_image.jpg'

const Movie = () => {
    const {movieId} = useParams();
    const {state, loading, error} =useMovieFetch(movieId)

    if (loading) return <Spinner/>;
    if (error) return <div> you did something worng..... </div>;

    
    return(
        <>
        <BreadCrumb movieTitle={state.original_title} />
        <MovieInfo movie={state} />
        <MovieInfoBar 
            time={state.runtime} 
            budget={state.budget} 
            revenue={state.revenue}
        />
        <Grid header = 'Actors'>
            
                {state.actors.map(actor => (
                    <Actor 
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={
                        actor.profile_path
                        ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${actor.profile_path}`
                        : SmileFace

                    }
                    />

                ))}
            
        </Grid>
        </>
    )
}

export default Movie;
