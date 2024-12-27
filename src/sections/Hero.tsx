"use client";

import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from '../assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';
import StarIcon from '../assets/icons/star.svg';
import SparkleIcon from '../assets/icons/sparkle.svg';
import { HeroOrbit } from "../components/HeroOrbit";
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div 
          className="absolute inset-0 -z-30 opacity-5" 
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-72}> 
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className='size-3 rounded-full bg-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image 
            src={memojiImage} 
            className='size-[100px]' 
            alt="My Photo"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-xl">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-semibold">Let's Collaborate!</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hey There, It's Me Revialdy Arif
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm a Mechatronics and AI student with a strong interest in technology, especially in
            <span className="block md:inline"> </span>
            <span className="mt-2 text-center md:mt-0 md:inline-block">
              <TypeAnimation
                sequence={[
                  "Artificial Intelligence.",
                  2000,
                  "Computer Vision.",
                  2000,
                  "Programming.",
                  2000,
                ]}
                wrapper="span"
                speed={35}
                repeat={Infinity}
                className="font-bold text-emerald-600"
              />
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="https://drive.google.com/file/d/1JQx2vAQwGAAucEpdr9FgD83IqeZbCVvN/view?usp=drive_link">
            <button className="inline-flex px-6 h-12 rounded-xl items-center gap-2 border border-white/15 transition duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg cursor-pointer">
              <span className="font-semibold">Download CV</span>
              <ArrowDown className='size-4' />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/revialdyarif/">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl transition duration-300 hover:bg-gray-900 hover:border-white/15 hover:text-white hover:shadow-lg cursor-pointer">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};