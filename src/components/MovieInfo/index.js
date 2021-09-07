import React from 'react';
//components
import Thumb from '../Thumb';
//config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//noImg
import SmileFace from '../../images/no_image.jpg'
//style
import { Wrapper, Content, Text} from './MovieInfo.style';

const MovieInfo =({movie}) =>(
<Wrapper backdrop= {movie.backdrop_path} >
    <Content>
    {console.log(movie)}
        <Thumb
            image={
                movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : SmileFace
                } 
                Clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                        <div className='director'>
                            <h3> DIRECTOR{movie.direstors.length > 1 ? 'S' : ''} </h3>
                            {movie.direstors.map(direstor => (
                            <p key={direstor.credit_id}> {direstor.name} </p>
                            ))}
                        </div>
                        <div>
                            <h3>RELEASE DATE</h3>
                            <div>{movie.release_date}</div>
                        </div>
                        <div>
                            <h3>STATUS</h3>
                            <div >{movie.status}</div>
                        </div>
                        <div>
                            <h3>ORIGINAL LANGUAGE</h3>
                            <div >{movie.original_language}</div>
                        </div>

                    </div>
                </Text>
        
    </Content>
</Wrapper>
);

export default MovieInfo;