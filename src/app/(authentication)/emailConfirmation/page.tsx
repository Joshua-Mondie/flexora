/** @format */
"use client";

import React from "react";
// import bgimg from "../../../assets/emailbgimg.png";
import bgimg from "@/assets/emailbgimg2.png";
import { TiArrowBackOutline } from "react-icons/ti";
// import TextField from "@mui/material/TextField";
// import OrangeTextField from "@/component/FloatingInputcomponent";
import Link from "next/link";
import OTPInput from "@/component/OtpInput";
// import FloatingInput from "@/component/FloatingInputcomponent";

const Page = () => {
	// const [email, setEmail] = useState("");
	return (
		<div>
			<div
				className=" border h-45 border-white px-7 py-6 bg-cover bg-center "
				style={{
					backgroundImage: ` url(${bgimg.src})`,
				}}
			>
				<Link href="/">
					<TiArrowBackOutline size={24} color="white" />
				</Link>
				<h1 className=" w-46 font-inter text-xl font-medium text-[#FBFBFB] mt-2 pr-2 ">
					Email Confirmation
				</h1>
				<p className="font-inter mt-2 font-normal text-xs w-37 text-white">
					Kindly check your mail to get the six unique code sent to you,
				</p>
			</div>

			<div className="m-5 ">
				<h1 className="mb-8 font-inter text-sm font-normal text-center">
					Enter your six unique code
				</h1>

				{/* otpinput here */}

				<OTPInput />

				<div className="grid gap-2 justify-center mt-8">
					<Link href="/connectWallet">
						<button className="bg-primary transition p-3 rounded-lg text-white text-sm  font-inter w-[321px]">
							Connect Wallet to login
						</button>
					</Link>
					<button className="border-primary border transition p-3 rounded-lg text-black text-sm  font-inter w-[321px]">
						Resend Confirmation Code
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
