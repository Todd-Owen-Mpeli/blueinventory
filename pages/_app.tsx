// Import
import postHog from "posthog-js";
import {useRouter} from "next/router";
import {client} from "../config/apollo";
import {useState, useEffect} from "react";
import {PostHogProvider} from "posthog-js/react";
import {ApolloProvider} from "@apollo/client/react";

// Components
import CookiePolicyCard from "../components/Elements/CookiePolicyCard";

// Styling
import "../styles/globals.scss";

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

function MyApp({Component, pageProps}) {
	// PostHog Cookies Policy
	const router = useRouter();

	useEffect(() => {
		// Track page views
		const handleRouteChange = () => postHog?.capture("$pageview");
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	});

	// Page Animation Loader
	function Loading() {
		const router: any = useRouter();

		const [loading, setLoading]: any = useState(false);

		useEffect(() => {
			const handleStart = (url) => url !== router.asPath && setLoading(true);
			const handleComplete = (url) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 20000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					{/* LEGO SPINNER */}
					<div className="loader">
						<div className="box box0">
							<div></div>
						</div>
						<div className="box box1">
							<div></div>
						</div>
						<div className="box box2">
							<div></div>
						</div>
						<div className="box box3">
							<div></div>
						</div>
						<div className="box box4">
							<div></div>
						</div>
						<div className="box box5">
							<div></div>
						</div>
						<div className="box box6">
							<div></div>
						</div>
						<div className="box box7">
							<div></div>
						</div>
						<div className="ground">
							<div></div>
						</div>
					</div>
				</div>
			)
		);
	}
	return (
		<ApolloProvider client={client}>
			<PostHogProvider client={postHog}>
				{/* Cookie Policy Pop Up */}
				{postHog.has_opted_in_capturing() ||
				postHog.has_opted_out_capturing() ? null : (
					<CookiePolicyCard />
				)}
				<Loading />
				<Component {...pageProps} />
			</PostHogProvider>
		</ApolloProvider>
	);
}

export default MyApp;
