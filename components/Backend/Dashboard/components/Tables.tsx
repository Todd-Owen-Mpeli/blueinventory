// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useDashboardContext} from "@/context/dashboard";
import {fadeIn, initialTwo} from "@/animations/animations";
import styles from "@/styles/pages/Dashboard.module.scss";

// Components;
import TableCard from "./Cards/TableCard";

const Tables: FC = () => {
	const DashboardContext = useDashboardContext();

	return (
		<>
			<section
				className={
					styles.tables +
					` w-full h-full p-6 overflow-hidden bg-white rounded-2xl`
				}
			>
				<motion.h3
					initial={initialTwo}
					viewport={{once: true}}
					whileInView={fadeIn}
					className="pb-8 text-lg font-semibold text-darkBlue"
				>
					Created Items
				</motion.h3>
				<div className="w-full mb-5 overflow-x-auto">
					<table className="w-full min-w-max">
						<thead>
							<tr className="text-left text-black">
								<th className="pb-5 border-b border-black">
									<span className="mx-1.5  font-semibold capitalize">Name</span>
								</th>
								<th className="pb-5 border-b border-black">
									<span className="mx-1.5  font-semibold capitalize">
										Description
									</span>
								</th>
								<th className="pb-5 border-b border-black">
									<span className="mx-1.5  font-semibold capitalize">
										Quantity
									</span>
								</th>
								<th className="pb-5 border-b border-black">
									<span className="mx-1.5  font-semibold capitalize">
										Value
									</span>
								</th>
								<th className="pb-5 border-b border-black">
									<span className="mx-1.5  font-semibold capitalize">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{DashboardContext?.itemsCollection ? (
								<>
									<TableCard />
								</>
							) : (
								// Ensure userData is not null before using it in JSX
								<div className="relative flex flex-col items-center justify-center">
									<h3>Loading...</h3>
								</div>
							)}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default Tables;
