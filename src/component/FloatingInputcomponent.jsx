/** @format */

// components/OrangeTextField.tsx
import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const OrangeTextField = (props) => {
	return (
		<TextField
			fullWidth
			variant="outlined"
			{...props}
			sx={{
				"& label": {
					color: "#5E6367",
				},
				"& label.Mui-focused": {
					color: "#ff6600",
				},
				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						borderColor: "#5E6367",
					},
					"&:hover fieldset": {
						borderColor: "#ff6600",
					},
					"&.Mui-focused fieldset": {
						borderColor: "#ff6600",
					},
					"& input::placeholder": {
						fontStyle: "italic", // <- This styles the placeholder
					},
				},
				...props.sx,
			}}
		/>
	);
};

export default OrangeTextField;
