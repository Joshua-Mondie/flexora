/** @format */
"use client";

// components/steps/ChooseGender.tsx
const WeightLossProgram = ({ onNext }: { onNext: () => void }) => {
	return (
		<div className="text-center">
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
		</div>
	);
};
export default WeightLossProgram;
