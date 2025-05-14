/** @format */
import female from "@/assets/female.png";
import male from "@/assets/male.png";

// import Image from "next/image";
// components/steps/ChooseGender.tsx
const ChooseGender = ({ onNext }: { onNext: () => void }) => {
	return (
		<div className="">
			<h2 className="text-2xl font-inter font-bold mb-2 text-center">
				Choose Your Gender
			</h2>
			<p className="mb-4 font-inter text-sm font-medium text-black text-center">
				Select options that apply
			</p>

			{/* Example card */}
			<div
				onClick={onNext}
				className="border-1 border-orange-500 rounded-3xl items-center cursor-pointer pl-10 h-39 flex mt-14 relative"
			>
				<p className="font-bold font-inter text-xl ">Female</p>
				<img
					src={female.src}
					alt=""
					className="absolute h-[194px] w-[188.12px] -right-4 -top-7"
				/>
				{/* <img src="/images/female.png" alt="Female" className="mt-2 w-full h-auto" /> */}
			</div>

			<div
				onClick={onNext}
				className="border-1 border-orange-500 rounded-3xl justify-between flex pr-16 cursor-pointer h-39  mt-14 relative"
			>
				<img
					src={male.src}
					alt=""
					className=" h-[186px] w-[188.12px] -translate-y-5 -translate-x-5 -top-7"
				/>
				<div className=" items-center flex">
					<p className="font-bold font-inter text-xl text-right  ">Male</p>
				</div>
				{/* <p className="font-bold font-inter text-xl  border">Male</p> */}
				{/* <img src="/images/female.png" alt="Female" className="mt-2 w-full h-auto" /> */}
			</div>

			<div
				onClick={onNext}
				className=" shadow-[#FB712633] shadow-lg rounded-3xl bg-white  flex items-center justify-center pr-16 cursor-pointer h-25   mt-14 "
			>
				<h1 className="font-bold font-inter text-xl text-center ">other</h1>
			</div>
		</div>
	);
};
export default ChooseGender;
