import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MoviesCard = (info) => {
    const { id, title, type, synopsis } = info.jawSummary
    const { url } = info.jawSummary.backgroundImage
    return (


        <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src={url} alt="movie image" />
                <div class="p-6 text-white">
                    <h1 class="tracking-widest text-base title-font font-medium mb-1">{title}</h1>
                    <p class="title-font text-xs font-mediummb-3 mb-5">{type}</p>
                    <p class="leading-relaxed mb-3">{synopsis}</p>
                    <div class="flex items-center flex-wrap ">
                        <Link href={`/movies/${id}`}
                            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-red-500">See More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;