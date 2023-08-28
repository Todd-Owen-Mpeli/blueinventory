// Imports
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {initial, stagger} from "@/animations/animations";
import {ICardGridProps} from "@/types/Dashboard/components";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";
import {getUserItemsDocument} from "@/functions/Backend/firebase/getUserItemsDocument";

// Components
import Card from "./Cards/Card";

const CardGrid: FC = () => {
	const firebaseContext = useFirebaseContext();
	const userDocID: string | null = firebaseContext?.userDocId;
	const [itemsCollection, setItemsCollection] = useState<any | null>(null);

	useEffect(() => {
		const unsubscribe = async () => {
			if (userDocID) {
				const itemsArray = await getUserItemsDocument(userDocID);
				setItemsCollection(itemsArray);
			} else {
				setItemsCollection(null);
			}
		};

		return () => {
			unsubscribe();
		};
	}, [userDocID]);

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
					value={itemsCollection?.length}
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
