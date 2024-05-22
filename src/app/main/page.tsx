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

    if (window.matchMedia("(max-width: 992px)").matches) {
      setAllAboard(true);
    }

    return () => clearTimeout(timeout);
  }, []);

  if (!continued && !clicked) {
    return (
      <>
        <img src="/flag.svg" className="absolute left-10 z-50" />
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
      <main>
        <div>
          <img src="/train.png" className="lg:w-4/5 my-5 mx-auto block" draggable="false" />
          {allAboard && (
            <motion.div
              className="lg:-translate-y-16 -translate-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#626543] stroke lg:text-[40px] font-Neela text-center md:text-3xl sm:text-xl mb-1 lg:mb-2">
                THE BOREAL EXPRESS
              </h1>
              <p className="text-[#626543] stroke lg:text-3xl font-Neela text-center md:text-xl sm:text-lg lg:mb-1">
                HACK CLUB’S CROSS-COUNTRY HACKATHON
              </p>
              <p className="text-[#626543] stroke lg:text-2xl font-Neela text-center md:text-lg sm:text-base">
                JULY 21-28 • VANCOUVER - MONTREAL
              </p>
            </motion.div>
          )}
        </div>

        <div className={`flex items-center justify-center ${allAboard ? "mt-10" : "mt-48"}`}>
          <div className="flex flex-col gap-4 p-8 lg:p-20 mx-8 lg:mx-14 lg:w-[60%] bg-[#D9D9D9] rounded-lg border-[3px] border-[#6D5C55] border-dashed text-lg">
            <h1 className="text-[#626543] stroke lg:text-3xl font-Neela md:text-3xl sm:text-xl mb-2">
              DEAR HACKER,
            </h1>
            <p>Every summer Hack Clubbers do something special.</p>
            <p>
              We travel across the world to attend hackathons, run virtual events worldwide, and
              spend hours building projects we care about. All for one goal: to build the world we
              want to live in.
            </p>
            <p>
              This year, join us on our next great voyage: A Transcontinental Hackathon across
              Canada.
            </p>
            <p>
              This is not a regular hackathon. It's not summer camp. This is a journey for you to
              discover new ways of living life. Discover what the world has to offer.
            </p>
            <p>
              On July 21, the night of the full moon, we start our 8-day expedition in Vancouver.
              We'll go through the Canadian Rockies, passing through Jasper, Winnipeg, and Toronto,
              concluding in Montreal.
            </p>
            <p>
              Together, we will travel through one of the most pristine remaining lands on earth,
              only accessible by rail. Onboard the train, you will build projects alongside some of
              the most kickass engineers, artists, hackers, and scientists working on highly
              technical solutions to save the environment.
            </p>
            <p>
              This is your invitation to build the things you care about and see your actions change
              the world around you. Join us aboard The Boreal Express.
            </p>
          </div>
        </div>

        <div className="bg-[#C3C6A1] w-full py-20 mt-10">
          <div className="font-Neela text-[#6D5C55] text-5xl leading-tight lg:leading-normal lg:text-[80px] bg-[#C3C6A1] text-center stroke">
            Register your interest
          </div>
          <a href="https://forms.hackclub.com/t/dXZwSPpG1Sus">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/ticket.png"
              alt="ticket"
              draggable="false"
              className="mx-auto mt-14 lg:mt-20 w-3/4 lg:w-3/5"
            />
          </a>
        </div>
        <div key="page-3" className="py-20 flex items-center justify-between flex-col">
          <div className="flex flex-col md:flex-row space-y-10 gap-12 max-w-[80%]">
            <div className="flex flex-col gap-4">
              <h1 className="font-Neela text-4xl lg:text-[55px] brown-stroke text-[#626543] leading-[3.5rem]">
                What will you do
                <br />
                with your time?
              </h1>
              <div className="text-lg lg:text-[26px] font-bold">7 Nights • 8 Days • 50 Hackers</div>
              <div className="mt-8">
                <img src="/route2.svg" draggable="false" />
              </div>
            </div>
            <div className="space-y-10">
                <img src="/z1.svg" />
                <img src="/z2.svg" />
            </div>
          </div>
        </div>
        <div className="bg-[#AAAD83] p-5 lg:px-20 flex flex-col gap-2">
          <div className="w-[80%] mx-auto">
            <div className="mt-10 font-Neela text-4xl lg:text-[55px] stroke text-[#6D5C55] leading-[3.5rem]">
              Experiences that linger,<br></br>often forever...
            </div>
            <div className="text-2xl lg:text-[26px] text-[#6D5C55] font-medium">
              A glimpse of what your journey onboard The Boreal Express will look like
            </div>
            <div className="flex flex-col md:grid grid-cols-3 mt-8 gap-10 justify-between items-center">
              <div className="flex flex-col items-center gap-5">
                <img src="/rock.svg" className="rounded-xl w-80 h-56 object-cover" />
                <div className="text-lg text-[#6D5C55] font-medium">The Canadian Rockies</div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <img src="/jasper.png" className="rounded-xl w-80 h-56 object-cover" />
                <div className="text-lg text-[#6D5C55] font-medium">Jasper, Alberta</div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <img src="/vancouver.png" className="rounded-xl w-80 h-56 object-cover" />
                <div className="text-lg text-[#6D5C55] font-medium">
                  Vancouver, British Columbia
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <img src="/toronto.svg" className="rounded-xl w-80 h-56 object-cover" />
                <div className="text-lg text-[#6D5C55] font-medium">Toronto, Ontario</div>
              </div>

              <div className="flex flex-col items-center gap-5">
                <img src="/winnipeg.webp" className="rounded-xl w-80 h-56 object-cover" />
                <div className="text-lg text-[#6D5C55] font-medium">Winnipeg, Manitoba</div>
              </div>

              <div className="flex flex-col items-center gap-5">
                <img src="/rooms.png" className="rounded-xl w-80 h-56 object-cover" />
                <div className="text-lg text-[#6D5C55] font-medium">Sleeper Car</div>
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
