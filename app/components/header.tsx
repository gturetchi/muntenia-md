import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHeight = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="w-screen h-screen flex align-middle justify-center bg-orange-800">
        <AnimatePresence>
          <motion.div
            onClick={toggleHeight}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              height: isExpanded ? "200px" : "80px",
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0 }}
            className="w-20 bg-red-50 cursor-pointer"
          />
        </AnimatePresence>
      </div>
    </>
  );
}
