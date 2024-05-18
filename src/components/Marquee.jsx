import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Marquee = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="py-10 bg-[#004D43] rounded-t-3xl"
    >
      <div className="uppercase flex font-semibold sm:text-[18vw] text-[16vh] border-t-2 border-b-2 border-zinc-300 whitespace-nowrap leading-none py-2 overflow-hidden tracking-tighter">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }}
          className="px-10"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }}
          className="px-10"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className=""
        >
          We are ochi
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Marquee;
