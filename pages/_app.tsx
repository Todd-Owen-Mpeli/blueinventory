// Imports
import postHog from "posthog-js";
import {useRouter} from "next/router";
import {getAuth} from "firebase/auth";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {useState, useEffect} from "react";
import {PostHogProvider} from "posthog-js/react";
import {ApolloProvider} from "@apollo/client/react";
import initializeFirebase from "@/firebase/firebase";

// Styling
import "../styles/globals.scss";

// Components
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
	"/login",
	"/[slug]",
	"/sign-in",
	"/sign-up",
	"/checkout",
	"/api/sitemap.xml",
	"/industries/[slug]",
	"/page/preview/pageId=/[id]",
	"/operational-insights/[slug]",
	"/industries/preview/pageId=/[id]",
	"/operational-insights/preview/postId=/[id]",
];

const protectedPages: Array<string> = [
	"/dashboard",
	"/dashboard/items",
	"/dashboard/[slug]",
	"/dashboard/settings",
];

export default function App({Component, pageProps}: AppProps) {
	// FIREBASE //
	// Initializing Firebase
	initializeFirebase();

	// Retrieving Firebase User Details
	const auth = getAuth();
	const [signedInUser, setSignedInUser] = useState(false);

	/* Check if user is SIGNED IN if 
	True Displays Signed In Navbar */
	useEffect(() => {
		auth?.onAuthStateChanged((currentUser) => {
			currentUser ? setSignedInUser(true) : setSignedInUser(false);
		});

		return () => {
			signedInUser;
		};
	}, [signedInUser, auth]);

	// PROTECTED PAGES //
	// Public Pages: Get the pathname
	const {pathname} = useRouter();

	// Public Pages: Check if the current route matches a public page
	const isPublicPage = publicPages.includes(pathname);
	const isProtectedPage = protectedPages.includes(pathname);

	// NOT SIGNED-IN ERROR PAGE //
	// Error Page Content
	const errorPageContent = {
		title: "Something went wrong!",
		buttonLink: {
			url: "/",
			title: "Homepage",
			target: "",
		},
		buttonLinkTwo: {
			url: "/sign-in",
			title: "Sign In",
			target: "",
		},
		paragraph:
			"The page you are looking for is not accessible! Please login in or go back to homepage.",
		backgroundImage:
			"https://cmsblueinventory.com/wp-content/uploads/2023/05/pexels-proxyclick-visitor-management-system-2451566-min-scaled.jpg",
	};

	// COOKIES POLICY //
	// PostHog Cookies Policy
	const router = useRouter();

	// PostHog Cookies Policy
	useEffect(() => {
		// Track page views
		const handleRouteChange = () => postHog?.capture("$pageview");
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	});

	// PAGE LOADING ANIMATION //
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
				}, 5000);

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
				{isProtectedPage && signedInUser ? (
					<>
						<Loading />
						<Component {...pageProps} />
					</>
				) : isPublicPage ? (
					<div>
						<Loading />
						<Component {...pageProps} />
					</div>
				) : (
					<>
						<Loading />
						<ErrorPage
							title={errorPageContent?.title}
							paragraph={errorPageContent?.paragraph}
							buttonLink={errorPageContent?.buttonLink}
							buttonLinkTwo={errorPageContent?.buttonLinkTwo}
							backgroundImage={errorPageContent?.backgroundImage}
						/>
					</>
				)}
			</PostHogProvider>
		</ApolloProvider>
	);
}
