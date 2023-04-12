import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import Paragraph from "../Elements/Paragraph";
import {fadeInUp} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const ErrorPage: FC<IProps> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<section
			className="h-[100vh] bg-cover bg-center bg-[no-repeat] flex flex-col justify-center items-center"
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.65),rgba(1, 42, 45, 0.65)),
									url("${backgroundImage}")`,
			}}
		>
			<div className="px-10 my-auto overflow-hidden py-44">
				<div className="container p-0 mx-auto">
					<motion.h1
						variants={fadeInUp}
						className="mb-4 text-5xl lg:text-7xl text-white text-center font-[600] font-heading leading-tight"
					>
						{title}
					</motion.h1>
					<Paragraph
						content={paragraph}
						tailwindStyling="mx-auto my-10 text-lg leading-relaxed text-center text-white md:max-w-md"
					/>
					<div className="flex flex-col items-center justify-center mx-auto md:max-w-max">
						<motion.button variants={fadeInUp} type="button">
							<Link
								href={buttonLink?.url ? buttonLink?.url : `/`}
								target={buttonLink?.target}
								className="flex flex-row px-6 py-4 leading-4 text-white transition-all duration-500 ease-in-out rounded-lg lg:py-6 lg:px-20 bg-blue hover:bg-blueTwo"
							>
								<svg
									className="mr-2.5 text-white"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<span className="text-medium tracking-wider text-white font-[900]">
									{buttonLink?.title}
								</span>
							</Link>
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
