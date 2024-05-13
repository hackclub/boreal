"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [page, setPage] = useState(-1);

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {page === 0 && (
          <motion.div
            key="page-0"
            className="p-10 cursor-pointer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 0.7, ease: "backInOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              transition: { duration: 0.125, ease: [0.42, 0, 0.58, 1] },
            }}
          >
            <div className="relative">
              <img src="/main-art.png" alt="Main Art" />
            </div>
            <motion.button
              onClick={() => setPage(1)}
              className="bg-[#76728B] mt-2 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
              style={{
                boxShadow: "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                WebkitTextStroke: "0.4px #320C0C",
              }}
            >
              BEGIN
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {page === 1 && (
          <motion.div
            key="page-1"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/art-4.png"
                alt="Art 2"
                className="sm:max-w-xl max-w-[350px]"
              />
              <div className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:px-6 py-5 px-2 absolute sm:text-[16px] text-[10px] bg-[#F1EDDD] sm:bottom-[22rem] bottom-[26rem]">
                In the beginning, whispers carried tales of a hidden valley
                untouched<br></br> by humanity, where emerald forest danced with
                mist and sapphire<br></br> lakes mirrored the sky
              </div>
            </div>

            <motion.button
              onClick={() => setPage(2)}
              className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
              style={{
                boxShadow: "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                WebkitTextStroke: "0.4px #320C0C",
              }}
            >
              NEXT
            </motion.button>
            <div className="w-px h-48 bg-[#6D5C55] mx-10 mt-20" />
          </motion.div>
        )}

        {page === 2 && (
          <motion.div
            key="page-2"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
          >
              <div className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:text-[16px] text-[10px] sm:px-2 sm:py-4  py-4 px-1 absolute bg-[#F1EDDD] sm:bottom-[44rem]  bottom-[40rem] sm:right-[20rem] right-[0.8rem]">
              The edge of the valley beheld a vista beyond words <br>
              </br>  — a world painted by a divine hand.
              </div>
            <div className="flex-1 flex items-center justify-center">
            
              <img
                src="/art-3.png"
                alt="Art 3"
                className="sm:max-w-xl max-w-[350px]"
              />
              <div className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:text-[16px] text-[10px] sm:px-2 sm:py-4  py-4 px-1 absolute bg-[#F1EDDD] sm:bottom-[23rem] bottom-[27rem]  ">
               As the sun peaked above the horizon, casting a golden glow over the <br>
               </br> valley, a distant whistle echoed through the air, heralding the arrival of a<br>
               </br> cross-country odyssey ..
              </div>
            </div>

            <motion.button
              onClick={() => setPage(3)}
              className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
              style={{
                boxShadow: "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                WebkitTextStroke: "0.4px #320C0C",
              }}
            >
              NEXT
            </motion.button>

            <div className="w-px h-48 bg-[#6D5C55] mx-10 mt-20" />
          </motion.div>
        )}

        {page === 3 && (
          <motion.div
            key="page-3"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/placeholder.png"
                alt="placeholder"
                className="sm:w-[1100px] w-[300px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
