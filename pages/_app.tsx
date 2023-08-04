// Imports
import postHog from "posthog-js";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {useState, useEffect} from "react";
import {Auth, getAuth} from "firebase/auth";
import {PostHogProvider} from "posthog-js/react";
import {NextRouter, useRouter} from "next/router";
import {ApolloProvider} from "@apollo/client/react";
import initializeFirebase from "@/firebase/firebase";
import {IErrorPageContent} from "@/types/context/public";

// Styling
import "../styles/globals.scss";

// Components
import ErrorPage from "@/components/Frontend/Elements/ErrorPage";

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
	"/payment",
	"/sign-up",
	"/checkout",
	"/wp-admin/",
	"/wp-login",
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
	"/dashboard/settings",
	"/dashboard/documents",
	"/dashboard/items/add",
	"/dashboard/items/[id]",
	"/dashboard/categories",
];

export default function App({Component, pageProps}: AppProps) {
	const router: NextRouter = useRouter();
	// FIREBASE //
	// Initializing Firebase
	initializeFirebase();

	// Retrieving Firebase User Details
	const auth: Auth = getAuth();
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
	const isPublicPage: boolean = publicPages.includes(pathname);
	const isProtectedPage: boolean = protectedPages.includes(pathname);

	// NOT SIGNED-IN ERROR PAGE //
	// Error Page Content
	const errorPageContent: IErrorPageContent = {
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
			"/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg",
	};

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

	// PAGE LOADING ANIMATION //
	// Page Animation Loader
	function Loading() {
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
