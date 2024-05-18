import React, { useRef, useEffect } from "react";
import { color, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReadyProject = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
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
      color: "#7FB3D5",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  // bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkswHuunApB18DyFPrFNPEYc809sHs5Am5gw&s')]/

  return (
    <div className="w-full h-screen mt-20 overflow-hidden  ">
      <div className="flex flex-col justify-evenly h-screen">
        <motion.div
          ref={ref}
          animate={controls}
          variants={variants}
          className="relative flex flex-col items-center md:pt-20 md:text-[8vw] text-[8vh] leading-none font-bold tracking-tighter text-center "
        >
          {/* <img
            className="absolute w-1/2 h-full left-1/2 -translate-x-[50%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkswHuunApB18DyFPrFNPEYc809sHs5Am5gw&s"
          /> */}
          <div className="z-10 relative">
            <div>READY</div>
            <div>TO START</div>
            <div>THE PROJECT?</div>
          </div>
        </motion.div>
        <div className="flex flex-col items-center gap-5">
          <motion.button
            whileHover={{ fontWeight: 600, scale: 1.2 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="flex items-center justify-between w-[35vh] uppercase border-2 border-zinc-200 py-3 px-5 rounded-full overflow-hidden z-10"
          >
            start the project{" "}
            <div className="bg-zinc-200 w-2 h-2 rounded-full"></div>
          </motion.button>
          <h2>OR</h2>
          <motion.button
            whileHover={{ fontWeight: 600, scale: 1.2 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="flex items-center justify-between w-[35vh] uppercase border-2 border-zinc-200 py-3 px-5 rounded-full overflow-hidden z-10"
          >
            Hello@ochi.design{" "}
            <div className="bg-zinc-200 w-2 h-2 rounded-full"></div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ReadyProject;
