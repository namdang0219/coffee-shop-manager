import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { MainLayout } from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Meow Coffee 🍰",
	description: "Coffee Shop Manager Application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
