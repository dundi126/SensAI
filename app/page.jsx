import Image from "next/image";
import "./globals.css";
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
	return (
		<div>
			<div className="grid-background">
				<HeroSection />

				<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-semibold tracking-tighter text-center mb-12">
							PowerFull Features For Carrer Growth{" "}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl max-auto">
							{features.map((features, index) => {
								return (
									<Card
										key={index}
										className="border-2 hover:border-primary transition-colors duration-300">
										<CardContent className="pt-6 text-center flex flex-col justify-center">
											<div className="flex flex-col items-center justify-center">
												{features.icon}
												<h3 className="text-xl font-bold mb-2">
													{features.title}
												</h3>
												<p>{features.description}</p>
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
