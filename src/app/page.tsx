"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWalletconnect } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { RiMailFill } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setScreenIndex(1), 3000); // 3s for splash
    return () => clearTimeout(timer);
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {screenIndex === 0 ? (
        <motion.div
          key="splash"
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center w-full h-screen bg-white flex-col"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="/assets/logo.png"
              alt="Lexora Logo"
              className="w-40 h-auto md:w-48"
            />
            <h1 className="text-2xl md:text-3xl text-gray-800 font-medium tracking-wide">
              Fitness made easy<span className="text-primary">...</span>
            </h1>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="main"
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full h-screen text-white relative"
        >
          {/* Background with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `linear-gradient(173.45deg, rgba(15, 14, 14, 0.75) 50%, rgba(242, 74, 13, 0.7) 95%), url('/images/backgroundImgA.jpg')`,
            }}
          ></div>

          {/* Content container */}
          <div className="relative z-10 flex flex-col h-full w-full max-w-md mx-auto px-6 md:px-0 justify-between py-8 md:py-12">
            {/* Header */}
            <div className="flex flex-col items-center mt-4 md:mt-8">
              <div className="flex items-center text-center">
                <img
                  src="/assets/logoBrem.png"
                  alt="Lexora Logo"
                  className="h-24 md:h-28 w-auto block mb-2"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-[#E86514] font-inknut">
                  LEXORA
                </h1>
              </div>

              <p className="mt-2 text-gray-200 text-sm md:text-base text-center max-w-xs font-inter">
                Let's unlock your full potential one step at a time
              </p>
            </div>

            {/* Main content - Login/Signup options */}
            <div className="flex flex-col items-center gap-6 mt-8 md:mt-0">
              <div className="w-full max-w-xs">
                <button className="bg-primary hover:bg-primary/90 transition-all p-3.5 rounded-lg text-white text-sm md:text-base font-inter w-full flex items-center justify-center gap-2">
                  <SiWalletconnect className="text-white text-lg" />
                  Connect Wallet to Sign In
                </button>
                <div className="flex gap-1 justify-end mt-1.5">
                  <span className="font-inter font-normal text-xs text-gray-300">
                    not connected?
                  </span>
                  <span className="font-inter font-normal text-xs text-primary hover:underline cursor-pointer">
                    sign up now!
                  </span>
                </div>
              </div>

              <div className="w-full max-w-xs space-y-3">
                <button className="bg-white hover:bg-gray-100 transition-all p-3.5 rounded-lg w-full flex justify-center gap-3 items-center shadow-sm">
                  <SiWalletconnect className="text-[#3B99FC] text-lg" />
                  <span className="text-neutral-800 text-sm md:text-base font-inter">
                    Sign up with Connect Wallet
                  </span>
                </button>

                <button className="bg-transparent border border-white/50 hover:border-white transition-all p-3.5 rounded-lg w-full flex justify-center gap-3 items-center">
                  <FcGoogle className="text-lg" />
                  <span className="text-white text-sm md:text-base font-inter">
                    Sign up with Google
                  </span>
                </button>

                <Link
                  href="/emailSignup"
                  className="bg-transparent border border-white/50 hover:border-white transition-all p-3.5 rounded-lg w-full flex justify-center gap-3 items-center"
                >
                  <RiMailFill className="text-[#F24822] text-lg" />
                  <span className="text-white text-sm md:text-base font-inter">
                    Sign up with Email
                  </span>
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pb-4 md:pb-8 text-center">
              <p className="font-inter font-normal text-xs text-gray-200 max-w-xs mx-auto">
                By continuing you agree to our updated{" "}
                <span className="underline text-[#EFFF10] cursor-pointer hover:text-[#EFFF10]/80">
                  terms & conditions
                </span>{" "}
                and{" "}
                <span className="underline text-[#EFFF10] cursor-pointer hover:text-[#EFFF10]/80">
                  privacy policy
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
