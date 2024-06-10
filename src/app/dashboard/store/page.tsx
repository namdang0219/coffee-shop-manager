import { storeDataMock } from "@/mocks/storeDataMock";
import React from "react";

const StorePage = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<ul className="flex items-center gap-4">
					{storeDataMock.categories.length > 0 &&
						storeDataMock.categories.map((category) => (
							<li key={category.id} className="text-primary">
								{category.name}
							</li>
						))}
				</ul>
				<div className="flex items-center gap-3">
					<span>Table</span>
					<select name="table" id="table" className="focus:outline-none py-2 px-5  border border-gray-200 rounded-md">
						<option value="1A">1A</option>
						<option value="1B">1B</option>
						<option value="2A">2A</option>
						<option value="2B">2B</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default StorePage;
