import { OrderItem } from "@/components/orderItem";
import Image from "next/image";
import React from "react";

const OrderSidebar = () => {
	return (
		<div className="w-[450px] border-l border-l-gray-200 h-full flex flex-col">
			<div className="flex w-full items-center gap-2 px-6 pt-6 pb-4 border-b border-b-gray-200">
				<h2 className="text-xl font-semibold flex-1 text-primary">
					Order #<span>1A</span>
				</h2>
				<div>Number</div>
				<div className="ml-5 w-12 text-center">Price</div>
			</div>
			<ul className="flex-1 px-6 overflow-y-scroll scrollbar-hidden pt-4">
				{Array(6)
					.fill(null)
					.map((item, index) => (
						<li key={index}>
							<OrderItem></OrderItem>
						</li>
					))}
			</ul>
			<div className="py-6 border-t border-t-gray-200 px-6">
        <div className="flex items-center justify-between mb-4 text-lg">
          <div>Total:</div>
          <div>¥1200</div>
        </div>
				<button className="hover:bg-primaryHover transition-all rounded-md h-[50px] bg-primary text-white w-full flex items-center justify-center">
					Payment
				</button>
			</div>
		</div>
	);
};

export default OrderSidebar;
