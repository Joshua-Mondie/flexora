/** @format */
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// import bgimg from "assets/connectwalletbgImg.png";

import cryptoWallet from "/assets/cryptoWallet.png";
// import Image from "next/image";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect after 2.5 seconds
    const timer = setTimeout(() => {
      router.push("/formstepper"); // 🔁 Change this to your actual destination route
    }, 2500);

    // Clear timeout if component unmounts early
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <div
        className="border h-45 border-white px-7 py-6 bg-cover bg-center"
        style={{
          backgroundImage:"assets/connectwalletbgImg.png",
        }}
      >
        <h1 className="w-46 font-inter text-xl font-medium text-[#FBFBFB] mt-2 pr-2">
          Connect Wallet
        </h1>
        <p className="font-inter mt-2 font-normal text-xs w-37 text-white">
          Enjoy a whole new and personalised experience with Flexora!
        </p>
      </div>

      <div className="m-5 flex flex-col items-center">
        <img
          src={cryptoWallet.src}
          alt="cryptoWallet"
          width={150}
          height={150}
        />
        <h2 className="font-inter font-medium text-xl text-center text-[#FD6202] mt-4">
          Wallet connected Successfully
        </h2>
      </div>
    </div>
  );
};

export default Page;
