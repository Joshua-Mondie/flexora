/** @format */

import React from "react";
import formComplete from "../../../../../public/assets/formComplete.png";

const FormComplete = () => {
	return (
		<div className="grid justify-center pt-20">
			<img src={formComplete.src} className="h-[248px]" alt="" />
			<h1 className="font-inter font-semibold text-lg mt-7">
				Congratulations! You’re all set🚀{" "}
			</h1>
		</div>
	);
};

export default FormComplete;
