/** @format */

import React from "react";
import ReactCodeInput from "react-code-input";

const codeStyle = {
	fontFamily: "monospace",
	margin: "4px",
	width: "47px",
	borderRadius: "8px",
	fontSize: "24px",
	height: "48px",
	padding: "15px",
	backgroundColor: "white",
	border: "1px solid black",
	// display: "flex",
	// justifyContent: "center",
} as const;

export default function OTPInput() {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<ReactCodeInput
				type="number"
				name="otp"
				inputMode="numeric"
				fields={6}
				inputStyle={codeStyle}
			/>
		</div>
	);
}
