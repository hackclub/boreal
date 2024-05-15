"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faq from "./components/Faq";

export default function Home() {
  const [page, setPage] = useState(-1);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonVisible2, setButtonVisible2] = useState(false);
  const [buttonVisible3, setButtonVisible3] = useState(false);
  const [MainBox, setShowMainBox] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [firstAudioEnded, setFirstAudioEnded] = useState(false);
  const [secondAudioEnded, setSecondAudioEnded] = useState(false);
  const [bgAudio, setBgAudio] = useState<HTMLAudioElement | null>(null);
  const [allAboard, setAllAboard] = useState(false);

  useEffect(() => {
    setPage(0);
  }, []);

  const playBgAudio = () => {
    const audio = new Audio("/bg.m4a");
    audio.loop = true;
    audio.volume = 0.05;

    audio.play().catch((error) => {
      console.error("audio bleh", error);
    });

    setBgAudio(audio);
  };

  const handleEnterClick = () => {
    setPage(1);
    playBgAudio();
  };

  useEffect(() => {
    if (page === 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [page]);

  useEffect(() => {
    if (page === 1) {
      const mainAudio = new Audio("/audio/Full Moon Dawn.mp3");
      mainAudio.volume = 0.1;

      const playMainAudio = () => {
        setTimeout(() => {
          mainAudio.play().catch((error) => {
            console.error("audio crying", error);
          });
        }, 5000);
      };

      const handleMainUserInteraction = () => {
        playMainAudio();

        window.removeEventListener("click", handleMainUserInteraction);
        window.removeEventListener("keydown", handleMainUserInteraction);
      };

      window.addEventListener("click", handleMainUserInteraction);
      window.addEventListener("keydown", handleMainUserInteraction);

      mainAudio.addEventListener("play", () => {
        setShowMainBox(true);
      });

      mainAudio.addEventListener("ended", () => {
        setButtonVisible(true);
      });

      return () => {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        window.removeEventListener("click", handleMainUserInteraction);
        window.removeEventListener("keydown", handleMainUserInteraction);
      };
    }
  }, [page]);

  useEffect(() => {
    if (page === 2) {
      const audio = new Audio("/audio/Great Cascade.mp3");
      audio.volume = 0.1;

      setTimeout(() => {
        audio.play().catch((error) => {
          console.error("audio wehh", error);
        });
      }, 2000);

      setTimeout(() => {
        setTextVisible(true);
      }, 2000);

      audio.addEventListener("ended", () => {
        setButtonVisible2(true);
      });

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [page]);

  useEffect(() => {
    if (page === 3) {
      const firstAudio = new Audio("/audio/Sunrise.mp3");
      const secondAudio = new Audio("/audio/Distant whistle.mp3");

      firstAudio.volume = 0.1;
      secondAudio.volume = 0.1;

      const playFirstAudio = () => {
        setTimeout(() => {
          setFirstAudioEnded(true);
          firstAudio.play().catch((error) => {
            console.error("audio bleh:", error);
          });
        }, 2000);
      };

      setTimeout(() => {
        setFirstAudioEnded(true);
      }, 2000);
      const playSecondAudio = () => {
        setSecondAudioEnded(true);
        secondAudio.play().catch((error) => {
          console.error("audio bleh", error);
        });
      };

      playFirstAudio();

      firstAudio.addEventListener("ended", () => {
        playSecondAudio();
      });

      secondAudio.addEventListener("ended", () => {
        setButtonVisible3(true);
      });

      return () => {
        firstAudio.pause();
        firstAudio.currentTime = 0;
        secondAudio.pause();
        secondAudio.currentTime = 0;
      };
    }
  }, [page]);

  useEffect(() => {
    if (page === 4) {
      const audio = new Audio("/audio/All Aboard.mp3");
      audio.volume = 0.1;

      setTimeout(() => {
        audio.play().catch((error) => {
          console.error("audio wehh", error);
        });
      }, 2000);

      setTimeout(() => {
        setAllAboard(true);
      }, 2000);

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [page]);

  return (
    <main>
      <AnimatePresence>
        {page === 0 && (
          <div key="page-0" className="bg-[#76728B] h-screen">
            <div className="flex justify-center items-center h-screen">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center font-extrabold text-[40px] bg-[#f1eddd] rounded-full w-[700px] h-[700px] flex justify-center items-center cursor-pointer"
                onClick={handleEnterClick}
              >
                ENTER HERE
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {page === 1 && (
          <motion.div key="page-1" className="p-10">
            {MainBox && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="border-2 rounded-[5px] border-[#6D5C55] text-left sm:text-[16px] text-[10px] sm:px-10 sm:py-4  py-4 px-1 absolute z-10 bg-[#F1EDDD] sm:bottom-[20rem]  bottom-[40rem] sm:right-[10rem] right-[0.8rem]"
              >
                As the dawn of the full moon rises, our<br></br> journey will
                begin...
              </motion.div>
            )}
            <motion.div>
              <div className="relative sm:w-full sm:h-[90vh]">
                <img
                  src="/main-art.png"
                  alt="Main Art"
                  className="sm:absolute sm:top-[-3rem] sm:left-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative bottom-[10rem] m-auto text-center font-Neela text-[#626543] text-[55px]">
                WELCOME, VOYAGER
              </div>
            </motion.div>
            {buttonVisible && (
              <motion.button
                onClick={() => setPage(2)}
                className="relative bottom-[9rem] bg-[#76728B] mt-2 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto"
                style={{
                  boxShadow: "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                  WebkitTextStroke: "0.4px #320C0C",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.125, ease: [0.42, 0, 0.58, 1] },
                }}
              >
                NEXT
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {page === 2 && (
          <motion.div
            key="page-2"
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
              {textVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:px-6 py-5 px-2 absolute sm:text-[16px] text-[10px] bg-[#F1EDDD] sm:bottom-[22rem] bottom-[26rem]"
                >
                  In the beginning, we’ll scale a great cascade. How long will
                  we<br></br> travel, clinging to the edges of these great
                  mountains?
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {buttonVisible2 && (
                <motion.button
                  onClick={() => setPage(3)}
                  className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto absolute bottom-[15rem]"
                  style={{
                    boxShadow:
                      "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                    WebkitTextStroke: "0.4px #320C0C",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.125, ease: [0.42, 0, 0.58, 1] },
                  }}
                >
                  NEXT
                </motion.button>
              )}
            </AnimatePresence>
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
            {firstAudioEnded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:text-[16px] text-[10px] sm:px-5 sm:py-4  py-4 px-1 absolute bg-[#F1EDDD] sm:bottom-[44rem]  bottom-[40rem] sm:right-[20rem] right-[0.8rem]"
              >
                As the sun peaks above the horizon, casting a golden glow over
                the<br></br> valley. What vibrant colors will you see as the
                light leaks across the<br></br> plains.
              </motion.div>
            )}

            <div className="flex-1 flex items-center justify-center">
              <img
                src="/art-3.png"
                alt="Art 3"
                className="sm:max-w-xl max-w-[350px]"
              />
              {secondAudioEnded && (
                <div className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:text-[16px] text-[10px] sm:px-10 sm:py-4  py-4 px-1 absolute bg-[#F1EDDD] sm:bottom-[23rem] bottom-[27rem]  ">
                  distant whistle echoed through the air, heralding<br></br> the
                  arrival of a cross-country odyssey
                </div>
              )}
            </div>

            <AnimatePresence>
              {buttonVisible3 && (
                <motion.button
                  onClick={() => setPage(4)}
                  className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto absolute bottom-[15rem]"
                  style={{
                    boxShadow:
                      "#F1EDDD 0px 0px 0px 2px, #6D5C55 0px 0px 0px 4px",
                    WebkitTextStroke: "0.4px #320C0C",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.125, ease: [0.42, 0, 0.58, 1] },
                  }}
                >
                  NEXT
                </motion.button>
              )}
            </AnimatePresence>

            <div className="w-px h-48 bg-[#6D5C55] mx-10 mt-20" />
          </motion.div>
        )}

        {page === 4 && (
          <>
            <img src="/flag.svg" className="absolute" />
            <img
              src="/train.png"
              className="w-full h-screen"
              draggable="false"
            />

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

                  <div className="font-Neela text-[48px] text-[#76728B] text-center absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full stroke">
                    HACK CLUB’S CROSS-COUNTRY ODYSSEY <br />
                    JULY 21-28 • VANCOUVER - MONTREAL
                  </div>
                </motion.div>
              )}
            </div>
            <div
              key="page-3"
              className="pt-10 flex items-center justify-between min-h-screen flex-col"
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/poster2.svg"
                  alt="welcome"
                  className="sm:w-[1100px] w-[300px]"
                />
              </div>
              <div className="bg-[#C3C6A1] w-full h-screen pt-20 mt-10">
                <div className="font-Neela text-[#6D5C55] text-[80px] bg-[#C3C6A1] text-center">
                  Register your interest
                </div>
                <a href="https://forms.hackclub.com/t/dXZwSPpG1Sus">
                  <img
                    src="/ticket.svg"
                    alt="ticket"
                    draggable="false"
                    className="absolute left-1/2 top-[180rem] transform -translate-x-1/2 -translate-y-1/2"
                  />
                </a>
              </div>
              <div className="sm:flex space-y-10 gap-12 mb-10">
                <div className="mt-10">
                  <div className="font-Neela sm:text-[55px] brown-stroke text-[#76728B]">
                    What will You do<br></br>with Your time?
                  </div>
                  <div className="text-[26px]">
                    7 Nights • 8 Days • 50 Hackers
                  </div>

                  <div className="mt-8">
                    <img src="/route.svg" draggable="false" />
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
            <div className="bg-[#AAAD83] py-5">
              <div className="mt-10 px-20">
                <div className="font-Neela text-[55px] brown-stroke text-[#76728B]">
                  Experiences that linger<br></br>Often Forever...
                </div>
                <div className="text-[26px]">
                  A Glimpse of what your journey onboard The Boreal Express
                  would look like
                </div>
              </div>
              <div className="flex justify-center mt-8 gap-10">
                <div>
                  <img src="/rock.svg" />
                  <div className="text-center pt-5 text-[20px] text-[#6D5C55]">
                    The Canadian Rockies
                  </div>
                </div>

                <div>
                  <img src="/jasper.svg" />
                  <div className="text-center pt-5 text-[20px] text-[#6D5C55]">
                    Jasper, Alberta
                  </div>
                </div>

                <div>
                  <img src="/vancouver.svg" />
                  <div className="text-center pt-5 text-[20px] text-[#6D5C55]">
                    Vancuover, British Columbia
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-20 gap-10 pb-[5rem]">
                <div>
                  <img src="/toronto.svg" />
                  <div className="text-center pt-5 text-[20px] text-[#6D5C55]">
                    Toronto, Ontario
                  </div>
                </div>

                <div>
                  <img src="/winnipeg.svg" />
                  <div className="text-center pt-5 text-[20px] text-[#6D5C55]">
                    Winnipeg, Manitoba
                  </div>
                </div>

                <div>
                  <img src="/rooms.svg" />
                  <div className="text-center pt-5 text-[20px] text-[#6D5C55]">
                    Rooms on board the Sleeper Car
                  </div>
                </div>
              </div>
            </div>

            <Faq />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
