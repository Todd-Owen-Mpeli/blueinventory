import {FC} from "react";
import {motion} from "framer-motion";
import {fadeIn, stagger} from "../animations/animations";

// Components
import LogoCard from "../components/Cards/LogoCard";
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const Logos: FC<IProps> = ({title, logoGrid}) => {
	return (
		<section className="px-4 py-20 bg-white lg:px-0">
			<div className="container px-0 mx-auto">
				<motion.h2
					variants={fadeIn}
					className=" mb-20 text-black text-center tracking-wider leading-[2.75rem] font-[900] text-3xl md:text-5xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={`<p>We use cookies to personalize content, to provide social media
						features and to analyze our traffic. We also share information about
						your use of our site with our partners.</p>`}
					tailwindStyling="mt-3 mb-6 text-medium text-left"
				/>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-6 lg:justify-between"
					>
						{logoGrid.map((keys) => (
							<LogoCard
								image={keys?.image}
								key={keys?.id || keys?.image?.sourceUrl}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
