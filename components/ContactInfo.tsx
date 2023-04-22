// Import
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

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
				<div className="flex flex-wrap items-center justify-between -mx-4">
					<div className="w-full px-4 mb-12 lg:w-auto lg:mb-0">
						<div className="max-w-lg">
							<motion.h2 variants={fadeInUp} className="text-4xl font-semibold">
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="my-10 py-10 w-full lg:max-w-3xl mt-4 text-center lg:text-left text-black"
							/>
						</div>
					</div>
					<motion.div
						variants={stagger}
						className="flex flex-col w-full gap-8 lg:w-auto lg:mr-28"
					>
						<motion.div variants={stagger}>
							<motion.h3
								variants={fadeInUp}
								className="mb-4 text-2xl font-semibold"
							>
								Address
							</motion.h3>
							<Paragraph
								content={address}
								tailwindStyling="w-full lg:max-w-3xl text-center lg:text-left text-black"
							/>
						</motion.div>
						<motion.div variants={stagger}>
							<motion.h3
								variants={fadeInUp}
								className="mb-4 text-2xl font-semibold"
							>
								Contacts
							</motion.h3>
							<motion.div variants={stagger} className="flex flex-col gap-3">
								<motion.div variants={fadeInUp}>
									<Link
										className="font-medium tracking-wide text-black hover:text-goldPrime"
										href={`mailto:${email}`}
									>
										{email}
									</Link>
								</motion.div>
								<motion.div variants={fadeInUp}>
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
