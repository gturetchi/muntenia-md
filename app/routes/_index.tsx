import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

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
    <div className="flex flex-col items-center justify-center bg-white space-y-0">
      <motion.nav
        className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-between p-4"
        initial={{ y: -100 }} // Start off-screen (above the viewport)
        animate={{ y: 0 }} // Animate into view
        transition={{ duration: 0.5 }} // Smooth transition
      >
        <div className="font-bold">Muntenia</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>
      <div className="h-screen flex flex-col items-center justify-center pl-5 pr-5">
        <motion.img
          src="gif/animated-logo.gif"
          alt="Muntenia Logo"
          className="w-[75vw]"
          initial={{ scale: 1 }}
          animate={{ scale: 0.8 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        {isVisible && (
          <motion.h1
            className="text-xxxl font-bold text-primary m-0 p-0"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
          >
            Muntenia
          </motion.h1>
        )}
      </div>
      <div className="h-screen bg-secondary w-screen">
        <p className="text-tertiary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
