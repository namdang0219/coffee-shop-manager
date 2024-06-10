import { productItemType } from "@/types/productItemType";
import Image from "next/image";
import React from "react";

const ProductItem = ({
	productDetail: { thumb, name, price, pId },
}: {
	productDetail: productItemType;
}) => {
	const [quantity, setQuantity] = React.useState<number>(0);
	return (
		<div
			onClick={() => setQuantity(quantity + 1)}
			className="relative border border-gray-200 bg-white hover:bg-gray-100 transition-all rounded-xl p-[10px] cursor-pointer"
		>
			<div className="absolute size-10 text-white rounded-md bg-primary flex items-center justify-center	top-5 right-5 z-10">
				{quantity ? (
					<span>{quantity}</span>
				) : (
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
						</svg>
					</span>
				)}
			</div>
			<div className="relative mb-2">
				<Image
					alt="product-image"
					src={thumb}
					width={120}
					height={120}
					className="w-full h-[180px] object-cover rounded-lg object-center"
				></Image>
			</div>
			<div>
				<h3 className="text-lg font-medium line-clamp-2">{name}</h3>
				<p className="text-gray-400">
					Price: ¥<span>{price}</span>
				</p>
			</div>
		</div>
	);
};

export default ProductItem;
