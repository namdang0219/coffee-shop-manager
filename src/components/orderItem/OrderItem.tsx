"use client";
import { dataMock } from "@/mocks/dataMock";
import Image from "next/image";
import React, { ReactNode } from "react";

type OrderItemPropType = {
	pId: number,
	quantity: number,
};

const OrderItem = ({ item: { pId, quantity } }: {item: OrderItemPropType}) => {
	const [itemNumber, setItemNumber] = React.useState<number>(quantity);
	const OrderItemData = dataMock.products.find((item) => item.pId === pId);

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
							OrderItemData?.thumb || ''
						}
						width={60}
						height={60}
						className="size-[60px] object-cover rounded-lg"
					></Image>
				</div>
				<div>
					<h3 className="text-lg font-medium line-clamp-2">
						{OrderItemData?.name}
					</h3>
					<p className="text-gray-400">
						Price: ¥<span>{OrderItemData?.price}</span>
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
				¥<span>{OrderItemData?.price ? OrderItemData?.price * itemNumber : 'NaN'}</span>
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
