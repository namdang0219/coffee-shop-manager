"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

type OrderItemPropType = {
	item: {
		price: number;
	};
};

const OrderItem = ({ item: { price = 200 } }: OrderItemPropType) => {
	const [itemNumber, setItemNumber] = React.useState<number>(1);

	const handleItemIncrement = () => {
		setItemNumber(itemNumber + 1);
	};
	const handleItemDecreament = () => {
		if (itemNumber >= 1) {
			setItemNumber(itemNumber - 1);
		}
	};
	return (
		<div className="mb-6 flex items-center gap-4">
			<div className="flex gap-4 flex-1">
				<div className="relative">
					<Image
						alt="product-image"
						src={
							"https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={60}
						height={60}
						className="size-[60px] object-cover rounded-lg"
					></Image>
				</div>
				<div>
					<h3 className="text-lg font-medium line-clamp-2">
						Mango Frape
					</h3>
					<p className="text-gray-400">
						Price: ¥<span>{price}</span>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center gap-1">
				<NumButton onClick={handleItemDecreament}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={18}
						height={18}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M19 12.998H5v-2h14z"
						></path>
					</svg>
				</NumButton>
				<div className="w-6 text-center">{itemNumber}</div>
				<NumButton onClick={handleItemIncrement}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={18}
						height={18}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
						></path>
					</svg>
				</NumButton>
			</div>
			<div className="text-gray-400 w-12 text-center">
				¥<span>{price * itemNumber}</span>
			</div>
		</div>
	);
};

const NumButton = ({
	children,
	onClick,
}: {
	children: ReactNode;
	onClick: () => void;
}) => {
	return (
		<button
			onClick={onClick}
			className="size-6 flex items-center justify-center text-white bg-primary hover:bg-primaryHover transition-all rounded-full"
		>
			{children}
		</button>
	);
};

export default OrderItem;
