import React, { ReactNode } from "react";

const ProductLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="grid grid-cols-4 rounded-xl gap-x-6 gap-y-6 2xl:grid-cols-3 xl:grid-cols-2 max-h-[calc(100vh-160px)] product-wrapper overflow-auto h-fit pb-4	">
			{children}
		</div>
	);
};

export default ProductLayout;
