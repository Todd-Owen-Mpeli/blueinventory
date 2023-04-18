// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	content: {
		name: string;
		title: string;
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
	contentTwo: {
		name: string;
		title: string;
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

const Testimonial: FC<IProps> = ({title, paragraph, content, contentTwo}) => {
	return (
		<section className="pt-24 overflow-hidden bg-white pb-36">
			<motion.div className="container px-4 mx-auto">
				<motion.h2 className="mb-10 text-3xl font-bold text-center md:text-4xl ">
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="mb-10 text-base text-black text-center"
				/>
				<div className="flex flex-wrap mt-8">
					<div className="w-full p-8 md:w-1/2">
						<div className="flex flex-col justify-center -m-4 lg:flex-row sm:items-center">
							<div
								className={
									content?.image?.sourceUrl ? `w-full p-4 sm:w-auto` : `hidden`
								}
							>
								<div className="inline-block mx-auto overflow-hidden max-w-max rounded-xl">
									<Image
										alt={content?.image?.altText}
										src={content?.image?.sourceUrl}
										width={content?.image?.mediaDetails?.width}
										height={content?.image?.mediaDetails?.height}
										className="min-h-[250px] object-cover object-center transition duration-1000 ease-in-out transform hover:scale-105"
									/>
								</div>
							</div>
							<div className="w-full p-4 sm:flex-1">
								<div className="text-center lg:text-left sm:w-64">
									<h3 className="mb-4 text-lg font-bold leading-snug text-black">
										{content?.title}
									</h3>
									<Paragraph
										content={content?.paragraph}
										tailwindStyling="text-base text-black mb-4 leading-relaxed"
									/>
									<h3 className="font-bold text-darkBlue">{content?.name}</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full p-8 md:w-1/2">
						<div className="flex flex-col justify-center -m-4 lg:flex-row sm:items-center">
							<div
								className={
									contentTwo?.image?.sourceUrl
										? `w-full p-4 sm:w-auto`
										: `hidden`
								}
							>
								<div className="inline-block mx-auto overflow-hidden max-w-max rounded-xl">
									<Image
										alt={contentTwo?.image?.altText}
										src={contentTwo?.image?.sourceUrl}
										width={contentTwo?.image?.mediaDetails?.width}
										height={contentTwo?.image?.mediaDetails?.height}
										className="min-h-[250px] object-cover object-center transition duration-1000 ease-in-out transform hover:scale-105"
									/>
								</div>
							</div>
							<div className="w-full p-4 sm:flex-1">
								<div className="text-center lg:text-left sm:w-64">
									<h3 className="mb-4 text-lg font-bold leading-snug text-black">
										{contentTwo?.title}
									</h3>
									<Paragraph
										content={contentTwo?.paragraph}
										tailwindStyling="text-base text-black mb-4 px-0 leading-relaxed"
									/>
									<h3 className="font-bold text-darkBlue">
										{contentTwo?.name}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Testimonial;
