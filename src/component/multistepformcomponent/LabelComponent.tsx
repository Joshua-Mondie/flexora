/** @format */
"use client";
import { useCompletion } from "@/context/CompletionContext";
import Link from "next/link";
import React from "react";

interface Props {
	label: string;
	index: number;
}
const LabelComponent: React.FC<Props> = (props) => {
	const { label, index } = props;
	// const isCompleted = true;
	const { completedSteps } = useCompletion();
	const isCompleted = completedSteps.includes(index);

	return (
		<div>
			<Link
				href={{ pathname: "/weightlossprogramcontent", query: { step: index } }}
				className={
					isCompleted
						? "border py-2 px-4 flex justify-start my-8 h-19 items-center rounded-xl"
						: "border bg-[#FD6202] text-white py-2 px-4 flex justify-start my-8 h-19 items-center rounded-xl"
				}
			>
				{label}
			</Link>
		</div>
	);
};

export default LabelComponent;
