import Image from 'next/image';
import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesPage = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9736dfe82msh53d1affbac222fap10d440jsnf565172baefc',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const result = data.titles;

    return (
        <section class="text-gray-600 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-5xl font-medium title-font mb-4 text-white">All Movies & Shows</h1>
                </div>
                <div class="flex flex-wrap -m-4">

                    {
                        result.map((info) => {
                            return <MoviesCard key={info.id} {...info} />
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default MoviesPage;