import { useEffect, useState, useRef } from "react";
import type { MetaFunction } from "@remix-run/node";

import { motion, useScroll, useTransform } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Muntenia" },
    {
      name: "description",
      content:
        "Cele mai prietenoase cursuri pentru maturi,copii și adolescenți le găsești la 🏔️Muntenia-Școală de Engleză.",
    },
  ];
};

export default function Index() {
  const svgRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const { scrollYProgress } = useScroll();

  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0]
  );

  useEffect(() => {
    const path = svgRef.current as SVGPathElement | null;
    if (path) {
      const length = path.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return (
    <>
      <motion.svg
        viewBox="0 0 979 3841"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        height="200vh"
      >
        <motion.path
          ref={svgRef}
          id="line-path"
          d="M615.5 0.5C615.5 0.5 735 2009 615.5 2185C496 2361 376.5 2350.5 380 2420.5C383.5 2490.5 425 2594.5 313.5 2584.5C202 2574.5 313.5 2631.5 313.5 2683C313.5 2734.5 418 2727.5 399 2784.5C380 2841.5 532.5 2794.5 583.5 2784.5C634.5 2774.5 896 2748.5 830 2690C764 2631.5 995.5 2474.5 910 2490.5C824.5 2506.5 807.5 2356 783 2396C758.5 2436 583.5 2440.5 634.5 2459C685.5 2477.5 539 2664.5 599 2666C659 2667.5 709 2951.5 643 2968.5C577 2985.5 698.5 3106.5 783 3081C867.5 3055.5 919.5 3199.5 937 3232.5C954.5 3265.5 1003 3311 937 3329.5C871 3348 916 3498 867.5 3489.5C819 3481 767.5 3668 653 3678C538.5 3688 604.5 3747.5 546 3765C487.5 3782.5 477.5 3829 477.5 3829C477.5 3829 219.5 3692 211 3622C202.5 3552 168 3489.5 73.9999 3482.5C-20.0001 3475.5 9.49991 3371 24.9999 3311C40.4999 3251 142.5 3209.5 90.9999 3174C39.4999 3138.5 222 3018.5 262 3125.5C302 3232.5 383.5 3174 383.5 3174L463.5 3248L493.5 3311L527.5 3248L589 3185.5L690.5 3174L867.5 3209.5"
          strokeWidth="15"
          stroke="red"
          strokeDasharray={pathLength}
          style={{
            strokeDashoffset,
          }}
        />
      </motion.svg>
      <p>Path Length: {pathLength}</p>
    </>
  );
}

//
// WEB PAGE DESIGN
// 1. Logo + Title
// 2. About Us
// 3. Services
// 4. Contact Us
// 5. Reviews
//
