"use client";
import About from "@/Components/About";
import Model from "@/Components/Model"; 
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { useEffect } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

// Staggered Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-hidden px-6 md:px-12">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 md:gap-0"
      >
        <button className="font-sans text-3xl font-bold tracking-tight">
          GR <span className="text-neutral-400 text-lg font-normal">Industries</span>
        </button>
        <div className="flex items-center space-x-6">
          <a href="#about" className="cursor-pointer text-gray-300 hover:text-green-500 hover:scale-105 transition-transform duration-200">
            About Us
          </a>
          <a href="#contact">
            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-lime-600 text-black rounded-full font-bold shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 transition duration-300">
              Contact Us
            </button>
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="Hero" className="mt-16 md:mt-24 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* 3D Model Container - Offset fixed */}
          <motion.div 
            variants={slideInLeft} 
            initial="hidden" 
            animate="visible"
            className="w-full md:w-1/2 h-[400px] md:h-[500px] relative flex justify-center items-center"
          >
            {/* Soft Glow - Locked in the exact center of the column */}
            <div className="absolute bg-green-500/30 blur-[80px] rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px]"></div>
            
            {/* Model Wrapper - Shifted left to counteract the 3D model's built-in right-leaning offset */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center transform scale-[1.3] md:scale-[1.25] -translate-x-18 md:-translate-x-20 translate-y-12 md:translate-y-12">
              <Model />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <motion.h1 
              variants={slideUp}
              className={`${bebasNeue.className} text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 leading-none`}
            >
              BUG CLEAN <br className="hidden md:block" /> POWDER
            </motion.h1>
            
            <motion.p 
              variants={slideUp}
              className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              A specialized insect-repellent powder designed to provide effective protection against various pests. It ensures the well-being of animals. Mix 3-4 spoons in lukewarm water and apply to the animal's body for a comfortable, healthy livestock.
            </motion.p>

            <motion.div variants={slideUp} className="mt-8">
              <a href="#about">
                <button className="px-8 py-3 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-full font-bold hover:bg-white/20 transition duration-300">
                  Learn More
                </button>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <About />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto md:mx-0">
          <h2 className={`${bebasNeue.className} text-4xl text-white mb-4`}>Get In Touch</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Phone:</strong> +91 9462623387 <br />
            <strong className="text-white">Address:</strong> Krishna Complex, Kailash Nagar, Badi Udaipur (Rajasthan, India)
          </p>
        </div>
      </motion.section>
    </div>
  );
}