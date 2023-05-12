// Imports
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
				<div className="flex flex-col items-center justify-center mx-4 mt-8 lg:mx-10 lg:flex-row">
					{contentGrid?.map((keys) => (
						<TestimonialCard
							title={keys?.card?.name}
							image={keys?.card?.image}
							paragraph={keys?.card?.paragraph}
							jobPosition={keys?.card?.position}
							key={keys?.card?.id || keys?.card?.name}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Testimonial;
