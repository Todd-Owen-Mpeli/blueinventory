// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useDashboardContext} from "@/context/dashboard";
import {stagger, initial} from "@/animations/animations";

// Components
import LatestItemsCard from "./Cards/LatestItemsCard";

const LatestItems: FC = () => {
	const dashboardContext = useDashboardContext();

	return (
		<>
			<div>
				<h2 className="p-2 text-base font-semibold text-left cursor-default lg:text-medium">
					Latest items created
				</h2>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid items-center justify-between grid-cols-2 gap-4 lg:grid-cols-4"
				>
					{dashboardContext?.itemsCollection ? (
						dashboardContext?.itemsCollection?.map((item, keys) => (
							<Fragment key={keys}>
								<LatestItemsCard
									itemName={item?.itemName}
									sourceUrl={`/img/_MG_5067.jpg`}
									value={item?.value}
								/>
								<LatestItemsCard
									itemName={item?.itemName}
									sourceUrl={`/img/_MG_3577.jpg`}
									value={item?.value}
								/>
								<LatestItemsCard
									itemName={item?.itemName}
									sourceUrl={`/img/_MG_4809-2.jpg`}
									value={item?.value}
								/>
								<LatestItemsCard
									itemName={item?.itemName}
									sourceUrl={`/img/_MG_3455.jpg`}
									value={item?.value}
								/>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default LatestItems;
