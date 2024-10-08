
"use client";
import Style from "./page.module.css";
import React from "react"
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { ParallaxScroll } from "../components/ui/parallax-scroll"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function Home() {
  const openPDFInNewTab = () => {
    const pdfUrl = '/resume.pdf'; // Replace with the actual path to your PDF file
    const newWindow = window.open(pdfUrl, '_blank');

    if (newWindow) {
      newWindow.opener = null; // Detach the new window from the current window
    } else {
      // Handle pop-up blocking or other issues
      console.error('Unable to open PDF in a new tab. Please check your pop-up blocker settings.');
    }
  };
  return (
    <>
    <section>
      <div className=" relative">
        <div >
        <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl text-white"
      >
       Hello there <br /> I am Jithin Reji
       <br />
       <TextGenerateEffect words="Developer / UI designer"/>
       <div className=" w-full flex justify-center gap-3 pt-12 pb-12">
      <button onClick={openPDFInNewTab} className=" w-36 h-9 text-xl bg-blue-600 rounded text-white hover:bg-blue-700 ">my resume</button>
      <a href="#WORKS" className=" w-36 h-9 text-xl bg-blue-600 rounded text-white hover:bg-blue-700 "><button className=" w-36 h-9 text-xl bg-blue-600 rounded text-white hover:bg-blue-700 ">my works</button></a>
      </div>
     
      </motion.h1>
      
    </LampContainer>
        </div>
    
    <h1 className=" text-white absolute bottom-36 text-center w-full px-14 sm:bottom-52 sm:px-28">
      As a frontend dev, I have done projects in react js and next js
      along with some simple websites using html ,css and vanilla js. My backend projects are done in express and nest js. I use figma to create 
      attractive and unique UIs</h1>
      </div>
     
    <div id="WORKS">
      <h1 className=" text-white text-center text-3xl pb-4 pt-7">a few of my works</h1>
      
    <ParallaxScroll images={images} />
   
    </div>
   
     <footer className=" bg-white bg-opacity-5 fixed bottom-0  w-full backdrop-blur-lg align-middle py-2 ">
      <div className=" flex justify-center gap-2 text-white">
        ----
       <a href="https://github.com/Jithin-caz" target="_blank" className=" brightness-90 hover:brightness-100">
       <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="github"/>
       </a>
     
      <a className=" brightness-90 hover:brightness-100" href="https://www.linkedin.com/in/jithin-reji-630287254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
      <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin"/>
      </a>
      <a className=" brightness-90 hover:brightness-100" href="https://www.instagram.com/__01001010_?igsh=MzNlNGNkZWQ4Mg==" target="_blank">
      <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
      </a>
      
      <a className=" brightness-90 hover:brightness-100" href="https://mail.google.com/mail/?view=cm&fs=1&to=jithinreji185@gmail.com&su=Subject%20of%20the%20email&body=Body%20of%20the%20email" target="_blank">
      <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png" alt="gmail-new"/>
</a>
---- </div>
      
      </footer>
    </section>
    </>
  );
}
const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
]