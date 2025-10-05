"use client"
import { motion } from "framer-motion"
import { ReactCompareSlider } from "react-compare-slider"

export default function NamaqualandPage() {
  const vegetationData = [
    // These coverage numbers are representative estimates (see sources below).
    { date: "Pre-bloom (June 2024)", coverage: 3 },
    { date: "Peak bloom (Aug 20, 2024)", coverage: 32 },
  ]

  const climateData = [
    { period: "June 2024 (pre-bloom)", rainfall: "8 mm (winter total)", temperature: "14°C" },
    { period: "Aug 20, 2024 (bloom)", rainfall: "20 mm (season total)", temperature: "16°C" },
  ]

  const keyStatistics = [
    { label: "Estimated Species Blooming", value: "hundreds (regional)" },
    { label: "Bloom Corridor", value: "Hundreds of km² (route & park areas)" },
    { label: "Typical Bloom Window", value: "Aug – Oct (seasonal)" },
  ]

  const sources = [
    "MODIS / NASA satellite gallery (Aug 21, 2024)",
    "Namaqua National Park / weekly flower updates (Aug 2024)",
    "Discover Wildlife — Namaqualand feature",
    "Getty / stock captions (Aug 2024 photos)"
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
            Namaqualand Spring Bloom — 2024
          </h1>
          <p className={`text-lg text-white/80 max-w-3xl mx-auto`}>
            In spring, the Succulent Karoo transforms into vibrant hills of wildflowers — an ephemeral carpet of endemic species across Namaqualand.
          </p>
        </motion.div>

        {/* Image Comparison Slider (no overlay text) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className={`w-[550px] h-[600px] mx-auto rounded-xl overflow-hidden shadow-2xl mb-16`}
        >
          <ReactCompareSlider
            itemOne={
              <img
                src={`/bbfor.png`}
                alt={`Namaqualand before bloom (pre-bloom landscape)`}
                className={`w-full h-full object-cover`}
              />
            }
            itemTwo={
              <img
                src={`/aafter.png`}
                alt={`Namaqualand peak bloom (Aug 20, 2024)`}
                className={`w-full h-full object-cover`}
              />
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
          <h3 className={`text-2xl font-semibold text-[#4CAF50] mb-6`}>Vegetation Coverage Analysis</h3>
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

        {/* Climate & Stats */}
        <div className={`grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto`}>
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
            Namaqualand’s spring bloom is driven by winter rains and cool spring conditions. Regional reports and satellite images from August 2024 show large expanses of flowering across the Namaqua National Park and the Wild Flower Route. The values shown above are representative estimates for UI display; for exact NDVI-derived coverage we can compute values from Sentinel-2 / Landsat imagery on request.
          </motion.p>
        </motion.div>

        {/* Location & Sources */}
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
              <div><span className={`font-semibold text-white`}>Region:</span> Namaqualand, Northern & Western Cape, South Africa</div>
              <div><span className={`font-semibold text-white`}>Park / Corridor:</span> Namaqua National Park & Wild Flower Route</div>
              <div><span className={`font-semibold text-white`}>Typical Bloom:</span> August – October (peak varies by year)</div>
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
          Data & images referenced from satellite gallery and park reports (Aug 2024)
        </motion.div>
      </div>
    </div>
  )
}
