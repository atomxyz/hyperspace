import Layout from "@/components/layout";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import EquationG from "@/components/helpers/equationG";

export default function About() {
  return (
    <Layout background="bg-[#fdf8f4]">
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
        <p>
          Launching soon: your chance to own the NFT of a unique symmetrical
          object living in hyperspace. We will soon be giving you the chance to
          mint from a limited edition of 1729 of these NFTs. Each object will be
          named after one of the world’s great mathematicians. Which
          mathematician will you get? The money raised will be donated to Common
          Hope, an educational charity supporting and empowering children and
          their families in Guatemala through education
        </p>
        <p>
          hese symmetrical objects live in hyperspace, beyond the 3-dimensional
          world that we inhabit. So it is impossible to draw pictures or make
          models of them. Instead, we use the powerful language of mathematics
          and in particular group theory to explore their properties. The
          following complicated formula describes how the symmetries inside this
          object can be built by taking combinations of 9 basic symmetries
          called a1,a2,a3,b1,b2,b3,X,Y,Z.
        </p>

        <EquationG />
        <p>
          The complicated formula tells you how these symmetries interact with
          each other. For example if you do symmetry a1 followed by b2, the
          formula tells you that that leaves the object in the same position as
          if you{"'"}d first done symmetry X first then b2 and then a1.
        </p>
        <p>
          A similar thing happens with objects we can see. Take a beer mat.
          Place it on the table. First rotate it 90 degrees clockwise then
          reflect or flip the mat in the vertical line running down the middle
          of the mat. This is the same as if I start by rotating the beer mat
          180 degrees then flip in the vertical then do the rotation by 90
          degrees clockwise.
        </p>
        <p>
          Each symmetrical object constructed above is unique because the
          symmetries interact with each other in their own special way. They are
          special because the structures of these objects are connected to the
          arithmetic of elliptic curves. Trying to understand solutions to
          elliptic curves is one of the big open problems in mathematics related
          to one of the Clay Millennium Problems (The Birch-Swinnerton-Dyer
          Conjecture). The elliptic curve associated with each group of
          symmetries is got by taking the 4 numbers C[1], C[2], C[3] and C[4]
          and putting them into the following equation:
        </p>
        <p>Y2+C[1]XY+C[3]Y=X3+C[2]X2+C[4]X.</p>
        <p>
          If you would like to explore a little bit more of the mathematical
          significance of these groups then these two papers are where the first
          groups I constructed are explained. But, be warned, you{"'"}ll
          probably need a maths degree to understand the intricacies of these
          papers.
        </p>
        <p>
          A nilpotent group and its elliptic curve: non-uniformity of local zeta
          functions of groups, Israel J. of Math 126 (2001), 269-288. Counting
          subgroups in nilpotent groups and points on elliptic curves, J. Reine
          Angew. Math. 549 (2002) 1-21.
        </p>
        <p>
          You can read the story of the discovery of these new symmetrical
          objects in Marcus{"'"}s book Finding Moonshine.
        </p>
        <p>
          Marcus du Sautoy FRS OBE Simonyi Professor for the Public
          Understanding of Science and Professor of Mathematics at the
          University of Oxford.
        </p>
      </motion.div>
    </Layout>
  );
}
