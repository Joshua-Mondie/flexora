/** @format */
"use client";

import React from "react";
// import bgimg from "../../../assets/emailbgimg.png";
// import bgimg from "assets/emailbgimg.png";
import { TiArrowBackOutline } from "react-icons/ti";
// import TextField from "@mui/material/TextField";
// import OrangeTextField from "@/component/FloatingInputcomponent";
import Link from "next/link";
// import FloatingInput from "@/component/FloatingInputcomponent";

const Page = () => {
	// const [email, setEmail] = useState("");
	return (
		<div>
			<div
				className=" border h-45 border-white px-7 py-6 bg-cover bg-center "
				style={{
					backgroundImage: "assets/emailbgimg.png",
				}}
			>
				<Link href="/">
					<TiArrowBackOutline size={24} color="white" />
				</Link>
				<h1 className=" w-46 font-inter text-xl font-medium text-[#FBFBFB] mt-2 pr-2 ">
					Ready to Sign up for Flexora?
				</h1>
				<p className="font-inter mt-2 font-normal text-xs w-37 text-white">
					Tell us more about you so we can give you a better customer experience
				</p>
			</div>

			<div className="m-5 ">
				<h1 className="mb-8 font-inter text-sm font-normal">User Details</h1>
				{/* <div className="relative w-full">
					<OrangeTextField label="Email*" placeholder="johndoe@gmail.com" />
				</div>
				<div className="relative w-full mt-8 grid gap-2">
					<OrangeTextField label="firstname*" placeholder="Joshua" />
					<OrangeTextField label="lastname*" placeholder="Daniel" />
				</div> */}
			</div>
			<p className="font-normal text-xs font-inter text-center text-[#5E6368]">
				A confirmation mail will be sent to your mail to check authenticity
			</p>

			<div className="grid justify-center gap-2 mt-20">
				<Link href="/emailConfirmation">
					<button className="bg-primary transition p-3 rounded-lg text-white text-sm  font-inter w-[321px]">
						Register
					</button>
				</Link>
				<button className="border-primary border transition p-3 rounded-lg text-black text-sm  font-inter w-[321px]">
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Page;
