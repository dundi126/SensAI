import React from "react";

const OnboardingForm = ({ industries }) => {
	const isOnboarded = true;

	if (!isOnboarded) {
		redirect("/onboarding");
	}

	return <div>Onboarding</div>;
};

export default OnboardingForm;
