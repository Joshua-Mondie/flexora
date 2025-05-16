/** @format */

// context/CompletionContext.js
"use client";
import React, { createContext, useState, useContext } from "react";

const CompletionContext = createContext(undefined);

export const CompletionProvider = ({ children }) => {
	const [completedSteps, setCompletedSteps] = useState([]);

	const markStepCompleted = (stepIndex) => {
		console.log("Marking step as completed:", stepIndex);
		setCompletedSteps((prev) => {
			const updated = prev.includes(stepIndex) ? prev : [...prev, stepIndex];
			console.log("Updated completedSteps:", updated);
			return updated;
		});
	};

	return (
		<CompletionContext.Provider value={{ completedSteps, markStepCompleted }}>
			{children}
		</CompletionContext.Provider>
	);
};

export const useCompletion = () => {
	const context = useContext(CompletionContext);
	if (!context) {
		throw new Error("useCompletion must be used within CompletionProvider");
	}
	return context;
};
