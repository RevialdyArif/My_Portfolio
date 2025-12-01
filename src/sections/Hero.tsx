"use client";

import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from '../assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';
import StarIcon from '../assets/icons/star.svg';
import SparkleIcon from '../assets/icons/sparkle.svg';
import { HeroOrbit } from "../components/HeroOrbit";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-0 overflow-x-clip py-20 md:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Hero Rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Floating Elements */}
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className='size-12 text-emerald-300 drop-shadow-lg' />
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
        <div className="flex flex-col items-center mt-12">
          {/* Profile Image with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }}
            className="mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Image
              src={memojiImage}
              className='size-[120px] md:size-[140px] relative z-10'
              alt="My Photo"
            />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-r from-gray-900/90 to-gray-950/90 backdrop-blur-md border border-emerald-500/30 px-5 py-2.5 inline-flex items-center gap-3 rounded-full shadow-lg shadow-emerald-500/10"
          >
            <div className="bg-emerald-500 size-2.5 rounded-full relative">
              <div className="bg-emerald-500 absolute inset-0 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-semibold text-white">Available for opportunities</div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mt-8">
          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mb-4"
          >
            <span className="inline-block text-lg md:text-xl text-white/70 font-medium">
              👋 Hello, Im
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-center tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Revialdy Arif
            </span>
          </motion.h1>

          {/* Description with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-base md:text-xl text-white/70 leading-relaxed">
              Mechatronics & AI Enthusiast passionate about{' '}
              <span className="inline-block">
                <TypeAnimation
                  sequence={[
                    "Artificial Intelligence",
                    2500,
                    "Computer Vision",
                    2500,
                    "Software Development",
                    2500,
                    "Automation Systems",
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent"
                />
              </span>
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1AkngdSkegvdJqWvGx0gSMm97p3GVoqZ9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 h-12 rounded-xl items-center gap-2 bg-white text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/20 group w-full sm:w-auto justify-center"
            >
              <span>Download CV</span>
              <ArrowDown className='size-4 group-hover:translate-y-1 transition-transform' />
            </motion.button>
          </a>
          <a
            href="https://www.linkedin.com/in/revialdyarif/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-white/20 bg-transparent text-white px-8 h-12 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm group w-full sm:w-auto justify-center"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">👋</span>
              <span>Lets Connect</span>
            </motion.button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/60 transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
            <ArrowDown className='size-5' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
