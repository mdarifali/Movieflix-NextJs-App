import React from 'react';

const SinglePage = async ({ params }) => {

    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9736dfe82msh53d1affbac222fap10d440jsnf565172baefc',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }

    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (
        <section class="text-gray-600 body-font">
            <div className="container mx-auto px-5 mt-10">
                <h1 className='text-2xl text-gray-600 font-semibold text-center lg:text-start'>Netflix|
                    <span className='capitalize text-red-600'>{main_data.type}</span>
                </h1>
            </div>
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={main_data.backgroundImage.url} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{main_data.title}</h1>
                    <p class="mb-8 leading-relaxed">{main_data.synopsis}</p>
                </div>
            </div>
        </section>
    );
};

export default SinglePage;