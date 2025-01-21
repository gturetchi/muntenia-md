import { useEffect, useState, useRef } from "react";
import type { MetaFunction } from "@remix-run/node";

import { motion, useScroll, useTransform } from "framer-motion";

import Header from "~/components/header";

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
      <Header />
    </>
  );
}
