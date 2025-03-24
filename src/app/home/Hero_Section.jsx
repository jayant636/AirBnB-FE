import { Button } from '@/components/ui/button';
import React from 'react';

const Hero_Section = () => {
  return (
    <section className="relative min-h-[372px] bg-black">
      <img
        className="absolute size-full z-[1] mx-auto object-cover max-w-[1440px] inset-0"
        src="./assets/hero-image-1440.jpeg"
        alt="Home_hero_img"
      />
      <div className="z-[2] relative  container space-y-2">
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl mt-6">
          Travel has never
          <br /> felt this cozy
        </h1>
        <p className="text-xl font-medium leading-snug text-white md:text-2xl">
          Book an entire place all for yourself
        </p>
        <Button className="relative bg-blue-500   text-white cursor-pointer rounded-sm hover:bg-blue-300 mt-8 h-12 px-4 text-base font-semibold">
          Discover Holiday Rentals
        </Button>
      </div>
    </section>
  );
};

export default Hero_Section;
