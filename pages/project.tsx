import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { ATOM_TWITTER, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Twitter } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <Layout background="bg-[#fdf8f4]">
      <motion.div
        className="m-atuo h-[70vh] w-full px-5 xl:px-0"
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
          className="  text-center font-display text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-col ">
            <div className="m-auto py-3">
              <a
                href="https://www.atomprotocol.xyz/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row "
              >
                <Image alt="Atom logo" src="/logo.png" width={80} height={50} />
                <Balancer>
                  Atom <span className="font-extralight">x </span>
                </Balancer>
              </a>
            </div>
            <div className="m-auto">
              <a
                href="https://www.commonhope.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Common Hope logo"
                  src="/images/commonhopelogo.png"
                  width={400}
                  height={50}
                />
              </a>
            </div>
          </div>
        </motion.h1>
        <motion.p
          className="m-auto mt-6 w-5/6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Proceeds from the hyperspace digital certificates will be donated to
            the Common Hope charity and Atom. Common Hope is fighting poverty
            with diplomas. Poverty ends wherever education thrives. They work
            with Guatemalan families to provide the resources needed to achieve
            better lives. Atom is building the financial infrastructure to
            enable Decentralized Science. Atom is powering this drop, and will
            distribute the proceeds to scientific researchers using blockchain
            powered funding models.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
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
        </motion.div>
      </motion.div>
    </Layout>
  );
}
