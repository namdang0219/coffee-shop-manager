"use client";
import { dataMock } from "@/mocks/dataMock";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const StorePage = () => {
	const params = useSearchParams();
	const categoryParam = params.get("category");
	const productDatas = categoryParam
		? dataMock.products.filter(
				(product) => product.category == Number(categoryParam)
		  )
		: dataMock.products;
	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				{/* category list  */}
				<ul className="flex items-center gap-8">
					{dataMock.categories.length > 0 &&
						[
							{ cId: 0, name: "All Product" },
							...dataMock.categories,
						].map((category) => (
							<li
								key={category.cId}
								className={`text-primary font-medium text-lg relative`}
							>
								<Link
									href={`/dashboard/store?table=1&category=${category.cId}`}
								>
									{category.name}
								</Link>
								<div
									className={`absolute bottom-0 w-full h-[2.5px] ${
										category.cId == Number(categoryParam) &&
										"bg-primary"
									}`}
								></div>
							</li>
						))}
				</ul>
				{/* table option  */}
				<div className="flex items-center gap-3">
					<span>Table</span>
					<select
						name="table"
						id="table"
						className="focus:outline-none py-2 px-5  border border-gray-200 rounded-md"
					>
						{tableOptions.length > 0 &&
							tableOptions.map((option) => (
								<TableOptionItem
									key={option}
									value={option}
								></TableOptionItem>
							))}
					</select>
				</div>
			</div>
			<div className="grid grid-cols-4 pb-0 rounded-xl gap-x-4 gap-y-4 2xl:grid-cols-3 xl:grid-cols-2 max-h-[calc(100vh-162px)] product-wrapper overflow-scroll h-fit">
				{productDatas.length > 0
					? productDatas.map((product) => (
							<div key={product.pId}>
								<div className="border border-gray-200 rounded-xl p-2">
									<div className="relative mb-2">
										<Image
											alt="product-image"
											src={product.thumb}
											width={120}
											height={120}
											className="w-full h-[180px] object-cover rounded-md object-center"
										></Image>
									</div>
									<div>
										<h3 className="text-lg font-medium line-clamp-2">
											{product.name}
										</h3>
										<p className="text-gray-400">
											Price: ¥<span>{product.price}</span>
										</p>
									</div>
								</div>
							</div>
					  ))
					: dataMock.products.map((product) => (
							<div key={product.pId}>
								<div className="border border-gray-200 rounded-xl p-2">
									<div className="relative mb-2">
										<Image
											alt="product-image"
											src={product.thumb}
											width={120}
											height={120}
											className="w-full h-[180px] object-cover rounded-md object-center"
										></Image>
									</div>
									<div>
										<h3 className="text-lg font-medium line-clamp-2">
											{product.name}
										</h3>
										<p className="text-gray-400">
											Price: ¥<span>{product.price}</span>
										</p>
									</div>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
};

const tableOptions = ["1A", "1B", "2A", "2B"];

function TableOptionItem({ value }: { value: string }) {
	return <option value={value}>{value}</option>;
}

export default StorePage;
