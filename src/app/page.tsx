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
            className="p-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 0.7, ease: "backInOut" }}
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
        {page === 1 && (
          <motion.div
            key="page-1"
            className="pt-10 flex items-center justify-between min-h-screen flex-col"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, transition: { ease: "backIn", duration: 0.7 } }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.7 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <img src="/art-2.png" alt="Art 2" className="max-w-xl" />
            </div>
            <div className="w-px h-48 bg-[#6D5C55] mx-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
