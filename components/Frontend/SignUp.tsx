// Imports
import Link from "next/link";
import {FC} from "react";
import {motion} from "framer-motion";
import {ISignUp} from "@/types/components/public";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import SignInAuth from "./Elements/SignInAuth";
import FormIntro from "./Elements/Forms/FormIntro";
import SignUpForm from "./Elements/Forms/SignUpForm";
import SignInDivider from "./Elements/Forms/SignInDivider";

const SignUp: FC<ISignUp> = ({title, paragraph, paragraphTwo}) => {
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
				<SignUpForm />
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="mt-4"
				>
					<p className="text-sm text-center dark:text-grey">
						Already have an account?
						<Link
							href={`/sign-in`}
							rel="noopener noreferrer"
							className="ml-1 focus:underline text-darkBlue hover:text-blue hover:underline"
						>
							Sign In here
						</Link>
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default SignUp;
