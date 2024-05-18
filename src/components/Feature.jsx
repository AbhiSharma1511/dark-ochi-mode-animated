import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg

const Feature = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
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
      className="w-[100vw] md:py-10 h-full overflow-hidden"
    >
      <div className="py-5 md:px-16 mx-5">
        <h2 className="md:text-[4vw] text-[4.8vh] tracking-tight">
          Featured Projects
        </h2>
      </div>
      <div className="w-full h-[0.2vh] bg-zinc-400"></div>
      <div className="w-full flex justify-center items-center md:flex-row flex-col gap-10 overflow-hidden md:px-16 px-2 mt-10">
        <div className="md:w-1/2 w-[95%] rounded-lg overflow-hidden">
          <h2 className="flex items-center mb-2 gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>FYDE
          </h2>
          <motion.img
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="w-full h-full rounded-lg border-white border-2"
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
          ></motion.img>
          <div className="flex gap-2 mb-5 pt-5">
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              AUDIT
            </h2>
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              COPYWRITING
            </h2>
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              SALES DECK
            </h2>
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              SLIDES DESIGN
            </h2>
          </div>
        </div>
        <div className="md:w-1/2 w-[95%] rounded-lg overflow-hidden">
          <h2 className="flex items-center mb-2 gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>VISE
          </h2>
          <motion.img
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="w-full h-full rounded-lg border-white border-2"
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
          ></motion.img>
          <div className="flex gap-2 mb-5 pt-5">
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              AGENCY
            </h2>
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              COMPANY PRESENTATION
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center md:flex-row flex-col gap-10 overflow-hidden md:px-16 px-2 mt-10">
        <div className="md:w-1/2 w-[95%] rounded-lg overflow-hidden">
          <h2 className="flex items-center mb-2 gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>TRAWA
          </h2>
          <motion.img
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="w-full h-full rounded-lg border-white border-2"
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
          ></motion.img>
          <div className="flex gap-2 mb-5 pt-5">
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              BRAND IDENTITY
            </h2>
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              DESIGN RESEARCH
            </h2>
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              INVESTER DECK
            </h2>
          </div>
        </div>
        <div className="md:w-1/2 w-[95%] rounded-lg overflow-hidden">
          <h2 className="flex items-center mb-2 gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>PREMIUM BLEND
          </h2>
          <motion.img
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="w-full h-full rounded-lg border-white border-2"
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
          ></motion.img>
          <div className="flex gap-2 mb-5 pt-5">
            <h2 className="px-3 py-1 border-2 border-zinc-300 rounded-2xl">
              BRAND TEMPLATE
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2 mt-10">
        <h2 className="text-md border-2 uppercase px-5 py-2 rounded-full flex gap-4 items-center">
          view all case studies
          <div className="rounded-full bg-slate-200 w-2 h-2"></div>
        </h2>
      </div>
    </motion.div>
  );
};

export default Feature;
