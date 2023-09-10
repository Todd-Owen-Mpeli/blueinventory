// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ILogos} from "@/types/components/public";
import {initial, initialTwo, fadeIn, stagger} from "@/animations/animations";

// Components
import LogoCard from "@/components/Frontend/Cards/LogoCard";
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const logos: FC<ILogos> = ({title, paragraph, logoGrid}) => {
	return (
		<div className="px-4 py-10 bg-white lg:px-0">
			<div className="container px-0 mx-auto">
				<motion.h2
					initial={initialTwo}
					viewport={{once: true}}
					whileInView={fadeIn}
					className="mb-10 text-center tracking-wider leading-[2.75rem] font-semibold text-3xl md:text-4xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="my-5 w-full lg:max-w-3xl mx-auto text-left"
				/>
				<div className="max-w-6xl mx-auto mt-20">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-4 lg:justify-between"
					>
						{logoGrid?.length > 0 ? (
							logoGrid.map((item, keys) => (
								<Fragment key={keys}>
									<LogoCard key={keys} image={item?.image} />
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default logos;
