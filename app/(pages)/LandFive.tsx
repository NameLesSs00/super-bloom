"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandFive() {
  const [isCrazy, setIsCrazy] = useState(false);

  const crazyVariants = {
    normal: {
      scale: 1,
      rotate: 0,
      color: "#ffffff",
    },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      color: ["#E7B875", "#4CAF50", "#E7B875"],
      transition: {
        duration: 0.5,
        rotate: {
          duration: 0.3,
          repeat: Infinity
        },
        color: {
          duration: 1,
          repeat: Infinity
        }
      }
    },
    tap: {
      scale: 0.9,
      rotate: 360,
      color: "#ff00ff",
      transition: {
        duration: 0.8,
        rotate: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    }
  };

  const crazyAnimation = {
    scale: [1, 1.5, 1],
    rotate: [0, 180, 360],
    color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    x: [0, 20, -20, 10, -10, 0],
    y: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const letterVariants = {
    normal: { scale: 1, y: 0 },
    hover: (i: number) => ({
      scale: [1, 1.3, 1],
      y: [0, -10, 0],
      rotate: [0, i % 2 === 0 ? -5 : 5, 0],
      color: ["#ffffff", "#E7B875", "#4CAF50", "#ffffff"],
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };

  return (
    <>
      <section className="w-full py-32 bg-gradient-to-r from-[#E7B875]/20 via-[#4CAF50]/20 to-[#E7B875]/20 flex flex-col items-center justify-center text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Seen enough? Explore it on the map!
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/world-map"
            className="px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-[#E7B875] to-[#4CAF50] text-black hover:shadow-2xl transition-all duration-300 block"
          >
            View the Map
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-8 text-center text-white">
        <p>
          © 2025{" "}
          <motion.span
            className="font-bold cursor-pointer inline-block"
            initial="normal"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsCrazy(!isCrazy)}
            onHoverStart={() => setIsCrazy(false)}
            style={{ display: "inline-block" }}
            animate={isCrazy ? crazyAnimation : undefined}
            variants={crazyVariants}
          >
            {"ElMajanin".split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="normal"
                whileHover="hover"
                style={{ display: "inline-block" }}
                className="relative"
                variants={letterVariants}
              >
                {letter}
                {isCrazy && (
                  <motion.span
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0], 
                      opacity: [0, 1, 0],
                      y: [0, -15, -30]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    {["✨", "🎉", "🌟", "💫", "🔥", "⭐", "😎", "🚀"][index % 8]}
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.span>
          . All rights reserved.
        </p>
        
      </footer>
    </>
  );
}