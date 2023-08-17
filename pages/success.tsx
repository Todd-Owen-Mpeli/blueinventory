/* eslint-disable react-hooks/rules-of-hooks */
// Imports
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import type {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/types/context/public/index";
import {ContentContext, flexibleContentType} from "@/context/context";

// Stripe
import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";

// Firebase
import {getAuth} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";
import {addNewFirebaseUserDocument} from "@/functions/Backend/firebase/addDocument";

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

// Components
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";
import CheckoutWelcome from "@/components/Frontend/CheckoutWelcome";

const success: NextPage<IContentContext> = ({
	seo,
	content,
	stripePlans,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	operationalInsights,
	themesOptionsContent,
	postTypeFlexibleContent,
	contentSliderPostsContent,
}) => {
	const auth = getAuth();
	const router = useRouter();
	const {session_id} = router.query;
	const [signedInUser, setSignedInUser] = useState(false);
	const [user, setUser] = useState<IFirebaseUser | null | any>(null);

	const [customerInfo, setCustomerInfo] = useState(null);

	useEffect(() => {
		/* Check if user is signed in
		and sets the Signed In details */
		const unsubscribe = auth?.onAuthStateChanged((currentUser) => {
			currentUser ? setSignedInUser(true) : setSignedInUser(false);

			// Firebase User Details
			const userDetails: IFirebaseUser = {
				uid: `${currentUser?.uid}`,
				email: `${currentUser?.email}`,
				photoURL: `${currentUser?.photoURL}`,
				providerId: `${currentUser?.providerId}`,
				phoneNumber: `${currentUser?.phoneNumber}`,
				displayName: `${currentUser?.displayName}`,
				creationTime: `${currentUser?.metadata.creationTime}`,
				lastSignInTime: `${currentUser?.metadata.lastSignInTime}`,
			};

			setUser(userDetails);
		});

		/* Collects Users google account & Stripe Checkout 
		Details and send it to the cloud Firestore Database */
		async function addUserData() {
			if (session_id && auth.currentUser) {
				// console.log("Session ID:", session_id);

				// Retrieve checkout session details from Stripe
				// const sessionId = session_id;
				// const response = await fetch(
				// 	`/api/stripe/GetCustomerSession?session_id=${sessionId}`
				// );
				// const data = await response.json();
				// setCustomerInfo(data.customer);

				// console.log(data);

				// Get the current user's details from Firebase Authentication
				const currentUser = auth.currentUser;

				// Save the Google & Stripe information to Cloud Firestore
				await addNewFirebaseUserDocument(currentUser, session_id);
			}
		}

		addUserData().then(() => {
			// Send user to the
			setTimeout(() => {
				router.push(`/dashboard`).catch(console.error);
			}, 10000);
		});

		return () => {
			unsubscribe();
		};
	}, [session_id, signedInUser, auth, router]);

	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				content: content,
				stripePlans: stripePlans,
				navbarMenuLinks: navbarMenuLinks,
				footerMenuLinks: footerMenuLinks,
				industriesMenuLinks: industriesMenuLinks,
				operationalInsights: operationalInsights,
				themesOptionsContent: themesOptionsContent,
				postTypeFlexibleContent: postTypeFlexibleContent,
				contentSliderPostsContent: contentSliderPostsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
				className="min-h-screen bg-white bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
				}}
			>
				<LayoutTwo pageTitle={`Success`}>
					<section className="container flex flex-col items-center justify-center min-h-screen px-4 py-10 mx-auto overflow-hidden">
						<CheckoutWelcome
							stripeSuccess={true}
							title={`Ready to get started?`}
							paragraph={`We're thrilled to have you on board and can't wait to see the insights and decisions you'll uncover using your new dashboard.
                            <br/>
                            <br/>
                            Whether you're tracking key performance metrics, analyzing trends, or making important decisions, this dashboard will be your go-to tool.`}
						/>
					</section>
				</LayoutTwo>
			</motion.div>
		</ContentContext.Provider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch remaining content simultaneously
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

	return {
		props: {
			seo: null,
			stripePlans,
			content: null,
			mainMenuLinks,
			navbarMenuLinks,
			pageTitle: null,
			footerMenuLinks,
			operationalInsights,
			industriesMenuLinks,
			themesOptionsContent,
			contentSliderPostsContent,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default success;