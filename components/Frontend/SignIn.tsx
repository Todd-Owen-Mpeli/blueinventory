// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ISignIn} from "@/types/components/public";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import SignInAuth from "./Elements/SignInAuth";
import FormIntro from "./Elements/Forms/FormIntro";
import LoginForm from "./Elements/Forms/LoginForm";
import SignInDivider from "./Elements/Forms/SignInDivider";

const SignIn: FC<ISignIn> = ({title, paragraph, paragraphTwo}) => {
	return (
		<div className="container relative px-0 mx-auto">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className="max-w-md px-10 mx-auto bg-white py-14 rounded-xl"
			>
				<FormIntro title={title} paragraph={paragraph} />
				<SignInAuth />
				<SignInDivider />
				{/* <motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="flex items-center mb-6"
				>
					<Paragraph
						content={paragraphTwo}
						tailwindStyling="mb-4 text-base text-darkBlue"
					/>
				</motion.div> */}
				{/* Sign Up Form */}
				<LoginForm />
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="mt-4"
				>
					<p className="text-sm text-center dark:text-grey">
						Don&apos;t have an account?
						<Link
							href={`/pricing/#Pricing`}
							rel="noopener noreferrer"
							className="ml-1 focus:underline text-darkBlue hover:text-blue hover:underline"
						>
							Sign up here
						</Link>
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default SignIn;
