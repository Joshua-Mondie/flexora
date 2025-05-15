/** @format */

// components/MultiStepForm.tsx
"use client";

import { useState } from "react";

import ChooseGender from "./ChooseGender";
// import ChooseFitnessGoal from "./chooseFitnessGoal";
import WeightLossProgram from "./WeightLossProgram";
import ChooseFitnessGoal from "./ChooseFitnessGoal";
import { TiArrowBackOutline } from "react-icons/ti";
import Link from "next/link";
// import Image from "next/image";
import logoB from "@/assets/logoBrem.png";
import { useSearchParams } from "next/navigation";

const MultiStepForm = () => {
	const searchParams = useSearchParams();
	const initialStep = Number(searchParams.get("step") || 0); // default to 0
	const [step, setStep] = useState(initialStep);
	const totalSteps = 3;

	const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps - 1));
	// const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

	return (
		<div className="w-full max-w-md mx-auto p-6">
			{/* Progress bar */}
			<div className="flex justify-between">
				{" "}
				<Link href="/emailConfirmation">
					<TiArrowBackOutline size={24} color="#FD6202" />
				</Link>
				<span className=" font-bold  flex justify-center pl-8 items-center">
					<img
						src={logoB.src}
						alt="Logo"
						// height={43}
						// width={151}
						className="h-[43px]"
					/>{" "}
					<h1 className="text-[8.87px] font-bold text-[#E86514] -translate-x-6 translate-y-2 font-inknut">
						LEXORA
					</h1>
				</span>
			</div>
			<div className="flex justify-center gap-2 mb-8">
				{[...Array(totalSteps)].map((_, i) => (
					<div
						key={i}
						className={`h-1.5 rounded-full transition-all ${
							i === step ? "bg-orange-500 w-24" : "bg-gray-300 w-4"
						}`}
					/>
				))}
			</div>

			{/* Step content */}
			{step === 0 && <ChooseGender onNext={nextStep} />}
			{step === 1 && <ChooseFitnessGoal onNext={nextStep} />}
			{step === 2 && <WeightLossProgram />}
		</div>
	);
};

export default MultiStepForm;
