import EquationG from "@/components/helpers/equationG";
import EquationY from "@/components/helpers/equationY";

export const aboutText = [
  { textLocation: "text-center text-xl font-bold", text: `Launching May 2023` },
  {
    textLocation: "text-left",
    text: (
      <p>
        &emsp;&emsp;Coming soon, your chance to name, own, and receive a digital
        certificate of a unique symmetrical object living in hyperspace. We will
        soon be giving you the chance to mint an Open Edition of these
        multidimensional NFTs. The money raised will be donated to Common Hope,
        an educational charity supporting and empowering children and their
        families in Guatemala through education.
      </p>
    ),
  },
  {
    textLocation: "text-left",
    text: (
      <p>
        &emsp;&emsp;These symmetrical objects live in hyperspace, beyond the
        3-dimensional world that we inhabit. So it is impossible to draw
        pictures or make models of them. Instead, we use the powerful language
        of mathematics and in particular group theory to explore their
        properties. The following complicated formula describes how the
        symmetries inside this object can be built by taking combinations of 9
        basic symmetries called{" "}
        <i>
          a<sub>1</sub>
        </i>
        ,{" "}
        <i>
          a<sub>2</sub>
        </i>
        ,{" "}
        <i>
          a<sub>3</sub>
        </i>
        ,{" "}
        <i>
          b<sub>1</sub>
        </i>
        ,{" "}
        <i>
          b<sub>2</sub>
        </i>
        ,{" "}
        <i>
          b<sub>3</sub>
        </i>
        , <i>X</i>, <i>Y</i>, <i>Z</i>.
      </p>
    ),
  },
  {
    textLocation: "text-center py-5",
    text: <EquationG />,
  },
  {
    textLocation: "text-left",
    text: (
      <p>
        &emsp;&emsp; The complicated formula tells you how these symmetries
        interact with each other. For example if you do symmetry{" "}
        <i>
          a<sub>1</sub>
        </i>{" "}
        followed by{" "}
        <i>
          b<sub>2</sub>
        </i>
        , the formula tells you that that leaves the object in the same position
        as if you{"'"}d first done symmetry <i>X</i> first then{" "}
        <i>
          b<sub>2</sub>
        </i>{" "}
        and then{" "}
        <i>
          a<sub>1</sub>
        </i>
        .
      </p>
    ),
  },
  {
    textLocation: "text-left",
    text: (
      <p>
        &emsp;&emsp; A similar thing happens with objects we can see. Take a
        beer mat. Place it on the table. First rotate it 90 degrees clockwise
        then reflect or flip the mat in the vertical line running down the
        middle of the mat. This is the same as if I start by rotating the beer
        mat 180 degrees then flip in the vertical then do the rotation by 90
        degrees clockwise.
      </p>
    ),
  },
  {
    textLocation: "text-left",
    text: (
      <p>
        &emsp;&emsp; Each symmetrical object constructed above is unique because
        the symmetries interact with each other in their own special way. They
        are special because the structures of these objects are connected to the
        arithmetic of elliptic curves. Trying to understand solutions to
        elliptic curves is one of the big open problems in mathematics related
        to one of the Clay Millennium Problems (The Birch-Swinnerton-Dyer
        Conjecture). The elliptic curve associated with each group of symmetries
        is got by taking the 4 numbers <i>C</i>[1], <i>C</i>[2], <i>C</i>[3] and{" "}
        <i>C</i>[4] and putting them into the following equation:
      </p>
    ),
  },
  {
    textLocation: "text-center py-5",
    text: <EquationY />,
  },
  {
    textLocation: "text-left",
    text: (
      <p>
        &emsp;&emsp;If you would like to explore a little bit more of the
        mathematical significance of these groups then these two papers are
        where the first groups I constructed are explained. But, be warned, you
        {"'"}ll probably need a maths degree to understand the intricacies of
        these papers. You can also read the story of the discovery of these new
        symmetrical objects in Marcus{"'"}s book{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.perlego.com/book/681840/finding-moonshine-a-mathematicians-journey-through-symmetry-text-only-pdf"
        >
          <i>Finding Moonshine</i>
        </a>
        .
      </p>
    ),
  },
  {
    textLocation: "text-left mx-10",
    text: (
      <div className="px-10">
        <a
          href="https://link.springer.com/article/10.1007/BF02784157?"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            A nilpotent group and its elliptic curve: non-uniformity of local
            zeta functions of groups, Israel J. of Math 126 (2001), 269-288.
          </i>
        </a>
      </div>
    ),
  },
  {
    textLocation: "text-left mx-10",
    text: (
      <div className="px-10">
        <a
          href="https://www.simonyi.ox.ac.uk/wp-content/uploads/2016/05/duSautoyPublication6.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            Counting subgroups in nilpotent groups and points on elliptic
            curves, J. Reine Angew. Math. 549 (2002) 1-21.
          </i>
        </a>
      </div>
    ),
  },

  {
    textLocation: "text-left",
    text: (
      <div>
        <i>
          Marcus du Sautoy, FRS OBE Simonyi Professor for the Public
          Understanding of Science and Professor of Mathematics at the
          University of Oxford.
        </i>
      </div>
    ),
  },
];
