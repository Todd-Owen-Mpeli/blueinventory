// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IFaq} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import FAQCard from "@/components/Cards/FAQCard";
import Paragraph from "@/components/Elements/Paragraph";

const FAQ: FC<IFaq> = ({icon, title, paragraph, qagrid}) => {
	return (
		<section className="relative px-4 py-20 overflow-hidden bg-white">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={fadeInUp}
				className="absolute top-[30px] right-[-75px] md:right-[145px]"
			>
				<Image
					alt={icon?.altText}
					src={icon?.sourceUrl}
					width={icon?.mediaDetails?.width}
					height={icon?.mediaDetails?.height}
					className={
						icon?.sourceUrl
							? `block w-full max-w-[250px] h-[500px] object-contain object-center`
							: `hidden`
					}
				/>
			</motion.div>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="container relative z-50 px-4 mx-auto"
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
