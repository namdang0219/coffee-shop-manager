'use client'
import { dataMock } from "@/mocks/dataMock";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect } from "react";


const DashboardPage = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		redirect(`/dashboard/store`)
	}, [])
	return <div>{children}</div>;
};

export default DashboardPage;
