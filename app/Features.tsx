import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section>
      {/* This is for the Features header */}
      <div>
        <div className="flex flex-col items-center justify-center mt-15 lg:mt-16">
          <div>
            <p className="w-44 font-sans text-xl text-center text-black tracking-widest sm:text-4xl lg:text-5xl">Features</p>
          </div>
          <div className="bg-[#191970] w-44 h-1 sm:w-96 lg:w-5/12"></div>
        </div>
      </div>

      {/* This is for the Features images and content */}
    <div className="lg:flex lg:items-aligned lg:justify-evenly lg:mt-16">
      <div className="flex items-aligned justify-evenly mt-7 sm:mt-14 lg:flex-col lg:justify-center ">
        <div> 
          <Image 
            alt="Mockup 2" 
            className="w-28 sm:w-56 lg:w-64 lg:items-aligned lg:ml-3" 
            height={226} 
            src="/mockup2.png"
            width={111.51} 
          /> 
        </div>
        <div className="custom-width-157 self-center"> 
          <p className="text-indigo-900 text-xs text-center items-aligned justify-center sm:text-2xl lg:mt-10 lg:text-3xl lg:my-3">Meetups made easy</p> 
        </div>
      </div>
      <div className="flex flex-row-reverse items-aligned justify-evenly mt-14 sm:mt-11 lg:flex-col lg:justify-center">
        <div> 
          <Image 
            alt="Mockup 3" 
            className="w-28 sm:w-56 lg:w-64 lg:items-aligned lg:ml-2" 
            height={226} 
            src="/mockup3.png"
            width={111.51}
          /> 
        </div>
        <div className="custom-width-157 self-center"> 
          <p className="text-indigo-900 text-xs text-center items-aligned justify-center sm:text-2xl lg:mt-10 lg:text-3xl">Selling made simple</p> 
        </div>
      </div>
      <div className="flex items-aligned justify-evenly mt-14 sm:mt-11 lg:flex-col lg:justify-center">
        <div className="-ml-2"> 
          <Image 
            alt="Mockup 4" 
            className="w-28 sm:w-56 lg:w-64 lg:items-aligned lg:ml-2" 
            height={557} 
            src="/mockup4.png"
            width={275}
          /> 
        </div>
        <div className="custom-width-157 self-center"> 
          <p className="text-indigo-900 text-xs text-center items-aligned justify-center sm:text-2xl lg:mt-10 lg:text-3xl"> Campus exclusive</p> 
        </div>
      </div>
    </div>
   </section>
  )
}