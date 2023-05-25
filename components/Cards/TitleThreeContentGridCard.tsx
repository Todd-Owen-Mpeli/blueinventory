// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initial, fadeInUp, stagger} from "../../animations/animations";

// Components
import Paragraph from ".././Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const TitleThreeContentGridCard: FC<IProps> = ({
	title,
	paragraph,
	buttonLink,
}) => {
	return (
		<motion.div
			initial={initial}
			viewport={{once: true}}
			whileInView={fadeInUp}
			className="w-full p-8 md:w-1/3"
		>
			<div className="md:max-w-md">
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={stagger}
					className="flex flex-col justify-between h-full"
				>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className="mb-7"
					>
						<h3 className="text-xl font-semibold leading-snug mb-7">{title}</h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-10 font-medium leading-relaxed"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className={buttonLink?.url ? `block` : `hidden`}
					>
						<Link
							href={buttonLink?.url ? buttonLink?.url : `/`}
							target={buttonLink?.target}
							className="inline-flex items-center transition-all duration-200 ease-in-out text-blue max-w-max hover:text-goldPrime"
						>
							<span className="mr-2 font-semibold">{buttonLink?.title}</span>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default TitleThreeContentGridCard;
