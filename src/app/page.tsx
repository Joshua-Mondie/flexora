/** @format */

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import logoB from "@/assets/logoBrem.png";
import Image from "next/image";
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
					transition={{ duration: 1 }}
					className="flex items-center justify-center h-screen bg-white flex-col"
				>
					<Image src={logo} alt="Logo" height={132} width={151} />
					<h1 className=" text-2xl">Fitness made easy...</h1>
				</motion.div>
			) : (
				<motion.div
					key="main"
					variants={fadeVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 1 }}
					className="flex flex-col items-center justify-center h-screen text-white border border-white px-7 bg-cover bg-center  "
					style={{
						backgroundImage: `linear-gradient(173.45deg, rgba(15, 14, 14, 0.6) 53.36%, rgba(242, 74, 13, 0.6) 93.1%), url('/images/backgroundImgA.jpg')`,
					}}
				>
					{/* <div className=" border border-white w-screen justify-center flex"> */}
					<span className=" font-bold  flex justify-center pl-8 items-center">
						<Image
							src={logoB}
							alt="Logo"
							height={132}
							// width={151}
							className=""
						/>{" "}
						<h1 className="text-4xl font-bold text-[#E86514] -translate-x-20 translate-y-5 font-inknut">
							LEXORA
						</h1>
					</span>
					<p className="mb-4 text-gray-300 text-sm text-center px-6  font-inter -translate-y-8">
						Let’s unlock your full potential one step at a time
					</p>
					{/* </div> */}
					<div>
						<button className="bg-primary transition p-3 rounded-lg text-white text-sm  font-inter w-[321px]">
							Connect Wallet to Sign In
						</button>
						<span className="flex gap-1 justify-end mt-1">
							<h1 className="font-inter font-normal text-xs">not connected?</h1>
							<h1 className="font-inter font-normal text-xs">sign up now!</h1>
						</span>
					</div>

					<div className="mt-10">
						<button className="bg-white transition p-3 rounded-lg  w-[321px] flex justify-center gap-3 items-center">
							<SiWalletconnect className="text-[#3B99FC]" />
							<h1 className="text-black text-sm  font-inter">
								sign up with Connect Wallet
							</h1>
						</button>
					</div>
					<div className="mt-2">
						<button className="bg-transparent border-[#FFFFFF99] border transition p-3 rounded-lg  w-[321px] flex justify-center gap-3 items-center">
							<FcGoogle />
							<h1 className="text-white text-sm  font-inter">
								sign up with google
							</h1>
						</button>
					</div>
					<div className="mt-2">
						<Link
							href="/emailSignup"
							className="bg-transparent border-[#FFFFFF99] border transition p-3 rounded-lg  w-[321px] flex justify-center gap-3 items-center"
						>
							<RiMailFill className="text-[#F24822]" />
							<h1 className="text-white text-sm  font-inter">
								sign up with Email
							</h1>
						</Link>
					</div>

					<p className="font-inter font-normal text-[10px] text-center mt-15">
						By continuing you agree to our updated{" "}
						<span className=" underline text-[#EFFF10]">
							terms & conditions
						</span>{" "}
						and{" "}
						<span className=" underline text-[#EFFF10]">privacy policy</span>
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
