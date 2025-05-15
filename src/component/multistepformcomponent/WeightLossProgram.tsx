/** @format */
"use client";

// import { useState } from "react";
// import BodyAnalysis from "./weightloss/BodyAnalysis";
// import ActivityLevelParent from "./weightloss/activitylevel/ActivityLevelParent";
// import LifestyleParent from "./weightloss/lifestyle/LifestyleParent";
import LabelComponent from "./LabelComponent";

// components/steps/ChooseGender.tsx
const WeightLossProgram = () => {
	// const [currentIndex, setCurrentIndex] = useState(0);

	function renderContent() {
		return (
			<div>
				{Array.from([1, 2, 3]).map((_, index) => {
					const label =
						index === 0
							? "Body Analysis"
							: index === 1
							? "Activity Level"
							: "Lifestyle";
					// return <h1 key={index}>{label}</h1>;
					return <LabelComponent key={index} label={label} index={index} />;
				})}
			</div>
		);
	}
	return (
		<div className="text-center">
			<h2 className="text-xl font-bold mb-2">
				Your weight loss program is based on a three steps assessment
			</h2>
			{renderContent()}
		</div>
	);
};
export default WeightLossProgram;
