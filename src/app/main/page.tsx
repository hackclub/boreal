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
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  if (!continued && !clicked) {
    return (
      <>
        <img src="/flag.svg" className="absolute left-10" />
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
      </>
    );
  }

  return (
    <>
      <div className="grain" />
      <div className="flex items-center justify-center h-screen sm:hidden">
        <div className="text-center py-5 border-2 border-black pl-20 pr-20">
          Rotate your device<br></br>to landscape
        </div>
      </div>
      <main className="hidden sm:block">
        <div>
          <img src="/train.png" className="max-h-[85vh] my-5 mx-auto block" draggable="false" />
          {allAboard && (
            <motion.div
              className="lg:-translate-y-16 md:-translate-y-14 sm:-translate-y-12 -translate-y-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#626543] stroke lg:text-[40px] font-Neela text-center md:text-3xl sm:text-xl mb-2">
                THE BOREAL EXPRESS
              </h1>
              <p className="text-[#626543] stroke lg:text-3xl font-Neela text-center md:text-xl sm:text-lg mb-1">
                HACK CLUB’S CROSS-COUNTRY HACKATHON
              </p>
              <p className="text-[#626543] stroke lg:text-2xl font-Neela text-center md:text-lg sm:text-base">
                JULY 21-28 • VANCOUVER - MONTREAL
              </p>
            </motion.div>
          )}
        </div>

        <div className={`flex items-center justify-center ${allAboard ? "mt-20" : "mt-48"}`}>
          <div className="p-20 w-[60%] bg-[#D9D9D9] rounded-lg border-[3px] border-[#6D5C55] border-dashed">
            <h1 className="text-[#626543] stroke lg:text-3xl font-Neela md:text-3xl sm:text-xl mb-2">
              DEAR HACKER,
            </h1>
            <br />
            <p>Every summer Hack Clubbers do something special.</p>
            <br />
            <p className="text-justify">
              We travel across the world to attend hackathons, run virtual events worldwide, and
              spend hours building projects we care about. All for one goal: to build the world we
              want to live in.
            </p>
            <br />
            <p className="font-bold text-justify">
              This year, join us on our next great voyage: A Transcontinental Hackathon across
              Canada.
            </p>
            <br />
            <p className="text-justify">
              This is not a regular hackathon. It's not summer camp. This is a journey for you to
              discover new ways of living life. Discover what the world has to offer.
            </p>
            <br />
            <p className="text-justify">
              On July 21, the night of the full moon, we start our 8-day expedition in Vancouver.
              We'll go through the Canadian Rockies, passing through Jasper, Winnipeg, and Toronto,
              concluding in Montreal.
            </p>
            <br />
            <p>
              Together, we will travel through one of the most pristine remaining lands on earth,
              only accessible by rail. Onboard the train, you would build projects alongside some of
              the most kickass engineers, artists, hackers, and scientists working on highly
              technical solutions to save the environment.
            </p>
            <br />
            <p className="text-justify">
              This is your invitation to build the things you care about and see your actions change
              the world around you. Join us aboard The Boreal Express.
            </p>
          </div>
        </div>

        <div className="bg-[#C3C6A1] w-full py-20 mt-10">
          <div className="font-Neela text-[#6D5C55] text-[80px] bg-[#C3C6A1] text-center stroke">
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
                What will you do
                <br />
                with your time?
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
                Experiences that linger<br></br>often forever...
              </div>
              <div className="text-[26px] text-[#6D5C55] font-medium">
                A Glimpse of what your journey onboard The Boreal Express would look like
              </div>
            </div>
            <div className="flex justify-center items-stretch mt-8 gap-10">
              <div className="flex-1 flex flex-col">
                <img src="/rock.svg" className="rounded-xl flex-1" />
                <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-medium">
                  The Canadian Rockies
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <img src="/jasper.png" className="rounded-xl flex-1" />
                <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-medium">
                  Jasper, Alberta
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <img src="/vancouver.png" className="rounded-xl flex-1" />
                <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-medium">
                  Vancouver, BC
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-20 gap-10 pb-[5rem]">
              <div className="flex-1 flex flex-col">
                <img src="/toronto.svg" className="rounded-xl flex-1" />
                <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-medium">
                  Toronto, Ontario
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <img src="/winnipeg.webp" className="rounded-xl flex-1" />
                <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-medium">
                  Winnipeg, Manitoba
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <img src="/rooms.png" className="rounded-xl flex-1" />
                <div className="text-center pt-5 text-[20px] text-[#6D5C55] font-medium">
                  Sleeper Car
                </div>
              </div>
            </div>
          </div>
        </div>

        <Faq />
        <Footer />
      </main>
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
