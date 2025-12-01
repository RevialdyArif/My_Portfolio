"use client";

import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets create an amazing project together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Collaboration is where magic happens. Lets bring our ideas to
                life and craft a masterpiece together
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="mailto:revialdy.arifs@gmail.com" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative lg:-top-4 text-white bg-gray-900 inline-flex w-max px-6 h-12 items-center rounded-xl gap-2 mt-8 hover:shadow-lg transition duration-300"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
