/** @format */

import React from "react";
// import bgimg from "../../../assets/emailbgimg.png";
import bgimg from "@/assets/emailbgimg.png";

const Page = () => {
	return (
		<div>
			<div
				className=" border h-45 border-white px-7 bg-cover bg-center "
				style={{
					backgroundImage: ` url(${bgimg.src})`,
				}}
			>
				Page
			</div>
		</div>
	);
};

export default Page;
