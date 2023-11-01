// Imports
import {motion} from "framer-motion";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {useState, useEffect} from "react";
import {NextRouter, useRouter} from "next/router";
import {ApolloProvider} from "@apollo/client/react";

// Global Context Provider
import {
	IGlobalContext,
	IFirebaseContext,
	IErrorPageContent,
} from "@/types/context/public";

// Firebase
import {Auth, getAuth} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";
import initializeFirebase from "@/firebase/firebase";
import {getUserDocument} from "@/functions/Backend/firebase/getUserDocument";
import {getUserItemsDocument} from "@/functions/Backend/firebase/getUserItemsDocument";

// Stripe Functions
import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "@/functions/Frontend/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/Frontend/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/Frontend/graphql/Queries/GetAllContentSliderPosts";
import {getAllOperationalInsightsContent} from "@/functions/Frontend/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Styling
import "../styles/globals.scss";

// Components
import Footer from "@/components/Frontend/Global/Footer";
import ErrorPage from "@/components/Frontend/Elements/ErrorPage";
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import GlobalContextProvider from "@/components/Frontend/context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Frontend/context/PostHogProviderContext";
import FirebaseContextProvider from "@/components/Frontend/context/FirebaseContextProvider";
import DashboardGlobalContextProvider from "@/components/Frontend/context/DashboardGlobalContextProvider";
import GoogleTranslateContextProvider from "@/components/Frontend/context/GoogleTranslateContextProvider";

/* Public Pages Authentication: Pages that don't require 
users to sign-in to view them */
const publicPages: Array<string> = [
	"/",
	"/404",
	"/login",
	"/[slug]",
	"/sign-in",
	"/payment",
	"/success",
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

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	const router: NextRouter = useRouter();

	// FIREBASE //
	// Initializing Firebase
	initializeFirebase();

	// Retrieving Firebase User Details
	const auth: Auth = getAuth();
	const [signedInUser, setSignedInUser] = useState(false);
	const [userData, setUserData] = useState<IFirebaseUser | null>(null);
	const [userDocId, setUserDocId] = useState<string | null>(null);
	const [itemsCollection, setItemsCollection] = useState<any[] | null>(null);
	const [mediaFilesCollection, setMediaFilesCollection] = useState<
		any[] | null
	>(null);
	const firebaseUser: IFirebaseContext = {
		userData: userData,
		userDocId: userDocId,
		signedInUser: signedInUser,
	};

	// const providerId = currentUser?.providerData[0]?.providerId;
	// setUserDocId(providerId === "password" ? currentUser?.uid : userDoc.docUid);

	/* Check if user is SIGNED IN if 
	True Displays Signed In Navbar */
	useEffect(() => {
		if (!userData) {
			const unsubscribe = auth?.onAuthStateChanged(async (currentUser: any) => {
				if (currentUser) {
					setSignedInUser(true);
					setUserData(currentUser);

					/* Retrieves the current users Document Data 
					& Document Unique Identification */
					const userDoc = await getUserDocument(currentUser?.uid);
					const docID =
						currentUser?.providerData[0]?.providerId === "password"
							? currentUser?.uid
							: userDoc.docUid;

					setUserDocId(docID);

					/* Retrieves the current users 
					Items List Document Data */
					const itemsArray = await getUserItemsDocument(docID);
					setItemsCollection(itemsArray);

					/* Retrieves the current users 
					Media Files List Document Data */
					const mediaFilesArray = await getUserItemsDocument(docID);
					setMediaFilesCollection(mediaFilesArray);
				} else if (!currentUser) {
					setSignedInUser(false);
					setItemsCollection(null);
					setMediaFilesCollection(null);
				}
			});

			return () => {
				unsubscribe();
			};
		}
	}, [auth]);

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
		<>
			<ApolloProvider client={client}>
				<FirebaseContextProvider firebaseUserUser={firebaseUser}>
					<motion.section
						exit={{
							opacity: 0,
						}}
						initial="initial"
						animate="animate"
					>
						{isProtectedPage && signedInUser ? (
							<>
								<DashboardGlobalContextProvider
									pageTitle={`Dashboard`}
									itemsCollection={itemsCollection}
									mediaFilesCollection={mediaFilesCollection}
								>
									<Layout>
										<Loading />
										<Component {...pageProps} />
									</Layout>
								</DashboardGlobalContextProvider>
							</>
						) : isPublicPage ? (
							<>
								<GlobalContextProvider globalProps={globalProps}>
									<GoogleTranslateContextProvider>
										{/* Cookie Policy Pop Up */}
										<PostHogContextProvider />
										<Loading />
										<Component {...pageProps} />
										<Footer />
									</GoogleTranslateContextProvider>
								</GlobalContextProvider>
							</>
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
					</motion.section>
				</FirebaseContextProvider>
			</ApolloProvider>
		</>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const [
		stripePlans,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		industriesMenuLinks,
		themesOptionsContent,
		operationalInsights,
		contentSliderPostsContent,
	] = await Promise.all([
		getAllStripePaymentPlans(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getIndustriesMenuLinks(),
		getThemesOptionsContent(),
		getAllOperationalInsightsContent(),
		getContentSliderBlogPostsPostsContent(),
	]);

	const globalProps: IGlobalContext = {
		stripePlans: stripePlans,
		mainMenuLinks: mainMenuLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		industriesMenuLinks: industriesMenuLinks,
		themesOptionsContent: themesOptionsContent,
		operationalInsights: operationalInsights,
		contentSliderPostsContent: contentSliderPostsContent,
	};

	return {
		pageProps,
		globalProps,
	};
};
