"use client";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Credits from "./components/Credits";

export default function Home() {
  const [page, setPage] = useState(-1);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonVisible2, setButtonVisible2] = useState(false);
  const [buttonVisible3, setButtonVisible3] = useState(false);
  const [MainBox, setShowMainBox] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [firstAudioEnded, setFirstAudioEnded] = useState(false);
  const [secondAudioEnded, setSecondAudioEnded] = useState(false);
  const [bgAudio, setBgAudio] = useState<HTMLAudioElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    setPage(0);
  }, []);

  useEffect(() => {
    const handleTabPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        router.push("/main?continue=true");

        if(page < 1) {
            playBgAudio();
        }

        const newAudio = new Audio("/audio/All Aboard.mp3");
        newAudio.volume = 0.1;

        newAudio.play().catch((error) => {
          console.error("audio wehh", error);
        });
      }
    };

    window.addEventListener('keydown', handleTabPress);

    return () => {
      window.removeEventListener('keydown', handleTabPress);
    };
  }, [bgAudio]);


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
          if (window.location.pathname.startsWith("/main")) return
          mainAudio.play().catch((error) => {
            console.error("audio crying", error);
          });
        }, 2500);
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
        if (window.location.pathname.startsWith("/main")) return
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
          if (window.location.pathname.startsWith("/main")) return
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
        if (window.location.pathname.startsWith("/main")) return
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

  return (
    <>
    <HydrationProvider>
      <Client>
      <main>
        <AnimatePresence>{page === 0 && <Credits onClick={handleEnterClick} />}</AnimatePresence>

        <AnimatePresence>
          {page === 1 && (
            <motion.div
              key="page-1"
              className="relative p-10 flex flex-col gap-4 h-screen items-center justify-center"
            >
              {MainBox && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="lg:absolute static caption top-24 right-24"
                >
                  As the dawn of the full moon rises, our journey will begin...
                </motion.div>
              )}
              <motion.div className="flex flex-col gap-2 items-center">
                <img src="/hero.webp" alt="Hero" className="max-w-[100%] lg:w-[75%] m-0" />
                {buttonVisible && (
                  <motion.button
                    onClick={() => setPage(2)}
                    className=" bg-[#76728B] py-2 px-10 text-[#F1EDDD] text-xl lg:text-3xl border-[3px] border-[#6D5C55] mx-auto"
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
                <img src="/art-4.png" alt="Art 2" className="max-w-[90%] lg:max-w-full" />
                {textVisible && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="border-2 rounded-[5px] border-[#6D5C55] text-center sm:px-6 py-5 px-2 absolute sm:text-[16px] text-[10px] bg-[#F1EDDD] sm:bottom-[22rem] bottom-[26rem]"
                  >
                    In the beginning, we’ll scale a great cascade. How long will we<br></br> travel,
                    clinging to the edges of these great mountains?
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {buttonVisible2 && (
                  <motion.button
                    onClick={() => {
                      setPage(3);
                      router.prefetch("/main?continue=true");
                    }}
                    className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto absolute bottom-[15rem]"
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
              </AnimatePresence>
            </motion.div>
          )}
          {page === 3 && (
            <motion.div
              key="page-3"
              className="pt-10 flex items-center justify-between min-h-screen flex-col gap-4 relative"
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
                  className="caption lg:absolute top-24"
                >
                  As the sun peaks above the horizon, casting a golden glow over the valley; what
                  vibrant colors will you see as the light leaks across the plains?
                </motion.div>
              )}

              <div className="flex-1 flex flex-col items-center justify-center relative">
                <img src="/manga2.svg" alt="Art 3" className="sm:max-w-xl max-w-[350px]" />
                {secondAudioEnded && (
                  <div className="caption lg:absolute bottom-16">
                    distant whistle echoed through the air, heralding the arrival of a <i>cross-country odyssey.</i>
                  </div>
                )}
              </div>
              <AnimatePresence>
                {buttonVisible3 && (
                  <motion.button
                    onClick={() => {
                      router.push("/main?continue=true");

                      const audio = new Audio("/audio/All Aboard.mp3");
                      audio.volume = 0.1;

                      setTimeout(() => {
                        audio.play().catch((error) => {
                          console.error("audio wehh", error);
                        });
                      }, 2000);
                    }}
                    className="bg-[#76728B] mt-5 py-2 px-10 text-[#F1EDDD] text-3xl border-[3px] border-[#6D5C55] block m-auto absolute bottom-[15rem]"
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
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>
      </main>
      </Client >
      </HydrationProvider>
    </>
  );
}
