"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const locations = [
  {
    id: 1,
    name: "California, USA",
    description: "Carrizo Plain / Antelope Valley / Anza-Borrego. Famous superbloom areas.",
    img: "/caf1.webp",
    link: "/world-map?location=california",
  },
  {
    id: 2,
    name: "Atacama Desert, Chile",
    description: "Desierto Florido / Llanos de Challe. Arid desert bursting after rare rains.",
    img: "/florido1.jpg",
    link: "/world-map?location=chile",
  },
  {
    id: 3,
    name: "Namaqualand, South Africa",
    description: "Semi-desert Succulent Karoo biome with spectacular spring wildflowers.",
    img: "/Nam1.jpg",
    link: "/world-map?location=namaqualand",
  },
];

export default function LandThree() {
  return (
    <section className="w-full py-24 bg-[#0F1E12]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Famous Super Bloom Locations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {/* First card spans two columns on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link
              href={locations[0].link}
              className="group relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-[400px] md:h-[500px] block"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <Image
                  src={locations[0].img}
                  alt={locations[0].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {locations[0].name}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-base text-white/80 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {locations[0].description}
                </motion.p>
              </motion.div>
            </Link>
          </motion.div>

          {/* Next two cards side by side */}
          {locations.slice(1).map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href={loc.link}
                className="group relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-[300px] md:h-[400px] block"
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <Image
                    src={loc.img}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl font-semibold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {loc.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-white/80 mt-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {loc.description}
                  </motion.p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}