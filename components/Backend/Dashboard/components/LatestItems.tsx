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
				<h2 className="p-2 mb-2 text-base font-semibold text-left cursor-default lg:text-medium">
					Latest items created
				</h2>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid items-center justify-between grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
				>
					{dashboardContext?.itemsCollection ? (
						dashboardContext?.itemsCollection?.map((item, keys) => (
							<Fragment key={keys}>
								<LatestItemsCard
									value={310.8}
									category={`Heavy Machinery`}
									itemName={`Clarke IG1700F 1.7kVA Open Frame Inverter Petrol Generator`}
									sourceUrl={`/img/49B66C3D-A985-492E-9120-782DB8E64414-huge.jpg`}
								/>
								<LatestItemsCard
									value={430.8}
									category={`Cordless SDS & SDS+ Drills`}
									itemName={`DeWalt DCH273P2 18V Li-Ion Cordless SDS+ Hammer Drill with 2 x 5Ah Batteries`}
									sourceUrl={`/img/53836173-5454-4F12-84D8-7ACC47140328-huge.jpg`}
								/>
								<LatestItemsCard
									value={11.99}
									category={`Tape Measures`}
									itemName={`Stanley FatMax 5m/16ft Blade Armor Tape`}
									sourceUrl={`/img/71SmQytuuYL._AC_SL1500_.jpg`}
								/>
								<LatestItemsCard
									value={32.95}
									category={`Computer Cables`}
									itemName={`CERRXIAN RJ45 Female to 8 Pin Screw Block Terminal solderless Cable,30CM Cat7 Cat6 Cat5 Cat5e Ethernet solderless Extension Cable`}
									sourceUrl={`/img/126C7E5F-1BBB-4297-B068-93CDD1CBBFE7-huge.jpg`}
								/>
								{/* <LatestItemsCard
									value={item?.value}
									itemName={item?.itemName}
									category={item?.category}
									sourceUrl={item?.photoURL}
								/> */}
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
