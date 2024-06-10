"use client";
import { NavType } from "@/types/navType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
	const pathName = usePathname();
	return (
		<ul className="px-2">
			{navItems.map((item) => (
				<li key={item.title}>
					<Link
						href={item.link}
						className={`link flex items-center gap-4 text-lg p-4   transition-all rounded-lg ${
							pathName === item.link
								? "bg-white text-blue-600"
								: "bg-transparent text-white hover:bg-white hover:bg-opacity-30"
						}`}
					>
						<span className="size-[28px]">{item.icon}</span>
						<span>{item.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

const navItems: NavType = [
	{
		title: "Store",
		link: "/dashboard/store",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={28}
				height={28}
				viewBox="0 0 32 32"
			>
				<path
					fill="currentColor"
					d="m30 10.68l-2-6A1 1 0 0 0 27 4H5a1 1 0 0 0-1 .68l-2 6A1.2 1.2 0 0 0 2 11v6a1 1 0 0 0 1 1h1v10h2V18h6v10h16V18h1a1 1 0 0 0 1-1v-6a1.2 1.2 0 0 0 0-.32M26 26H14v-8h12Zm2-10h-4v-4h-2v4h-5v-4h-2v4h-5v-4H8v4H4v-4.84L5.72 6h20.56L28 11.16Z"
				></path>
			</svg>
		),
	},
	{
		title: "Manage",
		link: "/dashboard/manage",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={28}
				height={28}
				viewBox="0 0 20 20"
			>
				<path
					fill="currentColor"
					d="M4.5 17a1.5 1.5 0 0 1-1.493-1.355L3 15.501v-11a1.5 1.5 0 0 1 1.356-1.493L4.5 3H9a1.5 1.5 0 0 1 1.493 1.355l.007.145v.254l2.189-2.269a1.5 1.5 0 0 1 2.007-.138l.116.101l2.757 2.725a1.5 1.5 0 0 1 .111 2.011l-.103.116l-2.311 2.2h.234a1.5 1.5 0 0 1 1.493 1.356L17 11v4.5a1.5 1.5 0 0 1-1.355 1.493L15.5 17zm5-6.5H4v5a.5.5 0 0 0 .326.47l.084.023l.09.008h5zm6 0h-5V16h5a.5.5 0 0 0 .492-.41L16 15.5V11a.5.5 0 0 0-.41-.491zm-5-2.79V9.5h1.79zM9 4H4.5a.5.5 0 0 0-.492.411L4 4.501v5h5.5v-5a.5.5 0 0 0-.326-.469L9.09 4.01z"
				></path>
			</svg>
		),
	},
	{
		title: "Analytic",
		link: "/dashboard/analytic",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={28}
				height={28}
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M3 22V8h4v14zm7 0V2h4v20zm7 0v-8h4v8z"
				></path>
			</svg>
		),
	},
	{
		title: "Setting",
		link: "/dashboard/setting",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={28}
				height={28}
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
				></path>
			</svg>
		),
	},
	{
		title: "Logout",
		link: "/dashboard/",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={28}
				height={28}
				viewBox="0 0 24 24"
			>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				>
					<path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"></path>
					<path d="M9 12h12l-3-3m0 6l3-3"></path>
				</g>
			</svg>
		),
	},
];

export default Nav;
