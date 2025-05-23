import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// import { Image } from "next/image";

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

				<section className="w-full py-12 md:py-24 bg-muted/50">
					<div className="container mx-auto px-4 md:px-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
							<div className="flex flex-col items-center justify-center space-y-2">
								<h3 className="text-4xl font-bold">50+</h3>
								<p className="text-muted-foreground">Industries Covered</p>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<h3 className="text-4xl font-bold">1000+</h3>
								<p className="text-muted-foreground">Interview Questions</p>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<h3 className="text-4xl font-bold">95%</h3>
								<p className="text-muted-foreground">Success Rate</p>
							</div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<h3 className="text-4xl font-bold">24/7</h3>
								<p className="text-muted-foreground">AI Assistant</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
					<div className="container mx-auto px-4 md:px-6">
						<div className="text-center max-w-3xl mx-auto mb-12">
							<h2 className="text-3xl font-semibold mb-4">How It Works? </h2>
							<p>Four Simple Steps To Accelerate Your Career Growth</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl max-auto">
							{howItWorks.map((items, index) => {
								return (
									<div
										key={index}
										className="flex flex-col items-center text-center space-y-4 ">
										<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
											{items.icon}
										</div>
										<h3 className="font-semibold text-xl">{items.title}</h3>
										<p className="text-muted-foreground">{items.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-semibold tracking-tighter text-center mb-12">
							What Our Users Say !!!{" "}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl max-auto">
							{testimonial.map((items, index) => {
								return (
									<Card
										key={index}
										className="border-2 hover:border-primary transition-colors duration-300">
										<CardContent className={"px-3"}>
											<div className="flex flex-col space-y-4 pb-6">
												<div className="flex items-center space-x-4">
													<div className="relative h-12 w-12 flex-shrink-0">
														<Image
															src={items.image}
															alt={items.author}
															width={40}
															height={40}
															className="rounded-full object-cover border-2 border-primary/20"
														/>
													</div>
													<div>
														<p className="font-semibold text-primary">
															{items.author}
														</p>
														<p className="text-sm text-muted-foreground">
															{items.role}
														</p>
														<p className="text-sm text-primary">
															{items.company}
														</p>
													</div>
												</div>
											</div>
											<blockquote>
												<p className="text-muted-foreground italic relative">
													<span className="text-3xl text-primary absolute -top-4 -left-2">
														&quot;
													</span>
													{""}
													{items.quote}
													<span className="text-3xl text-primary absolute -bottom-4">
														&quot;
													</span>
												</p>
											</blockquote>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
					<div className="container mx-auto px-4 md:px-6">
						<div className="text-center max-w-3xl mx-auto mb-12">
							<h2 className="text-3xl font-semibold mb-4">
								Frequently Asked Questions?{" "}
							</h2>
							<p>Find answers to common questions about our platform</p>
						</div>
						<div className="max-w-6xl max-auto">
							<Accordion type="single" className="w-full" collapsible>
								{faqs.map((items, index) => {
									return (
										<AccordionItem key={index} value={`item-${index}`}>
											<AccordionTrigger>{items.question}</AccordionTrigger>
											<AccordionContent>{items.answer}</AccordionContent>
										</AccordionItem>
									);
								})}
							</Accordion>
						</div>
					</div>
				</section>

				<section className="w-full h-auto">
					<div className="mx-auto py-6 px-4 gradient rounded-xl flex items-center justify-center">
						<div className="text-center max-w-3xl mx-auto my-12 text-gray-950">
							<h2 className="text-3xl font-semibold mb-4 ">
								Ready To Accelerate Your Career?
							</h2>
							<p className="pb-6">
								Join thousands of professionals who enhance their careers with
								us.
							</p>
							<Link href="/dashboard" passHref>
								<Button
									size={"lg"}
									variant="secondary"
									className="h-11 mt-5 animate-bounce">
									Start Your Journey Today{" "}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
