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
            <div>
                
            </div>
        </div>
        <div>
            <Image src="/Label.png" alt="Product Label photo" height={500} width={500}></Image>
        </div>
    </div>
  )
}

export default About