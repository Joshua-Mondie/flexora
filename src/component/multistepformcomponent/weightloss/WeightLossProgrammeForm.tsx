/** @format */
"use client";
import { useState } from "react";

// components/steps/ChooseGender.tsx
const WeightLossProgram = ({ onNext }) => {
	const subSteps = ["Body analysis", "Activity level", "Lifestyle"];
	const [subStep, setSubStep] = useState(0); // Tracks current step
	const progressPercent = ((subStep + 1) / subSteps.length) * 100;

	return (
		<div className="text-center">
			<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-6">
				<div
					className="bg-orange-500 h-full transition-all duration-300"
					style={{ width: `${progressPercent}%` }}
				/>
			</div>

			<h2 className="text-xl font-bold mb-2">
				Your weight loss program is based on a three steps assessment
			</h2>
			{/* <p className="mb-4 text-gray-500">Select options that apply</p> */}

			{/* Example card */}
			<div
				onClick={onNext}
				className="border-2 border-orange-500 rounded-xl p-4 cursor-pointer"
			>
				<p className="font-semibold">Female</p>
				{/* <img src="/images/female.png" alt="Female" className="mt-2 w-full h-auto" /> */}
			</div>

			<button
				onClick={() => {
					if (subStep < subSteps.length - 1) {
						setSubStep((prev) => prev + 1);
					} else {
						// Finish sub-steps, proceed to final onboarding or dashboard
						onNext();
					}
				}}
				className="bg-[#FD6202] text-white px-6 py-3 rounded-xl mt-6"
			>
				{subStep < subSteps.length - 1 ? "Next" : "Finish"}
			</button>
		</div>
	);
};
export default WeightLossProgram;
