import { OrderSidebar } from "@/modules/orderSidebar";
import React from "react";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full h-full">
			<div className="flex-1 px-6 pt-6">{children}</div>
			<OrderSidebar></OrderSidebar>
		</div>
	);
};



export default StoreLayout;
