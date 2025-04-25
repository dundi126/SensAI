import Image from "next/image";
import "./globals.css";
import HeroSection from "@/components/hero";

export default function Home() {
	return (
		<div>
			<div className="grid-background">
				<HeroSection />
			</div>
		</div>
	);
}
