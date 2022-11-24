import Link from "next/link";
import styles from "../styles/components/FAQ.module.scss";
import AccordionCard from "./AccordionCard";

const FAQ = (props) => {
	// console.log(props.accordion);

	return (
		<section className={styles.faq}>
			<div className="relative z-10 container px-4 mx-auto">
				<div className="md:max-w-4xl px-0 mx-auto">
					<p className="mb-7 text-sm text-blue text-center font-semibold uppercase tracking-px">
						{props?.subtitle}
					</p>
					<h2 className="mb-16 text-4xl md:text-5xl lg:text-7xl text-center font-bold font-heading tracking-px-n leading-normal">
						{props?.title}
					</h2>
					<div className="mb-11 flex flex-wrap gap-3">
						{props.accordion.map((keys) => (
							<AccordionCard
								key={keys.id}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
					<p className="text-grey text-center font-medium">
						<span>{props?.bottomText}</span>
						<Link
							href={props?.buttonLink?.url}
							target={props?.buttonLink?.target}
						>
							<a className="ml-2 font-semibold text-blue hover:text-limeGreen hover:ease-in-out hover:duration-200">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
