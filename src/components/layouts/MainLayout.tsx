import { Nav } from "@/modules/nav";
import { ReactNode } from "react";
import Header from "./Header";
// import Header from "./Header";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-full">
			<div className="w-[250px] bg-primary h-screen">
				<div className=" px-4 py-4">
					<h1 className="text-white font-bold text-2xl">
						Mee Coffee
					</h1>
				</div>
				<Nav></Nav>
			</div>
			<div className="flex-1">{children}</div>
		</div>
	);
};

export default MainLayout;
