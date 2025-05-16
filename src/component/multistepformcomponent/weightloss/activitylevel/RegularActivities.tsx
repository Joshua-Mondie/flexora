/** @format */

import React, { useState } from "react";

const RegularActivities = ({}) => {
	const [selected, setSelected] = useState(null);

	const options = [
		{ id: "none", title: "None" },
		{ id: "cardio", title: "Cardio", description: "Walking, Running, Cycling" },
		{
			id: "flexibility",
			title: "Flexibility",
			description: "Yoga, Stretching, Pilates",
		},
		{ id: "martial", title: "Martial art", description: "Boxing, Kung fu" },
	];

	const handleSelect = (id) => {
		setSelected(id);
	};

	return (
		<div>
			{options.map(({ id, title, description }) => (
				<div
					key={id}
					onClick={() => handleSelect(id)}
					className={`border py-2 px-4 my-4 flex flex-col rounded-xl cursor-pointer
            ${
							selected === id
								? "bg-[#FD6202] text-white"
								: "bg-white text-black"
						}`}
					style={{ minHeight: "4.75rem" }}
				>
					<p className="font-bold font-inter text-xl">{title}</p>
					{description && <p>{description}</p>}
				</div>
			))}
		</div>
	);
};

export default RegularActivities;
