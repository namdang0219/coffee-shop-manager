'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
	useEffect(() => {
		redirect('/dashboard/store');
	}, [])	
	return <main>Home Page</main>;
}
