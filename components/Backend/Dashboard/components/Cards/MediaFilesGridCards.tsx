// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initial, stagger} from "@/animations/animations";
import {useDashboardGlobalContext} from "@/context/dashboard";

const MediaFilesGridCards: FC = () => {
	const DashboardContext = useDashboardGlobalContext();

	console.log(DashboardContext?.mediaFilesCollection?.length);

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-wrap gap-4 -m-3"
			>
				{DashboardContext?.mediaFilesCollection ? (
					DashboardContext?.mediaFilesCollection.length > 0 ? (
						DashboardContext?.mediaFilesCollection.map(
							(item: any, index: number) => (
								<>
									<div className="w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/6">
										<Link
											href="https://cmsblueinventory.com/wp-content/uploads/2023/09/pexels-karolina-grabowska-4506270-scaled.jpg"
											target="blank"
										>
											<Image
												width={1000}
												height={1000}
												src="https://cmsblueinventory.com/wp-content/uploads/2023/09/pexels-karolina-grabowska-4506270-scaled.jpg"
												alt=""
												className="w-full rounded-lg mb-0 lg:mb-4 object-cover object-center h-[75px] sm:h-[150px]"
											/>
											<div className="flex-wrap items-center justify-between hidden px-2 -m-2 lg:flex">
												<div className="w-auto p-2">
													<h3 className="text-sm font-semibold">Image 001</h3>
												</div>
												<div className="w-auto p-2">
													<span className="text-xs font-semibold text-darkGrey">
														1.04 MB
													</span>
												</div>
											</div>
										</Link>
									</div>
								</>
							)
						)
					) : (
						<>
							<div className="flex flex-col items-center justify-center m-auto">
								<h3>No Media</h3>
							</div>
						</>
					)
				) : (
					// Ensure userData is not null before using it in JSX
					<div className="relative flex flex-col items-center justify-center">
						<h3>Loading...</h3>
					</div>
				)}
			</motion.div>
		</>
	);
};

export default MediaFilesGridCards;
