import Link from "next/link";
import {FunctionComponent} from "react";
import AccordionCard from "./Cards/AccordionCard";
import styles from "../styles/components/FAQ.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	bottomText: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	accordion: [
		{
			id: string;
			title: string;
			paragraph: string;
		}
	];
}

const FAQ: FunctionComponent<IProps> = ({
	title,
	subtitle,
	accordion,
	bottomText,
	buttonLink,
}) => {
	// console.log(accordion);
	return (
		<section className={styles.faq}>
			<div className="relative z-10 container px-4 mx-auto">
				<div className="md:max-w-4xl px-0 mx-auto">
					<p className="mb-7 text-sm text-blue text-center font-semibold uppercase tracking-px">
						{subtitle}
					</p>
					<h2 className="mb-16 text-4xl md:text-5xl lg:text-7xl text-center font-bold font-heading tracking-px-n leading-normal">
						{title}
					</h2>
					<div className="mb-11 flex flex-col gap-3">
						{accordion.map((keys) => (
							<AccordionCard
								key={keys?.id}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
					<p className="text-grey text-center font-medium">
						<span>{bottomText}</span>
						<Link
							href={buttonLink?.url}
							target={buttonLink?.target}
							className="ml-2 font-semibold text-blue hover:text-limeGreen hover:ease-in-out hover:duration-200"
						>
							{buttonLink?.title}
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
