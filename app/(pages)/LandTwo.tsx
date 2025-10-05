"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandTwo() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section (left on desktop) */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              What is <span className="text-[#E7B875]">Super Blooming</span>?
            </motion.h2>

            <motion.p 
              className="mt-4 text-base md:text-lg leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A <span className="font-semibold text-[#4CAF50]">Super Bloom</span> is a rare and
              stunning phenomenon when thousands of dormant wildflower seeds awaken across desert
              landscapes. With the perfect mix of rain and temperature, barren ground transforms
              into vibrant carpets of color — so vast, they can be seen from space.
            </motion.p>

            <div className="mt-6 grid grid-cols-1 gap-4 text-white/90">
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 text-xl text-[#4CAF50]">•</div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-white">Timing & Rainfall</p>
                  <p className="text-sm md:text-base text-white/80">
                    Precise seasonal rainfall patterns trigger the germination of seeds that have
                    been waiting for years.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 text-xl text-[#E7B875]">•</div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-white">Dormant Seed Banks</p>
                  <p className="text-sm md:text-base text-white/80">
                    Beneath the surface lies a hidden seed bank — nature&apos;s memory, ready to bloom
                    when the time is right.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 text-xl text-[#4CAF50]">•</div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-white">
                    Ecological Impact
                  </p>
                  <p className="text-sm md:text-base text-white/80">
                    These blooms sustain pollinators, enrich ecosystems, and inspire visitors from
                    across the world.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Side (right on desktop) */}
        <motion.div 
          className="w-full md:w-1/2 relative h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/img4.jpeg"
              alt="Super bloom seen from space"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          
          {/* left gradient fade for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#0F1E12]/80 via-transparent to-transparent" />

          {/* caption overlay */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 rounded-full text-sm text-white/90 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Visible from space — <span className="text-[#E7B875]">California, USA 🌎</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}