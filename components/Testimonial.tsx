// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITestimonial} from "@/components/types";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import TestimonialCard from "@/components/Cards/TestimonialCard";

const Testimonial: FC<ITestimonial> = ({title, paragraph, contentGrid}) => {
	return (
		<section className="pt-24 overflow-hidden bg-white pb-36">
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="container px-4 mx-auto"
			>
				<motion.h2
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mb-10 text-3xl font-bold text-center md:text-4xl "
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="my-5 text-base text-black text-center"
				/>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col items-center justify-center mx-4 mt-8 lg:mx-10 lg:flex-row"
				>
					{contentGrid?.length > 0 ? (
						contentGrid?.map((item, keys) => (
							<TestimonialCard
								key={keys}
								title={item?.card?.name}
								image={item?.card?.image}
								paragraph={item?.card?.paragraph}
								jobPosition={item?.card?.position}
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

export default Testimonial;
