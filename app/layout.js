import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "@/components/page-header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "SensAI - AI-Powered Carrer Application Assistant",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body className={`${inter.className} `}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<PageHeader />
						<main className="min-h-screen">{children}</main>

						<footer className="bg-muted/50 py-12">
							<div className="container mx-auto px-4">
								<p className="text-center text-sm text-gray-500">
									© 2025 Your Company. All rights reserved.
								</p>
							</div>
						</footer>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
