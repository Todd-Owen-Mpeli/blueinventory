// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initial, fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	email: string;
	title: string;
	address: string;
	emailTwo: string;
	paragraph: string;
	phoneNumber: string;
	phoneNumberTwo: string;
}

const ContactInfo: FC<IProps> = ({
	email,
	title,
	address,
	emailTwo,
	paragraph,
	phoneNumber,
	phoneNumberTwo,
}) => {
	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center justify-around -mx-4">
					<div className="w-full px-4 lg:w-auto lg:mb-0">
						<div className="max-w-lg">
							<motion.h2
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-4xl font-semibold"
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="py-10 w-full lg:max-w-3xl text-center lg:text-left text-black"
							/>
						</div>
					</div>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col w-full gap-8 px-4 lg:w-auto lg:mr-28"
					>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
						>
							<motion.h3
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="mb-4 text-2xl font-semibold text-center lg:text-left"
							>
								Address
							</motion.h3>
							<Paragraph
								content={address}
								tailwindStyling="w-full lg:max-w-3xl text-center lg:text-left text-black"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
						>
							<motion.h3
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="mb-4 text-2xl font-semibold text-center lg:text-left"
							>
								Contacts
							</motion.h3>
							<motion.div
								initial={initial}
								viewport={{once: true}}
								whileInView={stagger}
								className="flex flex-col gap-3 text-center lg:text-left"
							>
								<motion.div
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
								>
									<Link
										className="font-medium tracking-wide text-black hover:text-goldPrime"
										href={`mailto:${email}`}
									>
										{email}
									</Link>
								</motion.div>
								<motion.div
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
								>
									<Link
										className="font-medium tracking-wide text-black hover:text-goldPrime"
										href={`mailto:${emailTwo}`}
									>
										{emailTwo}
									</Link>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
