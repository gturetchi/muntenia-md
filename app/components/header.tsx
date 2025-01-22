import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <div className="w-screen h-screen flex align-middle justify-center bg-orange-800">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="rounded-lg w-24 h-24 bg-red-600"
        ></motion.div>
      </div>
    </>
  );
}
