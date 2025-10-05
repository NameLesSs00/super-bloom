"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Why We Chose This Challenge — Desert/Sand */}
      <section className="w-full py-24 bg-gradient-to-b from-[#E7B875]/30 via-[#E7B875]/20 to-[#E7B875]/10 text-white px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why We Chose This Challenge
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Super Bloom is something new to most of us — have you ever heard about it before today? 
            These rare natural events help scientists, farmers, and even travelers who want to witness 
            this beauty with their own eyes. By creating this website, we hope to spread awareness and 
            make it easier for everyone to explore and understand these extraordinary events.
          </motion.p>
        </div>
      </section>

      {/* Section 2: What We Plan to Add — Stormy */}
      <section className="w-full py-24 bg-gradient-to-b from-[#1F2937]/70 via-[#374151]/60 to-[#1F2937]/70 text-white px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Plan to Add
          </motion.h2>
          <ul className="list-disc list-inside space-y-4 text-lg md:text-xl max-w-3xl mx-auto">
            {[
              "Add API integration to view more Super Bloom areas dynamically.",
              "Include more statistical data and details to see whether we can predict when such events might happen.",
              "Make it an open-source project so people can contribute, improve features, and expand the platform over time."
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Tech We Used — Green / Cool */}
      <section className="w-full py-24 bg-gradient-to-b from-[#4CAF50]/30 via-[#81C784]/20 to-[#4CAF50]/10 text-white px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tech We Used
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Next.js, React, Tailwind CSS, Framer Motion.
          </motion.p>
        </div>
      </section>
    </>
  );
}