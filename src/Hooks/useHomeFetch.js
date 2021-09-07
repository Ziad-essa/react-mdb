import { useState, useEffect } from "react";
//API
import API from '../API';

const initialState={
    page : 0 ,
    results : [] ,
    total_pages : 0 ,
    total_results : 0 ,
}

export const useMovieFetch =()=>{
    const [searchTrem, setSearchTerm] =useState('');
    const [home, setHome] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    
    console.log(searchTrem)

    const fetchMovies = async (page, searchTrem = "" ) =>{
        try{
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies( searchTrem, page);
           // console.log(movies);
            setHome(prev => ({
                ...movies,
                results:
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }) )
            setLoading(false)
        } catch(error) {
            setError(true);
        }
        
    };
// search
useEffect(()=>{
    setHome(initialState);
    fetchMovies(1 ,searchTrem);
}, [searchTrem]);

//load more
useEffect(() => {
if (!isLoadingMore) return;

fetchMovies(home.page + 1, searchTrem);
setIsLoadingMore(false);
},[isLoadingMore, searchTrem, home.page ]);



return{ home, loading, error, setSearchTerm, searchTrem, setIsLoadingMore }
}