import React, { useEffect, useState, useRef } from 'react';
//search_icon
import seachIcon from '../../images/search-icon.svg'
//styles
import { Content, Wrapper } from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState]= useState("");
    const inital = useRef(true);
    useEffect(() => {
        if(inital.current){
            inital.current = false;
            return;
        }
const timer =setTimeout(() => {
    setSearchTerm(state);
} ,500)

return () => clearTimeout(timer) 
    }, [setSearchTerm, state]

    )

    return(
        <Wrapper>
            <Content>
                <img src={seachIcon} alt="Search" />
                <input 
                type='text' 
                placeholder='search movie'
                onChange={e => setState(e.currentTarget.value)}
                value={state}
                 />
            </Content>
        </Wrapper>
        )

};

export default SearchBar;