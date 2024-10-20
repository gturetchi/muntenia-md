import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(false); // Visibility state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white space-y-0 snap-y">
      <div className="h-screen w-screen flex flex-col items-center justify-center pl-5 pr-5 bg-tertiary snap-center">
        <motion.img
          src="gif/animated-logo.gif"
          alt="Muntenia Logo"
          className="w-[75vw] justify-self-end"
          initial={{ scale: 1 }}
          animate={{ scale: 0.6, y: [0, -200, 0] }}
          transition={{
            type: "spring",
            stiffness: 80,
            duration: 0.8,
            times: [0, 0.5, 1],
          }}
          layout
        />
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.h1
              className="text-xxxl font-extrabold text-primary m-0 p-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
            >
              Muntenia<sup className="text-lg align-super">©</sup>
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <div className="h-screen bg-secondary w-screen snap-center">
        <p className="text-tertiary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
