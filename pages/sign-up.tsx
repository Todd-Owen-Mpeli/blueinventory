// Imports
import type {GetStaticProps, NextPage} from "next";
import {IPageContext} from "@/types/context/public";
import {flexibleContentType} from "@/context/context";
import PageContextProvider from "@/components/Frontend/context/PageContextProvider";

// Components
import SignUp from "@/components/Frontend/SignUp";
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";

const signUpPage: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<>
			<PageContextProvider
				seo={seo}
				content={content}
				postTypeFlexibleContent={postTypeFlexibleContent}
			>
				<section
					className="min-h-screen bg-white bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `url("/svg/backgroundSVG/stacked-peaks-haikei-blue-darkBlue-two.svg")`,
					}}
				>
					<LayoutTwo pageTitle={`Sign Up`}>
						<div className="container flex flex-col items-center justify-center min-h-screen px-4 py-10 mx-auto overflow-hidden">
							<SignUp
								title={`Sign Up today`}
								paragraph={`We kindly request you to enter your details.`}
								paragraphTwo={`We have partnered with google to provide and ensure your online experience is secure and hassle-free.
						<br/>
						<br/>
						We're committed to providing you with a top-notch user experience. It's all about making your journey with us secure, convenient, and enjoyable.
						`}
							/>
						</div>
					</LayoutTwo>
				</section>
			</PageContextProvider>
		</>
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

export default signUpPage;
