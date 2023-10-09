/* eslint-disable react-hooks/rules-of-hooks */
// Imports
import {useEffect} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import type {NextPage, GetStaticProps} from "next";
import {IPageContext} from "@/types/context/public";
import {flexibleContentType} from "@/context/context";
import PageContextProvider from "@/components/Frontend/context/PageContextProvider";

// Firebase
import {getAuth} from "firebase/auth";
import {useFirebaseContext} from "@/context/Firebase";
import {createNewUserWithAuthProviders} from "@/functions/Backend/firebase/createNewUserWithAuthProviders";

// Components
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";
import CheckoutWelcome from "@/components/Frontend/CheckoutWelcome";

const success: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	const firebaseContext = useFirebaseContext();

	const auth = getAuth();
	const router = useRouter();
	const {session_id} = router.query;

	useEffect(() => {
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
				createNewUserWithAuthProviders(currentUser, session_id);
			}
		}

		addUserData().then(() => {
			// Send user to the
			setTimeout(() => {
				router.push(`/dashboard`).catch(console.error);
			}, 10000);
		});

		return () => {
			auth;
		};
	}, [session_id, auth, router]);

	return (
		<PageContextProvider
			seo={seo}
			content={content}
			postTypeFlexibleContent={postTypeFlexibleContent}
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
		</PageContextProvider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			seo: null,
			content: null,
			pageTitle: null,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default success;
