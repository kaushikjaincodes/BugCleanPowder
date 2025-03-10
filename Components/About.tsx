import React from 'react'
import Image from "next/image"
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

function About() {
  return (
    <div className="flex flex-1/2 justify-between">
        <div>
            <div>
            <div className={`${bebasNeue.className} text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500`}>
                  ABOUT US
                </div>
            </div>
            <div className='break-words text-justify max-w-2xl mt-5'>
            At G.R. Industries, we are dedicated to providing high-quality veterinary and livestock care solutions. With a commitment to animal health and well-being, we manufacture and market effective products that help protect livestock from harmful pests like flies, ticks, mosquitoes, crickets, lice, and fleas.Our flagship product, BUG CLEAN POWDER, is formulated with scientifically tested ingredients to ensure the safety and hygiene of farm animals. Designed for topical use, it helps maintain the skin health of livestock by reducing pest infestations effectively.Based in Badi, Udaipur (Rajasthan, India), we strive for excellence in every product we manufacture. With a focus on innovation, safety, and customer satisfaction, G.R. Industries continues to be a trusted name in the veterinary care industry.
            </div>
        </div>
        <div>
            <Image src="/Label.png" alt="Product Label photo" height={500} width={500}></Image>
        </div>
    </div>
  )
}

export default About