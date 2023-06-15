// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFaq} from "@/components/types";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import FAQCard from "@/components/Cards/FAQCard";
import Paragraph from "@/components/Elements/Paragraph";

const FAQ: FC<IFaq> = ({title, paragraph, qagrid}) => {
	return (
		<section className="px-4 py-20 bg-white">
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="container px-4 mx-auto"
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="flex flex-col mb-12 lg:flex-row lg:justify-between lg:items-center"
				>
					<div className="mb-2 lg:w-1/3 lg:pr-16 lg:mb-8">
						<h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
					</div>
					<div className="text-sm lg:text-base lg:w-1/3">
						<Paragraph
							content={paragraph}
							tailwindStyling="text-base tracking-tight font-medium text-black mb-16"
						/>
					</div>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid grid-cols-1 gap-4 px-4 -m-8 sm:grid-cols-2 xl:grid-cols-3"
				>
					{qagrid?.length > 0 ? (
						qagrid?.map((item, keys) => (
							<FAQCard
								key={keys}
								title={item?.title}
								paragraph={item?.paragraph}
							/>
						))
					) : (
						<></>
					)}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default FAQ;
