"use client";

// Imports
import {FC, useEffect} from "react";
import {NextRouter, useRouter} from "next/router";

// PostHog Cookies Policy
import postHog from "posthog-js";
import {PostHogProvider} from "posthog-js/react";

// Components
import CookiePolicyCard from "../Elements/CookiePolicyCard";

const PostHogContextProvider: FC = () => {
	const router: NextRouter = useRouter();

	// Check that PostHog is client-side (used to handle Next.js SSR)
	if (typeof window !== "undefined") {
		postHog.init(`${process.env.POSTHOG_KEY}`, {
			api_host: `${process.env.POSTHOG_HOST}` || "https://app.posthog.com",
			// Disable in development
			loaded: (postHog) => {
				if (process.env.NODE_ENV === "development") postHog.opt_out_capturing();
			},
		});
	}

	// COOKIES POLICY //
	// PostHog Cookies Policy
	useEffect(() => {
		// Track page views
		const handleRouteChange = () => postHog?.capture("$pageview");
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	});

	return (
		<>
			<PostHogProvider client={postHog}>
				{/* Cookie Policy Pop Up */}
				{typeof window == "undefined" ? (
					<></>
				) : postHog?.has_opted_in_capturing() ||
				  postHog?.has_opted_out_capturing() ? null : (
					<CookiePolicyCard />
				)}
			</PostHogProvider>
		</>
	);
};

export default PostHogContextProvider;
