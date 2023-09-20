// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITestimonial} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";
import TestimonialCard from "@/components/Frontend/Cards/TestimonialCard";

const Testimonial: FC<ITestimonial> = ({title, paragraph, contentGrid}) => {
	return (
		<>
			<div className="bg-purple">
				<div
					className="pt-24 overflow-hidden bg-white pb-36"
					style={{
						clipPath: `polygon(0.8% 0%, 100% 0%, 100% 99%, 2.8% 97%)`,
					}}
				>
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
							tailwindStyling="my-5  text-black text-center"
						/>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col items-center justify-center gap-6 mx-4 my-8 lg:items-start lg:mx-10 lg:flex-row"
						>
							{contentGrid?.length > 0 ? (
								contentGrid?.map((item, keys) => (
									<Fragment key={keys}>
										<TestimonialCard
											key={keys}
											title={item?.card?.name}
											image={item?.card?.image}
											paragraph={item?.card?.paragraph}
											jobPosition={item?.card?.position}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
