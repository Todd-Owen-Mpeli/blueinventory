// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
}

const SignIn: FC<IProps> = ({title, paragraph}) => {
	return (
		<section className="container relative px-4 mx-auto">
			<motion.div
				variants={stagger}
				className="max-w-lg px-10 mx-auto bg-white py-14 rounded-xl"
			>
				<motion.div variants={stagger}>
					<motion.h3
						variants={fadeInUp}
						className="mb-4 text-lg font-semibold text-darkBlue"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={paragraph}
						tailwindStyling="mb-10 text-base text-black"
					/>
				</motion.div>
				<motion.div variants={stagger} className="flex flex-col my-6 gap-y-4">
					<Link href={`/pricing/#Pricing`}>
						<motion.button
							variants={fadeInUp}
							aria-label="Login with Google"
							type="button"
							className="relative flex items-center justify-center w-full p-4 space-x-4 overflow-hidden transition duration-200 border rounded-md group focus:ring-2 focus:ring-offset-1 text-darkBlue hover:text-white border-darkBlue hover:border-blue focus:ring-blue"
						>
							<div className="absolute top-0 w-full h-full transition duration-200 transform bg-blue right-full group-hover:translate-x-full group-hover:scale-102" />
							<svg
								fill="#e8b042"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								className="relative w-5 h-5 fill-current"
							>
								<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
							</svg>
							<p className="relative">Continue with Google</p>
						</motion.button>
					</Link>
					<Link href={`/pricing/#Pricing`}>
						<motion.button
							variants={fadeInUp}
							aria-label="Login with Facebook"
							role="button"
							className="relative flex items-center justify-center w-full p-4 space-x-4 overflow-hidden transition duration-200 border rounded-md group focus:ring-2 focus:ring-offset-1 text-darkBlue hover:text-white border-darkBlue hover:border-blue focus:ring-blue"
						>
							<div className="absolute top-0 w-full h-full transition duration-200 transform bg-blue right-full group-hover:translate-x-full group-hover:scale-102" />
							<svg
								fill="#e8b042"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								className="relative fill-current w-7 h-7"
							>
								<path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
							</svg>
							<p className="relative">Continue with Facebook</p>
						</motion.button>
					</Link>
					<Link href={`/pricing/#Pricing`}>
						<motion.button
							variants={fadeInUp}
							aria-label="Login with Apple"
							role="button"
							className="relative flex items-center justify-center w-full p-4 space-x-4 overflow-hidden transition duration-200 border rounded-md group focus:ring-2 focus:ring-offset-1 text-darkBlue hover:text-white border-darkBlue hover:border-blue focus:ring-blue"
						>
							<div className="absolute top-0 w-full h-full transition duration-200 transform bg-blue right-full group-hover:translate-x-full group-hover:scale-102" />
							<svg
								height="2500"
								width="2158"
								fill="#e8b042"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -3.552713678800501e-15 820 950"
								className="relative w-5 h-5 fill-current"
							>
								<path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z" />
							</svg>
							<p className="relative">Continue with Apple</p>
						</motion.button>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default SignIn;
