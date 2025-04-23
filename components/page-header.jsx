import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FileText, LayoutDashboard, StarsIcon } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PageHeader = () => {
	return (
		<header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
			<nav className="container mx-auto px-4 h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center">
					<Image
						src="/logo.png"
						alt="Logo"
						width={200}
						height={60}
						className="mr-2 h-12 w-auto object-contain"
					/>
				</Link>

				<div className="flex items-center gap-2 md:gap-4">
					<SignedIn>
						<Link href={"dashboard"}>
							<Button>
								<LayoutDashboard className=" h-4 w-4" />
								<span className="hidden md:block">Industry Insights</span>
							</Button>
						</Link>
					</SignedIn>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Button>
								<StarsIcon className=" h-4 w-4" />
								<span className="hidden md:block"> Growth Tools</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>
								<Link href={"/resume"} className="flex items-center gap-2">
									<FileText className=" h-4 w-4" />
									<span className="hidden md:block"> Resume Builder</span>
								</Link>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href={"/resume"} className="flex items-center gap-2">
									<FileText className=" h-4 w-4" />
									<span className="hidden md:block"> Resume Builder</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href={"/resume"} className="flex items-center gap-2">
									<FileText className=" h-4 w-4" />
									<span className="hidden md:block"> Resume Builder</span>
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>

			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</header>
	);
};

export default PageHeader;
