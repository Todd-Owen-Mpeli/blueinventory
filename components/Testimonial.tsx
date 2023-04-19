// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import TestimonialCard from "./Cards/TestimonialCard";

interface IProps {
	title: string;
	paragraph: string;
	contentGrid: [
		{
			card: {
				id: string;
				name: string;
				position: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
}

const Testimonial: FC<IProps> = ({title, paragraph, contentGrid}) => {
	return (
		<section className="pt-24 overflow-hidden bg-white pb-36">
			<motion.div className="container px-4 mx-auto">
				<motion.h2 className="mb-10 text-3xl font-bold text-center md:text-4xl ">
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="my-5 text-base text-black text-center"
				/>
				<div className="flex flex-row items-center justify-center mx-10 mt-8">
					{contentGrid?.map((keys) => (
						<TestimonialCard
							key={keys?.card?.id}
							title={keys?.card?.name}
							image={keys?.card?.image}
							jobPosition={keys?.card?.position}
							paragraph={keys?.card?.paragraph}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Testimonial;
