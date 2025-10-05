"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandOne() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/img1.jpg"
          alt="Super Blooming Desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 w-full h-[55%] flex flex-col justify-center items-center space-y-8 translate-y-6 md:translate-y-10">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight px-4"
        >
          Have you ever seen a desert{" "}
          <motion.span 
            className="text-[#E7B875]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            come alive
          </motion.span>
          ?
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/world-map"
              className="block px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-[#E7B875] to-[#4CAF50] text-white hover:shadow-lg transition-shadow duration-300"
            >
              Wanna see it on the map?
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Description Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 flex justify-center items-center w-full h-[45%] bg-gradient-to-b from-transparent to-black/70"
      >
        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-white/90 px-6 leading-relaxed"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-semibold text-[#E7B875] hover:text-[#f8d7a4] transition-colors duration-300">
            Super Blooming
          </span>{" "}
          is a rare natural phenomenon where deserts burst into color — fields of wildflowers 
          covering once-barren lands, visible even from space. It&apos;s nature&apos;s reminder that life 
          always finds a way.
        </motion.p>
      </motion.div>
    </section>
  );
}