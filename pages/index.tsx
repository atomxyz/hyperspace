import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {
  ATOM_TWITTER,
  DEPLOY_URL,
  FADE_DOWN_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="h-[70vh] px-5 xl:px-0"
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
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href={ATOM_TWITTER}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">Follow Atom</p>
        </motion.a>
        <motion.h1
          className="  text-center font-display text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-col ">
            <div className="m-auto flex flex-row py-3">
              <Image alt="Atom logo" src="/logo.png" width={80} height={50} />
              <Balancer>
                Atom <span className="font-extralight">x </span>
              </Balancer>
            </div>
            <div className="m-auto">
              <Image
                alt="Common Hope logo"
                src="/images/commonhopelogo.png"
                width={400}
                height={50}
              />
            </div>
          </div>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Support DeSci with these Mathematical NFT{"'"}s, backing both
            charity and Atom{"'"}s Decentralized Funding Platform
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/about"
          >
            <p>About The Drop</p>
          </Link>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://www.atomprotocol.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Atom logo" src="/logo.png" width={15} height={15} />
            <p>Discover Atom</p>
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
