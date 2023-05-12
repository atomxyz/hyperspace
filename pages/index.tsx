import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { ATOM_TWITTER, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Twitter } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";
import Background from "@/components/home/background";

export default function Home() {
  return (
    <Layout background="bg-transparent">
      <Background />
      <motion.div
        className="h-[70vh] bg-transparent px-5  xl:px-0"
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
          className="pt-10  text-center font-display text-4xl font-bold tracking-[-0.02em] text-black  md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-row ">
            {" "}
            <Image
              src="/Images/logoHyper.png"
              alt="hyper logo"
              width="80"
              height="50"
              className="mr-5 rounded-sm drop-shadow-none"
            />
            <span className="drop-shadow-sm">Hyperspace</span>
          </div>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Create and Name New Hyper Dimensional Structures, Helping Raise
            Money for Charity and Science
          </Balancer>
        </motion.p>

        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-[#B56CFF] bg-[#B56CFF] px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/about"
          >
            <p>About The Drop</p>
          </Link>
          <Link
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-[#B56CFF]"
            href="/project"
          >
            <p>Discover More</p>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
