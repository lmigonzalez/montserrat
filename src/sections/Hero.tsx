import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="relative m-auto flex min-h-[600px] w-full  items-center bg-gradient-to-r from-[#FDFDFD] to-[#EEE7E1]">
      <Image
        src="/books.jpg"
        alt=""
        width={1920}
        height={600}
        className="m-auto hidden md:block"
      />
      <div className="absolute left-1/2 top-1/2 h-full w-[1200px] max-w-full -translate-x-1/2 -translate-y-1/2 transform">
        {' '}
        <div className="absolute left-4 top-1/4 z-20 m-auto w-fit space-y-10 rounded-md bg-white px-4 py-10  text-my_light_black md:top-1/3 md:bg-black md:bg-opacity-50 md:text-white md:backdrop-blur-sm">
          <h1 className="text-5xl">Montserrat Arreola De la Mora</h1>
          <h2 className="text-3xl">¡Aprende con una profesora experta!</h2>
          <div>
            <Link
              href={'/contact'}
              className="rounded bg-my_blue px-6 py-1 text-3xl text-white"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
