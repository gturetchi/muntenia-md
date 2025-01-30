import { useEffect, useState, useRef } from "react";
import type { MetaFunction } from "@remix-run/node";

import { motion, useScroll, useTransform } from "framer-motion";

import Header from "~/components/header";
import About from "~/components/about";
import Services from "~/components/services";
import Navbar from "~/components/navbar";

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
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const aboutY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <motion.div className="">
        <Navbar />
      </motion.div>

      <motion.div style={{ y: headerY }}>
        <Header />
      </motion.div>

      <motion.div style={{ y: aboutY }}>
        <About />
      </motion.div>

      <motion.div>
        <Services />
      </motion.div>
    </>
  );
}
