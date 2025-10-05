"use client"
import { motion } from "framer-motion"
import { ReactCompareSlider } from "react-compare-slider"

export default function AtacamaPage() {
  const vegetationData = [
    { date: "Before Bloom (May 2024)", coverage: 2 },
    { date: "During Bloom (August 2024)", coverage: 25 },
  ]

  const climateData = [
    { period: "May 2024", rainfall: "5 mm", temperature: "12°C" },
    { period: "August 2024", rainfall: "15 mm", temperature: "16°C" },
  ]

  const keyStatistics = [
    { label: "Species in Bloom", value: "200+" },
    { label: "Bloom Area", value: "≈ 350 km²" },
    { label: "Rainfall Increase", value: "+10 mm" },
  ]

  const sources = [
    "NASA Earth Observatory",
    "Live Science (2024)",
    "Reuters Environment",
    "Phys.org Climate Report",
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#0F1E12] to-[#1a2c1e]`}>
      <div className={`container mx-auto px-4 py-8`}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`text-center mb-12`}
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4`}>
            Atacama Desert Bloom 2024 Analysis
          </h1>
          <p className={`text-lg text-white/80 max-w-3xl mx-auto`}>
            Rare rains triggered a spectacular bloom of over 200 wildflower species, transforming one of the driest regions on Earth into the vibrant <em>Desierto Florido</em>.
          </p>
        </motion.div>

        {/* Image Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className={`w-[550px] h-[600px] mx-auto rounded-xl overflow-hidden shadow-2xl mb-16`}
        >
          <ReactCompareSlider
            itemOne={
              <div className={`relative w-full h-full`}>
                <img
                  src={`/before1.png`}
                  alt={`Before Bloom - May 2024`}
                  className={`w-full h-full object-cover`}
                />
                <div className={`absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm`}>
                  May 2024
                </div>
              </div>
            }
            itemTwo={
              <div className={`relative w-full h-full`}>
                <img
                  src={`/after1.png`}
                  alt={`After Bloom - August 2024`}
                  className={`w-full h-full object-cover`}
                />
                <div className={`absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm`}>
                  August 2024
                </div>
              </div>
            }
            className={`w-full h-full`}
            position={50}
            style={
              {
                "--react-compare-slider-handle-background": "#E7B875",
                "--react-compare-slider-handle-border": "2px solid white",
                "--react-compare-slider-handle-size": "40px",
              } as React.CSSProperties
            }
          />
        </motion.div>

        {/* Vegetation Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 mb-8 max-w-2xl mx-auto`}
        >
          <h3 className={`text-2xl font-semibold text-[#4CAF50] mb-6`}>
            Vegetation Coverage Analysis
          </h3>
          <div className={`space-y-6`}>
            {vegetationData.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`space-y-2`}
              >
                <div className={`flex justify-between text-white`}>
                  <span className={`font-semibold`}>{item.date}</span>
                  <span className={`text-[#4CAF50] font-bold`}>{item.coverage}%</span>
                </div>
                <div className={`w-full bg-white/20 rounded-full h-4`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.coverage}%` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className={`h-4 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#81C784]`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Climate and Key Stats */}
        <div className={`grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto`}>

          {/* Climate Data */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10`}
          >
            <h3 className={`text-2xl font-semibold text-[#E7B875] mb-4`}>Climate Data</h3>
            <div className={`space-y-4`}>
              {climateData.map((data, index) => (
                <motion.div
                  key={data.period}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`p-4 bg-white/5 rounded-lg border border-white/10`}
                >
                  <div className={`font-semibold text-white mb-2`}>{data.period}</div>
                  <div className={`grid grid-cols-2 gap-4 text-sm`}>
                    <div className={`text-[#4CAF50]`}>
                      <div className={`font-semibold`}>Rainfall</div>
                      <div>{data.rainfall}</div>
                    </div>
                    <div className={`text-[#E7B875]`}>
                      <div className={`font-semibold`}>Temperature</div>
                      <div>{data.temperature}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10`}
          >
            <h3 className={`text-2xl font-semibold text-[#4CAF50] mb-4`}>Key Statistics</h3>
            <div className={`space-y-4`}>
              {keyStatistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`p-4 bg-white/5 rounded-lg border border-white/10 text-center`}
                >
                  <div className={`text-2xl font-bold text-[#E7B875] mb-1`}>{stat.value}</div>
                  <div className={`text-white/80 text-sm`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scientific Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg mb-8 border border-white/10 max-w-4xl mx-auto`}
        >
          <h3 className={`text-2xl font-semibold text-[#4CAF50] mb-4`}>Scientific Analysis</h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={`text-white/80 text-lg leading-relaxed`}
          >
            The August 2024 Atacama bloom followed an unusual winter rainfall event — around 15 mm of rain, nearly double the region’s yearly average. 
            This rare precipitation, combined with cool temperatures and persistent fog moisture, activated dormant seeds across the desert floor. 
            Satellite imagery revealed a 10x increase in vegetation coverage compared to baseline months, confirming one of the most extensive blooms in a decade.
          </motion.p>
        </motion.div>

        {/* Location and Sources */}
        <div className={`grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10`}
          >
            <h3 className={`text-2xl font-semibold text-[#E7B875] mb-4`}>Location Information</h3>
            <div className={`space-y-3 text-white/80`}>
              <div><span className={`font-semibold text-white`}>Location:</span> Atacama Desert, Chile</div>
              <div><span className={`font-semibold text-white`}>Coordinates:</span> 27.4° S, 70.3° W</div>
              <div><span className={`font-semibold text-white`}>Area Type:</span> Hyper-arid Desert Region</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10`}
          >
            <h3 className={`text-2xl font-semibold text-[#4CAF50] mb-4`}>Trusted Sources</h3>
            <div className={`grid grid-cols-2 gap-2`}>
              {sources.map((source, index) => (
                <motion.div
                  key={source}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-white/70 text-sm`}
                >
                  • {source}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-center text-white/60 text-sm border-t border-white/20 pt-8 max-w-4xl mx-auto`}
        >
          Data based on satellite observations and climate reports from 2024
        </motion.div>
      </div>
    </div>
  )
}
