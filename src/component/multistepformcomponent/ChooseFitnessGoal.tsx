/** @format */
"use client";
import { useState } from "react";

const goals = [
	"Build Muscle Mass",
	"Get Stronger",
	"Stay Fit",
	"Weight Gain",
	"Weight Loss",
	"Flexibility",
	"Endurance",
	"Recovery",
];

const levels = ["Newbie", "Intermediate", "Advanced"];
const ChooseFitnessGoal = ({ onNext }: { onNext: () => void }) => {
	const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
	const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

	const toggleGoal = (goal: string) => {
		setSelectedGoals((prev) => {
			if (prev.includes(goal)) {
				return prev.filter((g) => g !== goal);
			} else if (prev.length < 3) {
				return [...prev, goal];
			} else {
				return prev; // max 3 goals
			}
		});
	};

	return (
		<div>
			<div className="text-center">
				<h2 className="text-2xl font-bold  mb-2">Choose Your Fitness Goal</h2>
				<p className="mb-4 text-gray-500">Select up to 3 goals & One level</p>

				<div className="flex flex-wrap justify-center gap-3">
					{goals.map((goal) => {
						const selected = selectedGoals.includes(goal);
						return (
							<button
								key={goal}
								onClick={() => toggleGoal(goal)}
								className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
									selected
										? "bg-[#FD6202] text-white border-[#FD6202]"
										: "border-gray-400 text-gray-800"
								}`}
							>
								{goal}
							</button>
						);
					})}
				</div>
			</div>

			<h3 className="text-2xl font-bold  text-center mb-3 mt-14">
				Select Your Level
			</h3>
			<div className="flex justify-center gap-4 mb-6">
				{levels.map((level) => {
					const selected = selectedLevel === level;
					return (
						<button
							key={level}
							onClick={() => setSelectedLevel(level)}
							className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
								selected
									? "bg-[#FD6202] text-white border-[#FD6202]"
									: "border-gray-400 text-gray-800"
							}`}
						>
							{level}
						</button>
					);
				})}
			</div>

			<div className="flex justify-center">
				<button
					onClick={onNext}
					className=" bg-[#FD6202] text-white py-3 px-6 rounded-xl font-semibold w-[321px] self-center mt-12"
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default ChooseFitnessGoal;
