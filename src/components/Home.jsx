import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
      className="overflow-hidden"
    >
      <div className="uppercase sm:text-[7vw] text-[6vh] font-bold mt-20 md:px-12 text-white tracking-tighter md:leading-[7vw] leading-[6vh] mx-5 flex-wrap">
        <h1>We Create</h1>
        <h1 className="flex items-center">
          <motion.img
            initial={{ width: 0 }}
            animate={{ width: "10vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="sm:h-[7vw] h-[7vh] mt-1 rounded-md"
            src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
          />
          Eye-opening
        </h1>
        <div className="flex items-center xs:w-full md:w-auto break-words">
          presentations
        </div>
      </div>
      <div className="border-t-2 border-zinc-800 mt-28"></div>
      <div className="flex md:flex-row flex-col justify-between md:items-center md:px-12 gap-10 mt-5 mb-16 font-pp-neue-montreal mx-5">
        <h3>For public and private companies</h3>
        <h3>From the first pitch of IPO</h3>
        <div className="flex items-center gap-2">
          <div className="border-2 border-zinc-400 px-4 py-1 rounded-full text-sm uppercase">
            Start the project
          </div>
          <div className="lg:flex hidden border-2 border-zinc-400 rounded-full p-1">
            <GoArrowUpRight className="text-2xl text-white " />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
