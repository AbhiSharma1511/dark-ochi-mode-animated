// import React,{useRef} from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const About = () => {

//   const ref= useRef(null);
//   useScroll({
//     target:"about",
//     offset:["0 1", "1.33 1"]
//   })

//   return (
//     <motion.div id="about"
//       className="py-16 bg-[#CDEA68] rounded-t-3xl overflow-auto"
//     >
//       {/* div 1 */}
//       <div className="md:px-12 mx-5 w-auto min-w-min">
//         <h1 className="lg:text-[46px] text-[5vh] sm:tracking-tight tracking-tighter leading-none text-black lg:mr-48">
//           Ochi is a strategic partner for fast-growing tech businesses that need
//           to <a className="underline">raise funds</a> , sell products, explain
//           complex ideas, and hire great people.
//         </h1>
//       </div>
//       {/* div 2 */}
//       <div className="mt-10 text-black flex md:flex-row flex-col justify-between md:px-20 px-5 md:gap-0 gap-10 border-y-[1px] py-5 pb-20 border-zinc-500">
//         <h1 className="">What you can expect:</h1>
//         <div className="flex flex-col gap-8 md:text-md text-base lg:ml-[20vw]">
//           <h2 className="md:w-[24vw] w-auto">
//             We create tailored presentations to help you persuade your
//             colleagues, clients, or investors. Whether it's live or digital,
//             delivered for one or a hundred people.
//           </h2>
//           <h2 className="md:w-[24vw] w-auto">
//             We believe the mix of strategy and design (with a bit of coffee) is
//             what makes your message clear, convincing, and captivating.
//           </h2>
//         </div>
//         <div className="lg:mr-[5vh]">
//           <h2>S:</h2>
//           <h2 className="text-[#CDEA68]">jhedf</h2>
//           <h2 className="underline">Instagram</h2>
//           <h2 className="underline">Behance</h2>
//           <h2 className="underline">Facebook</h2>
//           <h2 className="underline">Linkdin</h2>
//         </div>
//       </div>
//       {/* div 3 */}
//       <div className="flex md:flex-row flex-col gap-5 justify-between mt-8 md:px-16 mx-5">
//         <div className="flex flex-col gap-8 leading-none">
//           <h2 className="md:text-[4vw] text-[5vh] text-black font-[450]">
//             Our approach:
//           </h2>
//           <button className="py-5 bg-black rounded-3xl lg:w-[14vw] w-[25vh] flex gap-3 items-center justify-center">
//             READ MORE
//             <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
//           </button>
//         </div>
//         <div className="md:w-[44vw] rounded-lg">
//           <img
//             className="rounded-lg"
//             src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;

import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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
      className="py-16 bg-[#CDEA68] rounded-t-3xl overflow-hidden"
    >
      {/* div 1 */}
      <div className="md:px-12 mx-5 w-auto min-w-min">
        <h1 className="lg:text-[46px] text-[5vh] sm:tracking-tight tracking-tighter leading-none text-black lg:mr-48">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to <a className="underline">raise funds</a> , sell products, explain
          complex ideas, and hire great people.
        </h1>
      </div>
      {/* div 2 */}
      <div className="mt-10 text-black flex md:flex-row flex-col justify-between md:px-20 px-5 md:gap-0 gap-10 border-y-[1px] py-5 pb-20 border-zinc-500">
        <h1 className="">What you can expect:</h1>
        <div className="flex flex-col gap-8 md:text-md text-base lg:ml-[20vw]">
          <h2 className="md:w-[24vw] w-auto">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </h2>
          <h2 className="md:w-[24vw] w-auto">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h2>
        </div>
        <div className="lg:mr-[5vh]">
          <h2>S:</h2>
          <h2 className="text-[#CDEA68]">jhedf</h2>
          <h2 className="underline">Instagram</h2>
          <h2 className="underline">Behance</h2>
          <h2 className="underline">Facebook</h2>
          <h2 className="underline">Linkdin</h2>
        </div>
      </div>
      {/* div 3 */}
      <div className="flex md:flex-row flex-col gap-5 justify-between mt-8 md:px-16 mx-5">
        <div className="flex flex-col gap-8 leading-none">
          <h2 className="md:text-[4vw] text-[5vh] text-black font-[450]">
            Our approach:
          </h2>
          <button className="py-5 bg-black rounded-3xl lg:w-[14vw] w-[25vh] flex gap-3 items-center justify-center">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="md:w-[44vw] rounded-lg">
          <img
            className="rounded-lg"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
