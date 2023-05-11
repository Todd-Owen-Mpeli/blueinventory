// Import
import postHog from "posthog-js";
import {useRouter} from "next/router";
import type {AppProps} from "next/app";
import {client} from "../config/apollo";
import {useState, useEffect} from "react";
import {PostHogProvider} from "posthog-js/react";
import {ApolloProvider} from "@apollo/client/react";

// Styling
import "../styles/globals.scss";
import ErrorPage from "@/components/Elements/ErrorPage";

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

/* Public Pages Authentication: Pages that don't require 
users to sign-in to view them */
const publicPages: Array<string> = [
	"/",
	"/404",
	"/about",
	"/pricing",
	"/sign-in",
	"/contact",
	"/sign-up",
	"/features",
	"/checkout",
	"/privacy-policy",
	"/api/sitemap.xml",
	"/terms-conditions",
	"/dashboard/[path]",
	"/industries/[slug]",
	"/operational-insights",
	"/operational-insights/[slug]",
];

export default function App({Component, pageProps}: AppProps) {
	// Public Pages: Get the pathname
	const {pathname} = useRouter();

	// Public Pages: Check if the current route matches a public page
	const isPublicPage = publicPages.includes(pathname);

	// Error Page Content
	const errorPageContent = {
		title: "Something went wrong!",
		buttonLink: {
			url: "/",
			title: "Homepage",
			target: " ",
		},
		paragraph:
			"The page you are looking for is not accessible! Please sign in or go back to homepage.",
		backgroundImage:
			"http://blueinventory.local/wp-content/uploads/2023/04/pexels-antoni-shkraba-7163406-min-scaled.jpg",
	};

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
			const handleStart = (url: any) =>
				url !== router.asPath && setLoading(true);
			const handleComplete = (url: any) =>
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
				{isPublicPage ? (
					<>
						<Loading />
						<Component {...pageProps} />
					</>
				) : (
					<>
						<Loading />
						<ErrorPage
							title={errorPageContent?.title}
							paragraph={errorPageContent?.paragraph}
							buttonLink={errorPageContent?.buttonLink}
							backgroundImage={errorPageContent?.backgroundImage}
						/>
					</>
				)}
			</PostHogProvider>
		</ApolloProvider>
	);
}
