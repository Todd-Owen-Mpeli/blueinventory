// Imports
import {motion} from "framer-motion";
import type {NextPage, GetServerSideProps} from "next";
import {initial, stagger} from "../animations/animations";
import {getThemesOptionsContent} from "../functions/themesOptions";

// Styling
import styles from "../styles/pages/Dashboard.module.scss";

// Components

interface IDashboard {
	themesOptionsContent: {
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyrightText: string;
		errorPageContent: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
}

const dashboard: NextPage<IDashboard> = ({themesOptionsContent}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
			className="min-h-screen bg-darkBlue"
		>
			<section className={styles.dashboard}>
				<div className="container px-4 mx-auto">
					<motion.h1
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
					>
						Dashboard
					</motion.h1>
				</div>
			</section>
		</motion.div>
	);
};

export default dashboard;

export const getServerSideProps: GetServerSideProps = async () => {
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			themesOptionsContent,
		},
	};
};
