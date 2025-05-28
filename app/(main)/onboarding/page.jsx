import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import React from "react";

const OnboardingPage = () => {
	const isOnboarded = true;

	if (isOnboarded) {
		redirect("/dashboard");
	}
	return (
		<main>
			<OnboardingForm industries={industries} />
		</main>
	);
};

export default OnboardingPage;
