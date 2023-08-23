import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
                        <br />readymade gluten
                    </h1>
                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg duration-500	ease-in">WATCH NOW</button>
                        <button class="ml-4 inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg duration-500 ease-in">SUBSCRIBE</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image width={700} height={700} class="object-cover object-center rounded" alt="hero" src="/hero.jpg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;