/** @format */
"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useCompletion } from "../../../../context/CompletionContext";
// import Height from "./Height";

const BodyAnalysis = () => {
	const router = useRouter();
	const subSteps = ["One", "Activity level", "Lifestyle"];
	const [subStep, setSubStep] = useState(-1); // Start at -1 to show initial message
	const [isFirstLoad, setIsFirstLoad] = useState(true); // One-time display

	const progressPercent = ((subStep + 1) / subSteps.length) * 100;

	const { markStepCompleted } = useCompletion();

	const STEP_INDEX = 0;
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
						1
					</p>
					<h1 className="font-bold text-2xl text-center">BODY ANALYSIS</h1>
					<p className="font-medium text-[16px] font-inter text-center">
						Flexora will create the most efective fitness program for you based
						on your body analysis
					</p>
				</div>
			) : (
				<>
					<h2 className="text-lg font-semibold mb-4">{subSteps[subStep]}</h2>
					{/* Add your form fields or content here */}
				</>
			)}

			{/* Button */}
			{subStep !== -1 && (
				<button
					onClick={handleNext}
					className="bg-[#FD6202] text-white px-6 py-3 rounded-xl mt-6"
				>
					{subStep < subSteps.length - 1 ? "Next" : "Finish"}
				</button>
			)}
		</div>
	);
};

export default BodyAnalysis;
