/** @format */
"use client";
// app/weightlossprogramcontent/page.tsx
import React from "react";
import { useSearchParams } from "next/navigation";
import { CompletionProvider } from "@/context/CompletionContext";
import BodyAnalysis from "@/component/multistepformcomponent/weightloss/bodyanalysis/BodyAnalysisParent";
import LifestyleParent from "@/component/multistepformcomponent/weightloss/lifestyle/LifestyleParent";
import ActivityLevelParent from "@/component/multistepformcomponent/weightloss/activitylevel/ActivityLevelParent";

const Page = () => {
	const searchParams = useSearchParams();
	const step = searchParams.get("step");

	let content: React.ReactNode;

	if (step === "0") {
		content = <BodyAnalysis />;
	} else if (step === "1") {
		content = <ActivityLevelParent />;
	} else {
		content = <LifestyleParent />;
	}

	return (
		<CompletionProvider>
			<div>{content}</div>
		</CompletionProvider>
	);
};

export default Page;
