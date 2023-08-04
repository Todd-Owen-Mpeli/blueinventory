// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {initial, stagger} from "@/animations/animations";

// Components
import Card from "./Cards/Card";

const CardGrid: FC = () => {
	return (
		<>
			<motion.section
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="grid items-center w-full max-w-3xl grid-cols-1 gap-4 p-4 md:grid-cols-2"
			>
				<Card
					value={"324"}
					text={"Total Items"}
					backgroundImageOption={"One"}
					displayBackgroundImage={true}
					paragraph={"+18% Since last week"}
				/>
				<Card
					value={"2"}
					text={"Total Categories"}
					displayBackgroundImage={true}
					backgroundImageOption={"Three"}
					paragraph={"+18% Since last week"}
				/>
			</motion.section>
		</>
	);
};

export default CardGrid;
