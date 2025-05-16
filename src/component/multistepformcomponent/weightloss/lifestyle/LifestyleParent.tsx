/** @format */
"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useCompletion } from "../../../../context/CompletionContext";
import LocationofTraining from "./LocationofTraining";
import FormComplete from "./FormComplete";
// import Height from "./Height";

const LifestyleParent = () => {
	const router = useRouter();
	const subSteps = ["Regular Activities", "Activity level"];

	const [subStep, setSubStep] = useState(-1); // Start at -1 to show initial message
	const [isFirstLoad, setIsFirstLoad] = useState(true); // One-time display

	const progressPercent = ((subStep + 1) / subSteps.length) * 100;

	const { markStepCompleted } = useCompletion();

	const STEP_INDEX = 2;
	const handleComplete = () => {
		markStepCompleted(STEP_INDEX);
	};

	useEffect(() => {
		if (isFirstLoad) {
			// Only trigger once on mount
			const timeout = setTimeout(() => {
				setSubStep(0);
				setIsFirstLoad(false);
			}, 4000); // Show pre-step message for 1 second

			return () => clearTimeout(timeout);
		}
	}, [isFirstLoad]);

	const handleNext = () => {
		if (subStep < subSteps.length - 1) {
			setSubStep((prev) => prev + 1);
		} else {
			handleComplete();
			router.push("/formstepper?step=2");
			// alert("Onboarding complete!");
		}
	};

	// const subSteps = [
	// 	<RegularActivities
	// 		key="regular-activities"
	// 		handleNext={handleNext}
	// 		handleComplete={handleComplete}
	// 	/>,
	// 	"Activity level",
	// ];

	return (
		<div className="p-4">
			{/* Progress Bar */}
			<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-6">
				<div
					className="bg-orange-500 h-full transition-all duration-300"
					style={{ width: `${progressPercent}%` }}
				/>
			</div>

			{/* Content */}
			{subStep === -1 ? (
				<div>
					<p className="text-center text-black mb-4 font-light text-[203px] tabular-nums">
						3
					</p>
					<h1 className="font-bold text-2xl text-center">LIFESTYLE</h1>
					<p className="font-medium text-[16px] font-inter text-center">
						Flexora will create a sustainable fitness program for you by
						accessing your lifestyle
					</p>
				</div>
			) : subStep === 0 ? (
				<LocationofTraining />
			) : subStep === 1 ? (
				<FormComplete />
			) : (
				<h2 className="text-lg font-semibold mb-4">{subSteps[subStep]}</h2>
			)}

			{/* Button */}
			{subStep !== -1 && (
				<button
					onClick={handleNext}
					className="bg-[#FD6202] text-white px-6 py-3 rounded-xl mt-6 w-[360px]"
				>
					{subStep < subSteps.length - 1 ? "Next" : "Get started"}
				</button>
			)}
		</div>
	);
};

export default LifestyleParent;
