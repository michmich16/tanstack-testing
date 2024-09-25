import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { allFilms } from '../queries/allFilms';
import { request } from 'graphql-request';
import { Link } from 'react-router-dom';


export const Home = () => {

    const { data, isLoading, error } = useQuery({ 
    queryKey: ['allFilms'], 
    queryFn: async () => 
    request(
    'https://swapi-graphql.netlify.app/.netlify/functions/index', 
    allFilms
    ),
 });
 if (isLoading) {
    <p>Loading...</p>
 }

    console.log(data);
    return (
        <div>
            {data?.allFilms.films.map((item) =>{
                return <Link to={`search/${item.id}`} key={item.title}>{item.title}</Link>
            })}
        </div>
    )
}
