"use client";
import { ProductLayout } from "@/components/layouts";
import { ProductItem } from "@/components/productItem";
import { dataMock } from "@/mocks/dataMock";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const StorePage = () => {
	const params = useSearchParams();
	const categoryParam = params.get("category");
	const tablePram = params.get("table");
	

	const productDatas = categoryParam
		? dataMock.products.filter(
				(product) => product.category == Number(categoryParam)
		  )
		: dataMock.products;

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<CategoryNav
					categoryParam={categoryParam}
					tablePram={
						tablePram ? tablePram : dataMock?.tables[0]?.name
					}
				></CategoryNav>
				<TableSelect categoryParam={categoryParam}></TableSelect>
			</div>
			<ProductLayout>
				{dataMock.products.length > 0 && productDatas.length > 0
					? productDatas.map((product) => (
							<ProductItem
								key={product.pId}
								productDetail={product}
							></ProductItem>
					  ))
					: dataMock.products.map((product) => (
							<ProductItem
								key={product.pId}
								productDetail={product}
							></ProductItem>
					  ))}
			</ProductLayout>
		</div>
	);
};

function TableSelect({ categoryParam }: { categoryParam: string | null }) {
	const { push } = useRouter();
	const handleChangeTable = (e: ChangeEvent<HTMLSelectElement>) => {
		push(
			`/dashboard/store?table=${e.target.value}&category=${categoryParam}`
		);
	};
	return (
		<div className="flex items-center gap-3">
			<span>Table</span>
			<select
				name="table"
				id="table"
				className="focus:outline-none py-2 px-5  border border-gray-200 rounded-md"
				defaultValue={dataMock.tables[0].name}
				onChange={(e) => handleChangeTable(e)}
			>
				{
					// dataMock.table.length > 0 &&
					dataMock.tables.map((table, index) => (
						<TableOptionItem
							key={table.tId}
							value={table.name}
						></TableOptionItem>
					))
				}
			</select>
		</div>
	);
}

function CategoryNav({
	tablePram,
	categoryParam,
}: {
	tablePram: string | null;
	categoryParam: string | null;
}) {
	return (
		<ul className="flex items-center gap-8">
			{dataMock.categories.length > 0 &&
				[{ cId: 0, name: "All Product" }, ...dataMock.categories].map(
					(category) => (
						<li
							key={category.cId}
							className={`text-primary font-medium text-lg relative`}
						>
							<Link
								href={`/dashboard/store?table=${tablePram}&category=${category.cId}`}
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
					)
				)}
		</ul>
	);
}

function TableOptionItem({ value }: { value: string }) {
	return <option value={value}>{value}</option>;
}

export default StorePage;
