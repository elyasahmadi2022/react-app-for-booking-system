import React from "react";
import { motion } from "framer-motion";
const DURATION = 0.25;
const STAGGER = 0.025;
function StaggerText({ children }) {
  return (
    <motion.h2
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl  cursor-pointer text-white"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className=" inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className=" absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className=" inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h2>
  );
}

export default StaggerText;
