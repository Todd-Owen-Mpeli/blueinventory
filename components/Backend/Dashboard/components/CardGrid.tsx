// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useDashboardContext} from "@/context/dashboard";
import {initial, stagger} from "@/animations/animations";

// Components
import Card from "./Cards/Card";

const CardGrid: FC = () => {
	const DashboardContext = useDashboardContext();
	const totalItems = DashboardContext?.itemsCollection?.length;

	return (
		<>
			<motion.section
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="grid items-center w-full max-w-3xl grid-cols-1 gap-4 p-4 md:grid-cols-2"
			>
				<Card
					text={"Total Items"}
					backgroundImageOption={"One"}
					displayBackgroundImage={true}
					value={totalItems}
					paragraph={"Total created items"}
				/>
				<Card
					value={2}
					text={"Total Categories"}
					displayBackgroundImage={true}
					backgroundImageOption={"Three"}
					paragraph={"Total created categories"}
				/>
			</motion.section>
		</>
	);
};

export default CardGrid;
