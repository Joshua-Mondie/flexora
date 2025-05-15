/** @format */

// context/CompletionContext.tsx
"use client";
import React, { createContext, useState, useContext } from "react";

type CompletionContextType = {
	completedSteps: number[];
	markStepCompleted: (stepIndex: number) => void;
};

const CompletionContext = createContext<CompletionContextType | undefined>(
	undefined
);

export const CompletionProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [completedSteps, setCompletedSteps] = useState<number[]>([]);

	const markStepCompleted = (stepIndex: number) => {
		setCompletedSteps((prev) =>
			prev.includes(stepIndex) ? prev : [...prev, stepIndex]
		);
	};

	return (
		<CompletionContext.Provider value={{ completedSteps, markStepCompleted }}>
			{children}
		</CompletionContext.Provider>
	);
};

export const useCompletion = () => {
	const context = useContext(CompletionContext);
	if (!context)
		throw new Error("useCompletion must be used within CompletionProvider");
	return context;
};
