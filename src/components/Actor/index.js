import React from 'react';
//style
import { Wrapper, Image } from './Actor.style';

const Actor = ({name, character, imageUrl}) =>(
    <Wrapper>
        <Image src={imageUrl} alt='Actor img' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);
export default Actor;