"use client";
import { dataMock } from "@/mocks/dataMock";
import Image from "next/image";
import React from "react";

const Header = () => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"Jun",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const now = new Date();
	const currentDate = `${days[now.getDay()]}, ${now.getDate()} ${
		months[now.getMonth()]
	} ${now.getFullYear()}`;

	return (
		<div className="h-[72px] p-6 flex items-center justify-between border-b">
			<div>
				<div className="font-medium text-xl text-primary">
					{dataMock.storeInfo.name}
				</div>
				<p className="text-normal text-gray-400">{currentDate}</p>
			</div>
			<div className=" h-[50px] w-full max-w-[450px] relative flex items-center gap-2">
				<span className="absolute left-2 text-gray-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={28}
						height={28}
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
						></path>
					</svg>
				</span>
				<input
					type="text"
					className=" w-full h-full pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none"
					placeholder="Search for food, drink, etc"
				/>
				<button className="text-white bg-primary hover:bg-primaryHover px-4 h-full rounded-md">
					Search
				</button>
			</div>
			<div className="flex items-center gap-3">
				<div className="font-semibold text-lg">
					<div>
						<span>Welcome, </span>
						<span className="text-primary">
							{dataMock.storeInfo.name}
						</span>
					</div>
					<div className="text-gray-400 font-normal text-sm text-right">{dataMock.storeInfo.email}</div>
				</div>
				<div className="relative">
					<Image
						alt="user-avatar"
						src={
							dataMock.storeInfo.avatar
								? dataMock.storeInfo.avatar
								: "https://www.freeiconspng.com/thumbs/retail-store-icon/retail-shop-icon-3.png"
						}
						width={50}
						height={50}
						className="size-10 rounded-full"
					></Image>
				</div>
			</div>
		</div>
	);
};

export default Header;
