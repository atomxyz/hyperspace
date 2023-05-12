import Layout from "@/components/layout";
import React from "react";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { aboutText } from "@/lib/text/about";

type WordingType = {
  textLocation: string;
  text: any;
};

export default function About() {
  return (
    <Layout background="bg-[#fdf8f4] pb-10">
      <motion.div
        className="min-h-[70vh] px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="text-center font-display text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-5xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-col ">About Hyperspace</div>
        </motion.h1>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="m-auto text-xs md:w-5/6 md:text-lg"
        >
          {aboutText.map((paragraph: WordingType, i: number) => (
            <motion.div key={i} className={`${paragraph.textLocation} py-3`}>
              {paragraph.text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
}
