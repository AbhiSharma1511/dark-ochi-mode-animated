import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import EyePlay from "./components/EyePlay.jsx";
import Feature from "./components/Feature.jsx";
import Review from "./components/Review.jsx";
import ReadyProject from "./components/ReadyProject.jsx";
import Footer from "./components/Footer.jsx";
import Hello from "./components/Hello.jsx";

const App = () => {
  const [showHello, setShowHello] = useState(true);

  const handleDismiss = () => {
    setShowHello(false);
  };

  return (
    <div className="w-full text-white bg-black overflow-hidden">
      {showHello ? (
        <Hello onDismiss={handleDismiss} />
      ) : (
        <>
          <Navbar />
          <Home />
          <Marquee />
          <About />
          <EyePlay />
          <Feature />
          <Review />
          <ReadyProject />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
// import React, { useRef } from "react";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import Page from "./test/Page";
// import Page2 from "./test/Page2";
// import Page3 from "./test/Page3";
// import Page4 from "./test/Page4";

// const App = () => {
//   const ref = useRef(null);

//   const options = {
//     smooth: true,
//     lerp: 0.1,
//     multiplier: 1,
//   };

//   return (
//     <LocomotiveScrollProvider options={options} watch={[]} containerRef={ref}>
//       <div
//         ref={ref}
//         data-scroll-container
//         className="w-full text-white bg-black px-5 py-10 flex flex-col gap-10"
//       >
//         <Page />
//         <Page2 />
//         <Page3 />
//         <Page4 />
//       </div>
//     </LocomotiveScrollProvider>
//   );
// };

// export default App;
