"use client"
import About from "@/Components/About";
import Model from "../Components/Model";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { useEffect } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInOnScroll = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      <nav className="flex flex-1/2 justify-between mt-5">
        <button className="font-sans text-2xl">GR</button>
        <div className="flex items-center space-x-4">
          <a href="#about">
            <button className="cursor-pointer hover:text-green-600 hover:scale-105 transition-transform duration-200">
              About Us
            </button>
          </a>
          <a href="#contact">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-green-600 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Contact Us
            </button>
          </a>
        </div>
      </nav>

      <section id="Hero">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="flex flex-1/2 justify-between">
            <div className="relative h-[400px] w-[300px] mt-35">
              <div className="absolute inset-0 transform scale-150 model-container">
                <Model />
              </div>
            </div>
            <div className="mt-25 flex flex-1/2 justify-center max-w-3xl ml-20">
              <div>
                <div className={`${bebasNeue.className} text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500`}>
                  BUG CLEAN POWDER
                </div>
                <div className={`${bebasNeue.className} mt-5 break-words text-justify text-gray-300 text-xl`}>
                  <p>{
                  `BUG CLEAN POWDER is a specialized insect-repellent powder designed to protect livestock from pests like flies, ticks, mosquitoes, and lice. It helps maintain hygiene and prevents infections, ensuring the well-being of animals. To use, mix 3-4 spoons of the powder in lukewarm water, stir well, and apply it to the animal's body, avoiding the face. This effective solution cleans the skin, reduces pest infestations, and keeps livestock comfortable and healthy.
                  `}
                 </p>

                  <div>
                    <a href="#about">
                  <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-green-600   dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-25">
                  Learn More
            </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="mt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInOnScroll}
      >
      <About></About>  
      </motion.section>

      <motion.section
        id="contact"
        className="mt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInOnScroll}
      >
        <p className="mt-4 text-gray-300">
          Email: support@bugclean.com <br />
          Phone: +91 98765 43210 <br />
          Address: 123 Bug Street, Insect City, Earth
        </p>
      </motion.section>
      <footer className="mt-20 py-6 bg-black border-t border-white/10 text-center text-gray-400">
        &copy; 2025 Bug Clean. All rights reserved.
      </footer>
    </div>
  );
}
