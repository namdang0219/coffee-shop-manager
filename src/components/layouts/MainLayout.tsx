import { Nav } from "@/modules/nav";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex">
			<div className="w-[250px] bg-blue-600 h-screen">
				<div className=" px-4 py-4">
					<h1 className="text-white font-bold text-2xl">
						Meow Coffee
					</h1>
				</div>
				<Nav></Nav>
			</div>
			<div>{children}</div>
		</div>
	);
};



export default MainLayout;
