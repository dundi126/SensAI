import React from "react";

const IndustryInsightPage = () => {
	const isOnboarded = true;

	if (!isOnboarded) {
		redirect("/onboarding");
	}
	return <div>IndustryInsightPage</div>;
};

export default IndustryInsightPage;
