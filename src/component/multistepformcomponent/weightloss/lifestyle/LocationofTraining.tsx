/** @format */

import React, { useState } from "react";

const LocationofTraining = ({}) => {
	const [selected, setSelected] = useState(null);

	const options = [
		{ id: "gym", title: "Gym" },
		{ id: "home", title: "Home" },
		{
			id: "outdoor",
			title: "Outdoor",
		},
		{ id: "mix", title: "Mix" },
	];

	const handleSelect = (id) => {
		setSelected(id);
	};

	return (
		<div>
			{options.map(({ id, title }) => (
				<div
					key={id}
					onClick={() => handleSelect(id)}
					className={`border py-2 px-4 my-4 flex flex-col rounded-xl cursor-pointer justify-center
            ${
							selected === id
								? "bg-[#FD6202] text-white"
								: "bg-white text-black"
						}`}
					style={{ minHeight: "4.75rem" }}
				>
					<p className="font-bold font-inter text-xl">{title}</p>
				</div>
			))}
		</div>
	);
};

export default LocationofTraining;
