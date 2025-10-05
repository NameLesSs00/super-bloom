"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandFour() {
  const contentSections = [
    {
      title: "🌸 Ecological Importance",
      color: "text-[#4CAF50]",
      items: [
        "<span class='font-semibold'>Support for Pollinators:</span> Abundant nectar and pollen feed bees, butterflies, and hummingbirds.",
        "<span class='font-semibold'>Soil Health and Erosion Control:</span> Dense wildflowers stabilize soil and improve quality.",
        "<span class='font-semibold'>Biodiversity Enhancement:</span> Supports diverse plants and wildlife, maintaining ecological balance."
      ]
    },
    {
      title: "🌍 Climate & Environmental Indicators",
      color: "text-[#E7B875]",
      items: [
        "<span class='font-semibold'>Climate Change Sensitivity:</span> Frequency/intensity indicates shifts in climate patterns.",
        "<span class='font-semibold'>Resilience & Adaptation:</span> Dormant seeds wait for optimal conditions to germinate."
      ]
    },
    {
      title: "🌿 Human Connection & Cultural Value",
      color: "text-[#4CAF50]",
      items: [
        "<span class='font-semibold'>Educational Opportunities:</span> Inspire conservation and awareness.",
        "<span class='font-semibold'>Cultural Significance:</span> Local traditions, festivals, and art celebrate these events."
      ]
    },
    {
      title: "⚠️ Threats & Conservation Needs",
      color: "text-[#E7B875]",
      items: [
        "<span class='font-semibold'>Habitat Destruction:</span> Urbanization, agriculture, and mining threaten wildflowers.",
        "<span class='font-semibold'>Invasive Species:</span> Non-native plants compete with native wildflowers.",
        "<span class='font-semibold'>Climate Change:</span> Altered precipitation and higher temperatures can reduce blooms."
      ]
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#E7B875]/10 via-[#4CAF50]/5 to-[#E7B875]/10 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* Left side: Question + intro */}
        <motion.div 
          className="md:w-1/2 flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why should we care?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Super blooms are not only breathtaking natural events, they are vital for ecosystems, 
            biodiversity, and human understanding of the environment. Here&apos;s why they matter:
          </motion.p>
        </motion.div>

        {/* Right side: Image */}
        <motion.div 
          className="md:w-1/2 relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <Image
              src="/qw1.png"
              alt="Cartoon woman thinking"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content boxes / sub-sections */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid gap-8 md:grid-cols-2">
        {contentSections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -50 : 50,
              y: 30
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              y: 0
            }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.5,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3 
              className={`text-xl font-bold ${section.color} mb-4`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (index * 0.5) + 0.3 }}
              viewport={{ once: true }}
            >
              {section.title}
            </motion.h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              {section.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index * 0.5) + 0.5 + (itemIndex * 0.1)
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}