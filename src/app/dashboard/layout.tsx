import { Header, MainLayout } from "@/components/layouts";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	
	return (
		<MainLayout>
			<Header></Header>
			<div className="h-[calc(100vh-72px)]">{children}</div>
		</MainLayout>
	);
};

export default DashboardLayout;
