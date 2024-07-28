"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/src/components/ui/Hero/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675072.jpg?t=st=1722176460~exp=1722180060~hmac=92651792b20ca9dceb9c6c2b7439538a5c2d332c9dba47cc8dc96f6d0cebdbce&w=2000",
    "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675058.jpg?t=st=1722176487~exp=1722180087~hmac=a2674f333e8b923ff968871b63268359c80d08634ad7aa458e4b669bbdcf297c&w=2000",
    "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675070.jpg?t=st=1722176527~exp=1722180127~hmac=5780c38530e3c0ea908b74bc69ef0801bc815b9d8e635c9c58bd21dbbcabf1fe&w=2000",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-extrabold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WELCOME TO <br /> KHMER CODE ACADEMY (KCA)
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-green-500">
          <span>Get Started →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
