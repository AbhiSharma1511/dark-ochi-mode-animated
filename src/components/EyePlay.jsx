import React, { useEffect, useState } from "react";

const EyePlay = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // console.log(e);
      let mousex = e.clientX;
      let mousey = e.clientY;

      let deltax = mousex - window.innerWidth / 2;
      let deltay = mousey - window.innerHeight / 2;

      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full md:h-screen h-[60vh] overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        {/* <div className="relative w-[99%] h-[99%] bg-blue-400 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-center bg-cover"> */}
        <div className="relative w-[99%] md:h-[99%] sm:h-[80%] h-[50%]">
          <img
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[80%] h-[99%] bg-black "
            src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] grid grid-cols-7 w-max">
            <div className="relative bg-zinc-100 w-[15vw] h-[15vw]  rounded-full flex justify-center items-center col-span-3">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10 sm:text-base text-[50%]">
                Play
              </h2>
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
                className=" w-[75%] h-[69%] flex items-center justify-start"
              >
                <div className=" relative w-[80%] h-[88%] rounded-full bg-black flex justify-center items-center">
                  <div
                    // style={{
                    //   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    // }}
                    className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
                  >
                    <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="relative bg-zinc-100 w-[15vw] h-[15vw]  rounded-full flex justify-center items-center col-span-3">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10 sm:text-base text-[50%]">
                Play
              </h2>
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
                className=" w-[75%] h-[69%] flex items-center justify-start"
              >
                <div className=" relative w-[80%] h-[88%] rounded-full bg-black flex justify-center items-center">
                  <div
                    // style={{
                    //   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    // }}
                    className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
                  >
                    <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyePlay;
