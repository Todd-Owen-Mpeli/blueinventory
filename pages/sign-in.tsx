// Imports
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/types/context/public/index";
import {ContentContext, flexibleContentType} from "@/context/context";

// Components
import SignIn from "@/components/Frontend/SignIn";
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";
import {useGlobalContext} from "@/context/Global";

const signInPage: NextPage<IContentContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				content: content,
				postTypeFlexibleContent: postTypeFlexibleContent,
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
					backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
				}}
			>
				<LayoutTwo pageTitle={`Sign In`}>
					<section className="container flex flex-col items-center justify-center min-h-screen px-4 py-10 mx-auto overflow-hidden">
						<SignIn
							title={`Login in to your account`}
							paragraph={`Welcome Back! We kindly request you to enter your details.`}
							paragraphTwo={`We have partnered with google to provide and ensure your online experience is secure and hassle-free.
							<br/>
							<br/>
							We're committed to providing you with a top-notch user experience. It's all about making your journey with us secure, convenient, and enjoyable.
							`}
						/>
					</section>
				</LayoutTwo>
			</motion.div>
		</ContentContext.Provider>
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

export default signInPage;
