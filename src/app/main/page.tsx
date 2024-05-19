"use client";

import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Faq from "../components/Faq";
import { useSearchParams } from "next/navigation";
import Footer from "../components/Footer";
import Credits from "../components/Credits";

function MainPage() {
  const [allAboard, setAllAboard] = useState(false);
  const params = useSearchParams();
  const continued = params.get("continue");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAllAboard(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!continued && !clicked) {
    return (
      <Credits
        onClick={() => {
          setClicked(true);
          const audio = new Audio("/bg.m4a");
          audio.loop = true;
          audio.volume = 0.05;

          audio.play().catch((error) => {
            console.error("audio bleh", error);
          });

          const narration = new Audio("/audio/All Aboard.mp3");
          narration.volume = 0.1;

          setTimeout(() => {
            narration.play().catch((error) => {
              console.error("audio wehh", error);
            });
          }, 2000);
        }}
      />
    );
  }

  return (
    <>
      <img src="/flag.svg" className="absolute" />
      <img src="/train.png" className="w-full h-screen" draggable="false" />

      <div key="page-4">
        {allAboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/Boreal.svg"
              draggable="false"
              className="absolute left-1/2 top-[20rem] transform -translate-x-1/2 -translate-y-1/2"
            />

            <div className="font-Neela text-[42px] text-[#76728B] text-center absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full stroke">
              HACK CLUB’S CROSS-COUNTRY HACKATHON <br />
              JULY 21-28 • VANCOUVER - MONTREAL
            </div>
          </motion.div>
        )}
      </div>
      <div className="w-full py-20">
        <img src="/poster2.svg" className="block mx-auto max-w-[80%]" />
      </div>
      <div className="bg-[#C3C6A1] w-full h-screen pt-20 mt-10">
        <div className="font-Neela text-[#6D5C55] text-[80px] bg-[#C3C6A1] text-center">
          Register your interest
        </div>
        <a href="https://forms.hackclub.com/t/dXZwSPpG1Sus">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/ticket.png"
            alt="ticket"
            draggable="false"
            className="mx-auto mt-20"
          />
        </a>
      </div>
      <div key="page-3" className="pt-10 flex items-center justify-between min-h-screen flex-col">
        <div className="sm:flex space-y-10 gap-12 mb-10 max-w-[80%]">
          <div className="mt-10">
            <div className="font-Neela sm:text-[55px] brown-stroke text-[#626543]">
              What will You do<br></br>with your time?
            </div>
            <div className="text-[26px] font-bold">7 Nights • 8 Days • 50 Hackers</div>

            <div className="mt-8">
              <img src="/route2.svg" draggable="false" />
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <img src="/z1.svg" />
            </div>

            <div>
              <img src="/z2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#AAAD83] py-5 px-20">
        <div className="max-w-[80%] mx-auto">
          <div className="mt-10">
            <div className="font-Neela text-[55px] brown-stroke text-[#6D5C55]">
              Experiences that linger<br></br>Often Forever...
            </div>
            <div className="text-[26px]">
              A Glimpse of what your journey onboard The Boreal Express would look like
            </div>
          </div>
          <div className="flex justify-center items-stretch mt-8 gap-10">
            <div className="flex-1">
              <img src="/rock.svg" />
              <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-bold">
                The Canadian Rockies
              </div>
            </div>

            <div className="flex-1">
              <img src="/jasper.png" className="rounded-xl" />
              <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-bold">
                Jasper, Alberta
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <img src="/vancouver.png" className="rounded-xl flex-1" />
              <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-bold">
                Vancuover, British Columbia
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20 gap-10 pb-[5rem]">
            <div className="flex-1">
              <img src="/toronto.svg" />
              <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-bold">
                Toronto, Ontario
              </div>
            </div>

            <div className="flex-1">
              <img src="/winnipeg.svg" />
              <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-bold">
                Winnipeg, Manitoba
              </div>
            </div>

            <div className="flex-1">
              <img src="/rooms.png" className="rounded-xl" />
              <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-bold">
                Rooms on board the Sleeper Car
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
}

function SuspenseBoundary() {
  return (
    <Suspense fallback={<>placeholder</>}>
      <MainPage />
    </Suspense>
  );
}

export default SuspenseBoundary;
