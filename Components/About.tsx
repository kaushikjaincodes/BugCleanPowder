"use client";
import React from 'react';
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const textVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
};

function About() {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 order-2 md:order-1 text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <header>
            <h2 className={`${bebasNeue.className} text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 mb-6`}>
              ABOUT US
            </h2>
          </header>
          
          <div className='text-gray-300 leading-relaxed text-base md:text-lg space-y-4'>
            <p>
              At <span className="text-white font-semibold">G.R. Industries</span>, we are dedicated to providing high-quality veterinary and livestock care solutions. With a commitment to animal health and well-being, we manufacture and market effective products that help protect livestock from harmful pests.
            </p>
            <p>
              Our flagship product, <span className="text-green-400 font-bold">BUG CLEAN POWDER</span>, is formulated with scientifically tested ingredients to ensure the safety and hygiene of farm animals. Based in Udaipur, India, we strive for excellence through innovation and customer satisfaction.
            </p>
          </div>
          
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-green-500 to-lime-600 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-green-500/20">
            View Details
          </button>
        </motion.div>

        {/* Product Image Container */}
        <motion.div 
          className="flex-1 order-1 md:order-2 flex justify-center w-full"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative group w-full max-w-sm">
            {/* Soft Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden flex justify-center">
              <Image 
                src="/Label.png" 
                alt="Product Label" 
                height={400} 
                width={400} 
                className="rounded-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About;